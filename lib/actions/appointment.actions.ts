import { Consultation } from "../database/models/appointment.model";
import { Doctor, User } from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export async function postConsultationForm(doctorId:string, formData: any, userId: string) {
    try {
        await connectToDatabase()
        const userActingAsDoctor = await Doctor.findOne({clerkId: doctorId})
        if (!userActingAsDoctor) throw new Error("Doctor not found")
        
        const patient = await User.findById({_id: userId})
        if (!patient) throw new Error("User not found")

        const newConsultationSession = await Consultation.create(formData)
        patient.healthRecord.append(newConsultationSession._id)
        await patient.save()

        userActingAsDoctor.consultationHistory.append(newConsultationSession._id)
        await userActingAsDoctor.save()

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