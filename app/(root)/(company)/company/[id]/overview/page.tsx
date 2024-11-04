"use client"
import React from 'react'
import PharmacyOverview from '@/components/company/PharmacyOverview'
import useDBUser from '@/hooks/useUser'
import HospitalOverview from '@/components/company/HospitalOverview'
import Loader from '@/components/general/Loader'
import { useParams } from 'next/navigation'


const OverviewPage = () => {
  const {role} = useDBUser()
  const {id} = useParams()
  console.log(id)
  return (
    <div>
      {
        role === undefined? <Loader/> :
        role === "PharmacyAdmin"? (<PharmacyOverview id={id as string}/>) : 
        role === "HospitalAdmin"? (<HospitalOverview/>) : ''
      }
    </div>
  )
}

export default OverviewPage
