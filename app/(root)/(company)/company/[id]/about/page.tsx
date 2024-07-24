import React from 'react'
import CompanyProfile from '@/components/company/CompanyProfile'


const CompanyAboutPage =  ({params}: {params: {id: string}}) => {    
  return (
    <main className='w-full h-[560px] text-blue-4'>
      <CompanyProfile companyId={params.id}/>
    </main>
  )
}

export default CompanyAboutPage
