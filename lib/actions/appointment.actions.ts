import { User } from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export async function postConsultationForm(doctorId:string, formData: any, userId: string) {
    try {
        await connectToDatabase()
        const userActingAsDoctor = await User.findOne({clerkId: doctorId})
        if (!userActingAsDoctor) throw new Error("User not found")
        if (userActingAsDoctor.role !== "doctor") throw new Error("You can't upload a consultation form")
        
        const patient = await User.findById({_id: userId})
        if (!patient) throw new Error("User not found")

        

    } catch (error) {
        handleError(error)
    }
}

export async function editConsultationSummary(doctorId:string, formData: any) {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}

export async function fetchConsultationSummary(doctorId:string, formData: any) {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}