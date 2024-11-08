"use server"

import { DrugPrescriptionParams } from "@/components/pharmacy/PrescriptionForm"
import Consultation from "../database/models/consultation.model"
import Doctor from "../database/models/doctor.model"
import Medication, { MedicationParams } from "../database/models/medication.model"
import Patient from "../database/models/patient.model"
import User from "../database/models/user.model"
import { connectToDatabase } from "../database/mongoose"
import { handleError } from "../utils"


export const fetchMeds = async (id: string) => {
    try {
        await connectToDatabase()
        const user = await Patient.findById(id)
        if(!user) throw new Error("User not found")
        
        const meds = await user.populate("currentMeds")
        if(meds.length === 0) throw new Error("No current meds")
        
        return JSON.parse(JSON.stringify(meds))
    } catch (error) {
        handleError(error)
    }
}


export const postMeds = async (
    doctorId: string,
    consultationId: string, 
    medData: DrugPrescriptionParams[],
) => {
    try {
        await connectToDatabase()
        const doctor = await Doctor.findOne({id: doctorId})
        if (!doctor) throw new Error('doctor not found')
        
        const session = await Consultation.findById(consultationId)
        if (!session) throw new Error('consultation session not found')
        
        if(session.doctor.toString() === doctor._id.toString()){
            medData.forEach(async (data: any)=> {
                const meds = await Medication.create(data)
                session.medication.push(meds._id)
                await session.save()
            })

            return {message: 'Drug added to meds'}
        } else {
            throw new Error("Doctor can't prescribe drugs")
        }

    } catch (error) {
        handleError(error)
    }
}


export const editsMeds = async (id: string, medData: MedicationParams, medsId: string) => {
    try {
        await connectToDatabase()
        const user = await User.findById(id)
        if(!user) throw new Error("User not found")
        
        const medsToUpdate = await Medication.findOneAndUpdate({_id: medsId}, medData, {new: true})
        
    } catch (error) {
        handleError(error)
    }
}