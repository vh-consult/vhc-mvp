"use server"

import { revalidatePath } from "next/cache";
import Appointment from "../database/models/appointment.model";
import { Company } from "../database/models/company.model";
import Consultation from "../database/models/consultation.model";
import Doctor from "../database/models/doctor.model";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Patient from "../database/models/patient.model";

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


export async function postConsultationForm(
    formData: ConsultationParams, 
    consultationId: string,
) {
    try {
        await connectToDatabase()
        console.log(formData)
        const updated = await Consultation.findOneAndUpdate({_id: consultationId}, formData, {new: true})
        if(!updated) throw new Error("consultation not found and updated")
        updated.status = "finished"
        await updated.save()

        const patient = await Patient.findById(updated.patient)
        if(!patient) throw new Error("no patient found")

        const doctor = await Doctor.findById(updated.doctor)
        if(!doctor) throw new Error("no doctor found")
        
        patient.healthRecord.push(updated._id)
        await patient.save()

        doctor.consultationHistory.push(updated._id)
        await doctor.save()
        return {message: "Summary added successfully"}
    } catch (error) {
        handleError(error)
    }
} 

export async function editConsultationSummary(doctorId:string, formData: any, sessionId: string) {
    try {
        await connectToDatabase()
        const doctor = await Doctor.findOne({id: doctorId})
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
            { path: "medication", select: "drug dose caution" },
        ])
        if(!session) throw new Error("Session not found")
            console.log(session)
        return JSON.parse(JSON.stringify(session))
    } catch (error) {
        handleError(error)
    }
}


export async function acceptConsultationRequest(consultationId:string) {
    try {
        await connectToDatabase()
        const session = await Consultation.findById(consultationId)
        if(!session) throw new Error("Consultation session not found")
        
        session.status = "accepted"
        await session.save()

        return {message: "Request accepted"}
    } catch (error) {
        handleError(error)
    }
}

export async function rejectConsultationRequest(consultationId:string) {
    try {
        await connectToDatabase()
        const session = await Consultation.findById(consultationId)
        if(!session) throw new Error("Consultation session not found")
        
        session.status = "accepted"
        await session.save()

        return {message: "Request accepted"}
    } catch (error) {
        handleError(error)
    }
}