"use server"

import { revalidatePath } from "next/cache";
import Booking from "../database/models/booking.model";
import { Company } from "../database/models/company.model";
import { User } from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export interface BookingParams {
    date?: Date;
    problem_statement?: string;
    link?: string;
    channel?: 'virtual'| 'inPerson'| 'lab';
    host?: string;
}

// I need to fix the booking host side by making hosts only doctors

export async function newBooking(clerkId: string, formData: BookingParams) {
    try {
        await connectToDatabase()
        const creator = await User.findOne({clerkId})
        if(!creator) throw new Error("Can't book an appointment | Invalid User")
                
        if (formData.host === "" && creator.personalPhysician !== undefined) {
            formData.host = creator.personalPhysician
        } else if (formData.host !== "" && creator.personalPhysician === undefined) {
            creator.personalPhysician = formData.host
        } 
        const host = await User.findOne({_id: formData.host}) || await Company.findOne({_id: formData.host}) 
        if (!host) throw new Error("Host not found")
        if(!host.clients.includes(creator._id)){
            host.clients.push(creator._id)
            await host.save()
        }
        
        const appointment = await Booking.create({
            ...formData, 
            patient:creator._id,
        })
        appointment.link = `${process.env.NEXT_PUBLIC_BASE_URL}/consultation-room/${appointment._id}`
        appointment.save()
        console.log(host)

        host.requestedBookings.push(appointment._id)
        await host.save()  
        console.log(appointment._id)
        return JSON.parse(JSON.stringify(appointment._id))
    } catch (error) {
        // handleError(error)
        console.error(error)
    }
}

export async function cancelBooking(clerkId: string, sessionId:string) {
    try {
        await connectToDatabase()

        const userCancelingBooking = await User.findOne({
            clerkId,
        }).populate("bookings")
        if (!userCancelingBooking) throw new Error("User not found")
        if (!userCancelingBooking.booking.includes(sessionId)) throw new Error("Booking session not found in user's bookings")

        const booking = await Booking.findById(sessionId)
        if (!booking) throw new Error("Booking not found")
        
        booking.status = "canceled"
        await booking.save()

        return {message: "Booking canceled"}
    } catch (error) {
        handleError(error)
    }
}

export async function notifyHost(patientId:string, bookingId:string) {
    try {
        await connectToDatabase()
        const userNeedingEmergencyConsultation = await User.findOne({clerkId: patientId})
        if (!userNeedingEmergencyConsultation) throw new Error("User creating session not found")
        
        const bookedAppointment = await Booking.findById(bookingId).populate("host")
        if (!bookedAppointment) throw new Error("Non-existent appointment in database")
        
        bookedAppointment.host.ongoingSession = bookingId
        revalidatePath(`/${bookedAppointment.host.clerkId}/overview`)
        return {message: "Doctor notified"}
    } catch (error) {
        handleError(error)
    }
}

export async function searchHost(query: string) {
    try {
        await connectToDatabase()

        // Search for hospitals
        const hospitalHosts = await Company.find({
            name: { $regex: query, $options: 'i' },
            companyType: "Hospital"
        }).select('_id name')

        // Search for doctors
        const doctorHosts = await User.find({
            userRole: "Doctor",
            $or: [
                { firstName: { $regex: query, $options: 'i' } },
                { lastName: { $regex: query, $options: 'i' } },
                { $expr: { $regexMatch: { 
                    input: { $concat: ["$firstName", " ", "$lastName"] }, 
                    regex: query, 
                    options: "i" 
                } } }
            ]
        }).select('_id firstName lastName')

        // Combine and format results
        const results = [
            ...hospitalHosts.map(hospital => ({
                id: hospital._id.toString(),
                name: hospital.name,
                hostType: 'Company'
            })),
            ...doctorHosts.map(doctor => ({
                id: doctor._id.toString(),
                name: `${doctor.firstName} ${doctor.lastName}`,
                hostType: 'User'
            }))
        ]
        return JSON.parse(JSON.stringify(results))

    } catch (error) {
        handleError(error)
        return []
    }
}

export async function fetchDoctorBookings(clerkId:string) {
    try {
        await connectToDatabase()
        const user = await User.findOne(
            {clerkId , userRole: "Doctor"}
        ).populate({
            path: "bookings",
            populate: [
                {path: "patient", select:"firstName lastName photo"}
            ]
        })
        if (!user) throw new Error("User not found")
        
        const bookings = user.bookings

        return JSON.parse(JSON.stringify(bookings))
    } catch (error) {
      handleError(error)  
    }
}

export async function fetchHospitalBookings (hospitalId: string) {
    try {
        await connectToDatabase()
        const hospital = await Company.findOne(
            {_id: hospitalId , companyType: "Hospital"}
        ).populate("bookings")
        if (!hospital) throw new Error("Hospital not found")
        
        const bookings = hospital.bookings
        return JSON.parse(JSON.stringify(bookings))
    } catch (error) {
      handleError(error)  
    }
}

export async function getMessages(clerkId: string) {
    try {
        await connectToDatabase()
        const user = await User.findOne({clerkId}).populate('messages')
        if (!user) throw new Error("User not found")
        const messages = user.messages
    
        return JSON.parse(JSON.stringify(messages))
    } catch (error) {
      handleError(error)  
    }

}

