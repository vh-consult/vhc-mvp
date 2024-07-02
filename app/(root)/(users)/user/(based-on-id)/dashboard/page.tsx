"use client"
import DoctorDashboard from '@/components/doctor/DoctorDashboard'
import PatientDashboard from '@/components/patient/PatientDashboard'
import useUserRole from '@/hooks/useUserRole'
import React from 'react'


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
  let userRole = "pharmacyAdmin"
  return (
    <div>
      {
        userRole === "pharmacyAdmin"? (<PharmacyAdminDashboard/>) :
        userRole === "patient"? (<PatientDashboard/>) : 
        userRole === "doctor"? (<DoctorDashboard/>) :
        userRole === "hospitalAdmin"? (<HospitalAdminDashboard/>) : `Nothing to show you`
      }
    </div>
  )
}

export default DashboardPage
