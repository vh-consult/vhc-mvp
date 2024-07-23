"use server"

import Booking from "../database/models/booking.model";
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

export interface BookingParams {
    date: Date;
    problem_statement?: string;
    link?: string;
    channel?: 'virtual'| 'inPerson'| 'lab';
    host?: string;
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


export async function newBooking(clerkId: string, formData?: BookingParams) {
    try {
        await connectToDatabase()
        const creator = await User.findOne({clerkId})
        if(!creator) throw new Error("Can't book an appointment | Invalid User")
        
        const appointment = await Booking.create(formData)
        appointment.patient = creator._id
        appointment.save()
        creator.appointments.push(appointment._id)
        await creator.save()  

        return {message: "created"}
    } catch (error) {
        handleError(error)
    }
}

export async function cancelBooking(clerkId: string, sessionId:string) {
    try {
        await connectToDatabase()

        const userCancelingBooking = await User.findOne({
            clerkId,
        })
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

export async function searchDoctor() {
    try {
        await connectToDatabase()
    } catch (error) {
      handleError(error)  
    }
}

export async function fetchBookings(clerkId:string) {
    try {
        await connectToDatabase()
        const user = await User.findOne({clerkId }).populate("bookings")
        if (!user) throw new Error("User not found")
        
        const bookings = user.bookings
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

