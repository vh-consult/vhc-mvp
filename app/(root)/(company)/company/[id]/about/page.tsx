"use client"
import React from 'react'
import CompanyProfile from '@/components/company/CompanyProfile'
import { useRouter } from 'next/router'

const CompanyAboutPage =  ( ) => {  
  const router = useRouter()  
  return (
    <main className='w-full h-[560px] text-blue-4'>
      <CompanyProfile companyId={router.query.id as string}/>
    </main>
  )
}

export default CompanyAboutPage
