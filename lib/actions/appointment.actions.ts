"use server"

import { revalidatePath } from "next/cache";
import Appointment from "../database/models/appointment.model";
import { Company } from "../database/models/company.model";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Patient from "../database/models/patient.model";
import Doctor from "../database/models/doctor.model";

export interface AppointmentParams {
    date?: Date;
    problem_statement?: string;
    link?: string;
    channel?: 'virtual'| 'inPerson'| 'lab';
    host?: string;
}

// I need to fix the Appointment host side by making hosts only doctors

export async function newAppointment(clerkId: string, formData: AppointmentParams) {
    try {
        await connectToDatabase()
        const creator = await Patient.findOne({clerkId})
        if(!creator) throw new Error("Can't book an appointment | Invalid User")
                
        if (formData.host === "" && creator.personalPhysician !== undefined) {
            formData.host = creator.personalPhysician
        } else if (formData.host !== "" && creator.personalPhysician === undefined) {
            creator.personalPhysician = formData.host
        } 
        console.log(formData)
        const host = await Doctor.findOne({_id: formData.host})
        if (!host) throw new Error("Host not found")
        if(!host.clients.includes(creator._id)){
            host.clients.push(creator._id)
            await host.save()
        }
        
        const appointment = await Appointment.create({
            ...formData, 
            patient:creator._id,
        })
        appointment.link = `${process.env.NEXT_PUBLIC_BASE_URL}/consultation-room/${appointment._id}`
        appointment.save()

        host.requestedAppointments.push(appointment._id)
        await host.save()  
        return JSON.parse(JSON.stringify(appointment._id))
    } catch (error) {
        // handleError(error)
        console.error(error)
    }
}

export async function cancelAppointment(clerkId: string, sessionId:string) {
    try {
        await connectToDatabase()

        const userCancelingAppointment = await Patient.findOne({
            clerkId,
        }).populate("appointments")
        if (!userCancelingAppointment) throw new Error("User not found")
        if (!userCancelingAppointment.appointments.includes(sessionId)) throw new Error("Appointment session not found in user's Appointments")

        const appointment = await Appointment.findById(sessionId)
        if (!appointment) throw new Error("Appointment not found")
        
        appointment.status = "canceled"
        await appointment.save()

        return {message: "Appointment canceled"}
    } catch (error) {
        handleError(error)
    }
}

export async function notifyHost(patientId:string, appointmentId:string) {
    try {
        await connectToDatabase()
        console.log(patientId, appointmentId)
        const userNeedingEmergencyConsultation = await Patient.findOne({clerkId: patientId})
        if (!userNeedingEmergencyConsultation) throw new Error("User creating session not found")
        
        const bookedAppointment = await Appointment.findById(appointmentId).populate("host")
        if (!bookedAppointment) throw new Error("Non-existent appointment in database")
        
        bookedAppointment.host.ongoingSession = appointmentId
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
        const doctorHosts = await Doctor.find({
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

export async function fetchRequestedAppointments(clerkId:string) {
    try {
        await connectToDatabase()
        const user = await Doctor.findOne({clerkId }).populate({
            path: "requestedAppointments",
            populate: [
                {path: "patient", select:"firstName lastName photo"}
            ]
        })
        if (!user) throw new Error("User not found")
        
        const appointments = user.requestedAppointments

        return JSON.parse(JSON.stringify(appointments))
    } catch (error) {
      handleError(error)  
    }
}

export async function fetchAcceptedAppointments(clerkId:string) {
    try {
        await connectToDatabase()
        const user = await Doctor.findOne({clerkId }).populate({
            path: "acceptedAppointments",
            populate: [
                {path: "patient", select:"firstName lastName photo"}
            ]
        })
        if (!user) throw new Error("User not found")
        
        const appointments = user.acceptedAppointments

        return JSON.parse(JSON.stringify(appointments))
    } catch (error) {
      handleError(error)  
    }
}

export async function fetchHospitalAppointments (hospitalId: string) {
    try {
        await connectToDatabase()
        const hospital = await Company.findOne(
            {_id: hospitalId , companyType: "Hospital"}
        ).populate("appointments")
        if (!hospital) throw new Error("Hospital not found")
        
        const appointments = hospital.appointments
        return JSON.parse(JSON.stringify(appointments))
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

