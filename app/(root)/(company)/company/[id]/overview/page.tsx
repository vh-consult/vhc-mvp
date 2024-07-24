"use client"
import React from 'react'
import PharmacyOverview from '@/components/company/PharmacyOverview'
import useDBUser from '@/hooks/useDBUser'
import HospitalOverview from '@/components/company/HospitalOverview'
import Loader from '@/components/general/Loader'


const OverviewPage = () => {
  const {role} = useDBUser()
  return (
    <div>
      {
        role === "PharmacyAdmin"? (<PharmacyOverview/>) :
        role === "HospitalAdmin"? (<HospitalOverview/>) : <Loader/>
      }
    </div>
  )
}

export default OverviewPage
