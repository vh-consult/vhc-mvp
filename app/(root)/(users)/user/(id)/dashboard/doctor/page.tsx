"use client"
import PatientList from '@/components/doctor/PatientList'
import useUserRole from '@/hooks/useUserRole'
import React from 'react'

const OverviewPage = () => {
  const {userRole} = useUserRole()
  return (
    <div>
      hey {userRole}
    </div>
  )
}

export default OverviewPage