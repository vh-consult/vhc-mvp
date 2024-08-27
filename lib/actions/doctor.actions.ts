"use server"


import Doctor from "../database/models/doctor.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Patient from "../database/models/patient.model";


export async function fetchAffiliateHospital(doctorId:string) {
    try {
      await connectToDatabase()
      const doctor = await Doctor.findOne(
        {clerkId: doctorId}
      ).populate("affiliateHospital")
      if (!doctor) throw new Error("Doctor Not Found")
      
      const hospital = doctor.affiliateHospital
  
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

export async function fetchAppointmentRequests(doctorId:string) {
    try {
      await connectToDatabase()
      const doctor = await Doctor.findOne(
        {clerkId: doctorId}
      ).populate({
        path: "requestedAppointments",
        select: "patient problemStatement channel date",
        populate: [
            {path: "patient", select: "firstName lastName dateOfBirth healthRecord currentMeds"}
        ],
        
      })
      if (!doctor) throw new Error("Doctor Not Found")
      
      const requests = doctor.requestedAppointments
  
      return JSON.parse(JSON.stringify(requests))
      
    } catch (error) {
      handleError(error)
    }
}

export async function fetchOngoing(doctorId:string) {
    try {
        await connectToDatabase()
        const doctor = await Doctor.findOne(
            {clerkId: doctorId}
        ).populate({
            path: "ongoingSession", 
            populate: [{path: "patient", select: "firstName lastName "}], 
            select: "patient link date"
        })
        if (!doctor) throw new Error("Doctor Not Found")
        const session = doctor.ongoingSession
        if(session===undefined) {
            return "no ongoing session"
        } else {
            return JSON.parse(JSON.stringify(session))
        }
    } catch (error) {
        handleError(error)
    }
}


export async function fetchUpcoming(doctorId:string) {
    try {
        await connectToDatabase()
        const doctor = await Doctor.findOne(
            {clerkId: doctorId}
        ).populate({
            path: "acceptedAppointments", 
            populate: [{path: "patient", select: "firstName lastName healthRecord"}], 
            select: "patient link date problemStatement"
        })
        if (!doctor) throw new Error("Doctor Not Found")
        
        const now = new Date()
        const upcoming = doctor.acceptedAppointments.filter((appointment:any) => {return (new Date(appointment.date) > now)})
        
        return JSON.parse(JSON.stringify(upcoming))
    } catch (error) {
        handleError(error)
    }
}

export async function doctorDashboardData(doctorId:string) {
    try {
        const requests = await fetchAppointmentRequests(doctorId)
        const upcoming = await fetchUpcoming(doctorId)
        const ongoing = await fetchOngoing(doctorId)
        // console.log({requests, upcoming, ongoing})
        return {requests, upcoming, ongoing}
    } catch (error) {
        handleError(error)
    }
}