"use server"

import Booking from "../database/models/booking.model";
import { Company } from "../database/models/company.model";
import Consultation from "../database/models/consultation.model";
import { User } from "../database/models/user.model";
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
    doctorId:string, 
    formData: ConsultationParams, 
    patientId: string,
    bookingId?: string
) {
    try {
        await connectToDatabase()

        const booking = await Booking.findOne({
            _id: bookingId, 
            patient: patientId, 
            doctor: doctorId
        })
        if(!booking) throw new Error("No booking found")

        const doctor = await User.findOne({
            clerkId: doctorId, 
            userRole: "Doctor"
        })
        if (!doctor) throw new Error("Doctor not found")
        
        const patient = await User.findById(patientId)
        if (!patient) throw new Error("Patient not found")

        const bookingObject = booking.toObject();
        delete bookingObject._id

        const newConsultationSession = await Consultation.create({...bookingObject, ...formData})
        patient.healthRecord.push(newConsultationSession._id)
        await patient.save()

        doctor.consultationHistory.push(newConsultationSession._id)
        await doctor.save()
        
        await Booking.findOneAndDelete({
            _id: bookingId, 
            patient: patientId, 
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
        const doctor = await User.findOne({clerkId: doctorId, userRole: "Doctor"})
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