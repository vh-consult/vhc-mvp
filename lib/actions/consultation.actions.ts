"use server"

import Booking from "../database/models/booking.model";
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
    prescription: Array<MedicationParams>;
    summary?: string;
    diagnosis: string;
    examination?: string
}

export async function postConsultationForm(
    formData: ConsultationParams, 
    bookingId: string,
    doctorId: string
) {
    try {
        await connectToDatabase()

        const booking = await Booking.findOne({
            _id: bookingId, 
            host: doctorId
        }).populate("patient").populate("host")
        if(!booking) throw new Error("No booking found")

        const doctor = await Doctor.findOne({
            clerkId: doctorId, 
        })
        if (!doctor) throw new Error("Doctor not found")
        const patient = booking.patient

        const bookingObject = booking.toObject();
        delete bookingObject._id


        const newConsultationSession = await Consultation.create({...bookingObject, ...formData})
        patient.healthRecord.push(newConsultationSession._id)
        await patient.save()
        console.log(patient.healthRecord)
        
        doctor.consultationHistory.push(newConsultationSession._id)
        await doctor.save()
        
        await Booking.findOneAndDelete({
            _id: bookingId, 
            doctor: doctorId
        })
 
        return JSON.parse(JSON.stringify(newConsultationSession))

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