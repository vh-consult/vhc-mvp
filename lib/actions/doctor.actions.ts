"use server"


import Doctor from "../database/models/doctor.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Patient from "../database/models/patient.model";


export async function fetchAffiliateHospital(userId:string) {
    try {
      await connectToDatabase()
      const user = await Doctor.findOne(
        {clerkId: userId}
      ).populate("affiliateHospital")
      if (!user) throw new Error("Doctor Not Found")
      
      const hospital = user.affiliateHospital
  
      return JSON.parse(JSON.stringify(hospital))
      
    } catch (error) {
      handleError(error)
    }
}

export async function fetchDoctorClients(clerkId:string) {
    try {
      await connectToDatabase()
      const doctor = await Doctor.findOne({clerkId}).populate(
        {path: "clients", select: "firstName lastName gender email photo dateOfBirth"}
      )
      if(!doctor) throw new Error("Doctor not found")
      
      const clients = doctor.clients
      return JSON.parse(JSON.stringify(clients))
    } catch (error) {
      handleError(error)
    }
  }