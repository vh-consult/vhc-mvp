"use client"
import React from 'react'
import DoctorDashboard from '@/components/user/DoctorDashboard'
import PatientDashboard from '@/components/user/PatientDashboard'
import useDBUser from '@/hooks/useDBUser'
import Loader from '@/components/general/Loader'


const DashboardPage = () => {
  const {role} = useDBUser()
  return (
    <div>
      {
        role === undefined ? <Loader/> :
        role !== "Doctor" ? (<PatientDashboard/>) : (<DoctorDashboard/>) 
      }
    </div>
  )
}

export default DashboardPage
