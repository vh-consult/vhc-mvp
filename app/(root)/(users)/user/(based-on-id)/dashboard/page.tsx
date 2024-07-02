"use client"
import React from 'react'
import DoctorDashboard from '@/components/user/DoctorDashboard'
import PatientDashboard from '@/components/user/PatientDashboard'
import PharmacyAdminDashboard from '@/components/user/PharmacyAdminDashboard'
import useUserRole from '@/hooks/useUserRole'
import HospitalAdminDashboard from '@/components/user/HospitalAdminDashboard'


const DashboardPage = () => {
  // const {userRole} = useUserRole()
  let userRole = "hospitalAdmin"
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
