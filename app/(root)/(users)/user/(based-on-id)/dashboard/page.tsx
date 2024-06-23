"use client"
import PatientDashboard from '@/components/patient/PatientDashboard'
import useUserRole from '@/hooks/useUserRole'
import React from 'react'



const DoctorDashboard = () => {
  return(
    <main className="w-full">This is the doctor dashboard</main>
  )
}

const PharmacyAdminDashboard = () => {
  return(
    <main className="w-full">This is the pharmacy admin dashboard</main>
  )
}

const HospitalAdminDashboard = () => {
  return(
    <main className="w-full">This is the hospital admin dashboard</main>
  )
}


const DashboardPage = () => {
  // const {userRole} = useUserRole()
  const userRole = "patient"
  return (
    <div>
      {
        userRole === "patient"? (<PatientDashboard/>) : 
        userRole === "doctor"? (<DoctorDashboard/>) :
        userRole === "pharmacyAdmin"? (<PharmacyAdminDashboard/>) :
        userRole === "hospitalAdmin"? (<HospitalAdminDashboard/>) : `Nothing to show you`
      }
    </div>
  )
}

export default DashboardPage
