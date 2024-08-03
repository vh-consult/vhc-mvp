"use server"

import Medication, { MedicationParams } from "../database/models/medication.model"
import { User } from "../database/models/user.model"
import { connectToDatabase } from "../database/mongoose"
import { handleError } from "../utils"


export const fetchMeds = async (clerkId: string) => {
    try {
        await connectToDatabase()
        const user = await User.findOne({clerkId})
        if(!user) throw new Error("User not found")
        
        const meds = await user.populate("currentMeds")
        if(meds.length === 0) throw new Error("No current meds")
        
        return JSON.parse(JSON.stringify(meds))
    } catch (error) {
        handleError(error)
    }
}


export const postMeds = async (
    clerkId: string, 
    medData: MedicationParams
) => {
    try {
        await connectToDatabase()
        const user = await User.findOne({clerkId})
        if(!user) throw new Error("User not found")

        const med = await Medication.create(medData)
        user.currentMeds.push(med._id)
        await user.save()
    } catch (error) {
        handleError(error)
    }
}


export const editsMeds = async (clerkId: string, medData: MedicationParams, medsId: string) => {
    try {
        await connectToDatabase()
        const user = await User.findOne({clerkId})
        if(!user) throw new Error("User not found")
        
        const medsToUpdate = await Medication.findOneAndUpdate({_id: medsId}, medData, {new: true})
        
    } catch (error) {
        handleError(error)
    }
}