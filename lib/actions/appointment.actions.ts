"use server"

import Booking from "../database/models/booking.model";
import { Company } from "../database/models/company.model";
import { User } from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export interface BookingParams {
    date: Date;
    problem_statement?: string;
    link?: string;
    channel?: 'virtual'| 'inPerson'| 'lab';
    host?: string;
}


export async function newBooking(clerkId: string, formData?: BookingParams) {
    try {
        await connectToDatabase()
        const creator = await User.findOne({clerkId})
        if(!creator) throw new Error("Can't book an appointment | Invalid User")
        if(formData && formData.host === "" ){
            formData.host = creator.personalPhysician || creator.affiliateHospital
        }
        const appointment = await Booking.create(formData)
        appointment.patient = creator._id
        appointment.save()
        if (formData && creator.personalPhysician === null) {
            creator.personalPhysician = formData.host
        }
        creator.bookings.push(appointment._id)
        await creator.save()  

        return {message: "created", id: appointment._id}
    } catch (error) {
        handleError(error)
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
        
        booking.status = "cancelled"
        await booking.save()

        return {message: "Booking cancelled"}
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

export async function fetchBookings(clerkId:string) {
    try {
        await connectToDatabase()
        const user = await User.findOne(
            {clerkId }
        ).populate("bookings")
        if (!user) throw new Error("User not found")
        
        const bookings = user.bookings
        return JSON.parse(JSON.stringify(bookings))
    } catch (error) {
      handleError(error)  
    }
}

export async function hostBookings(clerkId:string) {
    try {
        await connectToDatabase()
        const user = await User.findOne({clerkId})
        if(!user) throw new Error("User not found")
        const bookings = await Booking.find({host: user._id}).populate("host")

        return JSON.parse(JSON.stringify(bookings))
    } catch (error) {
        handleError(error)
    }
}

export async function appendConsultationLink(bookingId: string, link:string) {
    try {
        await connectToDatabase()
        const booking = await Booking.findById(bookingId)
        if(!booking) throw new Error("Booking not found")
        
        booking.link = `${process.env.NEXT_PUBLIC_BASE_URL}/consultation/room/${link}`
        await booking.save()
        return {message: "Link added"}
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

