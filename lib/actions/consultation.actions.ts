"use server"

import { revalidatePath } from "next/cache";
import Appointment from "../database/models/appointment.model";
import { Company } from "../database/models/company.model";
import Consultation from "../database/models/consultation.model";
import Doctor from "../database/models/doctor.model";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

interface MedicationParams {
    drug: string;
    dose: number;
    caution: string;
    duration?: string;
}

interface ConsultationParams {
    prescription?: Array<MedicationParams>;
    summary?: string;
    diagnosis?: string;
    examination?: string
}

export async function startConsultation(appointmentId:string) {
    try {
        await connectToDatabase()
        console.log(appointmentId)

        const bookedAppointment = await Appointment.findById(appointmentId).populate("doctor").populate("patient")
        if (!bookedAppointment) throw new Error("Non-existent appointment in database")
        
        bookedAppointment.doctor.ongoingSession = appointmentId
        revalidatePath(`/consultation/home`)
        
        const appointmentObject = bookedAppointment.toObject();
        delete appointmentObject._id

        const newConsultationSession = await Consultation.create({...appointmentObject})
        const patient = bookedAppointment.patient
        const doctor = bookedAppointment.doctor


        patient.healthRecord.push(newConsultationSession._id)
        await patient.save()
        console.log(patient.healthRecord)
        
        doctor.consultationHistory.push(newConsultationSession._id)
        await doctor.save()
        
        await Appointment.findOneAndDelete({
            _id: appointmentId, 
        })
        return {consultationId: newConsultationSession._id}
    } catch (error) {
        handleError(error)
    }
}

export async function postConsultationForm(
    formData: ConsultationParams, 
    consultationId: string,
) {
    try {
        await connectToDatabase()
        const updated = await Consultation.findOneAndUpdate({_id: consultationId}, formData, {new: true})
        if(!updated) throw new Error("consultation not found and updated")
        
        return {message: "Summary added successfully"}
    } catch (error) {
        handleError(error)
    }
} 

export async function editConsultationSummary(doctorId:string, formData: any, sessionId: string) {
    try {
        await connectToDatabase()
        const doctor = await Doctor.findOne({clerkId: doctorId})
        if (!doctor) throw new Error("Doctor not found")
        if(!doctor.consultationHistory.includes(sessionId)) throw new Error("You can't edit this session")

        const session =await Consultation.findByIdAndUpdate({_id: sessionId}, formData, {new: true})
        if (!session) throw new Error("No past consultation session found")
        
        return JSON.parse(JSON.stringify(session))
    } catch (error) {
        handleError(error)
    }
}

export async function fetchAllConsultationSummary() {
    try {
        await connectToDatabase()
        const sessions = Consultation.find()
        if(sessions.countDocuments.length > 0) throw new Error("No consultation sessions yet")
        return JSON.parse(JSON.stringify(sessions))
    } catch (error) {
        handleError(error)
    }
}

export async function fetchConsultationSession(consultationId:string) {
    try {
        await connectToDatabase()
        const session = await Consultation.findById(consultationId).populate([
            { path: "patient", select: "firstName lastName healthRecord dateOfBirth email"  },
            { path: "doctor", select: "firstName lastName "  },
            { path: "medication" },
        ])
        if(!session) throw new Error("Session not found")
            console.log(session)
        return JSON.parse(JSON.stringify(session))
    } catch (error) {
        handleError(error)
    }
}