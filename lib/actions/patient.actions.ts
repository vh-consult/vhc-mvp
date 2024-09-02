"use server"

import Doctor from "../database/models/doctor.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Patient from "../database/models/patient.model";


export async function fetchAffiliates(userId:string) {
    try {
      await connectToDatabase()
      const user = await Patient.findOne(
        {clerkId: userId}
      ).populate("affiliateHospital").populate("personalPhysician")
      if (!user) throw new Error("User Not Found")
      
      const hospital = user.affiliateHospital
      const doctor =user.personalPhysician
  
      return JSON.parse(JSON.stringify({...hospital, ...doctor }))
      
    } catch (error) {
      handleError(error)
    }
}

export async function fetchHealthRecord(patientId:string) {
    try {
      await connectToDatabase()
      console.log(patientId)
      const user = await Patient.findOne({clerkId: patientId}).populate({
        path: "healthRecord",
        populate: [{path: "doctor", select: "firstName lastName"}]
      })
      if(!user) throw new Error("User not found")
      console.log(user)
      const record = user.healthRecord
  
      return JSON.parse(JSON.stringify(record))
    } catch (error) {
      handleError(error)
    }
  }

