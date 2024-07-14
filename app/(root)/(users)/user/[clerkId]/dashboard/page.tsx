"use client"
import React from 'react'
import DoctorDashboard from '@/components/user/DoctorDashboard'
import PatientDashboard from '@/components/user/PatientDashboard'
import PharmacyAdminDashboard from '@/components/user/PharmacyAdminDashboard'
import useUserRole from '@/hooks/useUserRole'
import HospitalAdminDashboard from '@/components/user/HospitalAdminDashboard'


const DashboardPage = () => {
  const {role} = useUserRole()
  return (
    <div>
      {
        role === "pharmacyAdmin"? (<PharmacyAdminDashboard/>) :
        role === "patient"? (<PatientDashboard/>) : 
        role === "doctor"? (<DoctorDashboard/>) :
        role === "hospitalAdmin"? (<HospitalAdminDashboard/>) : `Nothing to show you`
      }
    </div>
  )
}

export default DashboardPage
