import React from 'react'
import CompanyProfile from '@/components/company/CompanyProfile'


const CompanyPage =  ({params}: {params: {id: string}}) => {    
  return (
    <main className='w-full h-screen bg-dark-2 text-green-1'>
      <CompanyProfile companyId={params.id}/>
    </main>
  )
}

export default CompanyPage
