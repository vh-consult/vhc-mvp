import SearchBar from '@/components/general/SearchBar'
import PatientList from '@/components/doctor/PatientList'
import React from 'react'

const ClientsPage = () => {
  return (
<div>
      <div className="flex items-center justify-between">
        <h1 className='text-2xl font-medium'>Clientele</h1>
        <SearchBar className='border w-[225px] rounded-lg border-saturated-purple'/>
      </div>
      <div className="flex  h-[30px] text-sm font-medium opacity-75 rounded-t-lg bg-white w-full items-center justify-between">
        <span className="">
          
        </span>
        <span className="">
          Name
        </span>
        <span className="">
          Gender
        </span>
        <span className="">
          Age
        </span>
        <span className="">
          Email
        </span>
        <span className="">
          Insurance Plan
        </span>
        <span className='bg-pink-200'>
          Actions
        </span>
      </div>
      <div className="">
        <PatientList 
          age={12}
          gender='Male'
          imageSrc='/assets/images/doc-1.jpg'
          name='Samuel Kunde'
          email='samkunde1@gmail.com'
          insurancePlan='PersonalCare'
        />
        <PatientList 
          age={12}
          gender='Male'
          imageSrc='/assets/images/doc-1.jpg'
          name='Samuel Kunde'
          email='samkunde1@gmail.com'
          insurancePlan='PersonalCare'
        />
        <PatientList 
          age={12}
          gender='Male'
          imageSrc='/assets/images/doc-1.jpg'
          name='Samuel Kunde'
          email='samkunde1@gmail.com'
          insurancePlan='PersonalCare'
        />
        <PatientList 
          age={12}
          gender='Male'
          imageSrc='/assets/images/doc-1.jpg'
          name='Samuel Kunde'
          email='samkunde1@gmail.com'
          insurancePlan='PersonalCare'
        />
      </div>
    </div>
  )
}

export default ClientsPage
