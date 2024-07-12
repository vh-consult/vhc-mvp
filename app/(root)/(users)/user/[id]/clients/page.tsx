import SearchBar from '@/components/general/SearchBar'
import PatientList from '@/components/doctor/PatientList'
import React from 'react'

const headers = [
  "Name", "Gender", "Age", "Email", "Insurance plan", "Actions"
]

const ClientsPage = () => {
  return (
<div>
      <div className="flex items-center justify-between">
        <h1 className='text-2xl font-medium'>Clientele</h1>
        <SearchBar className='border w-[225px] rounded-lg border-saturated-purple'/>
      </div>
      <div className="flex  h-[30px] text-sm font-medium opacity-75 rounded-t-lg bg-dark-1 w-full items-center justify-between px-3">
        {
          headers.map((title, index) => (
            <span className="w-full ml-10" key={index}>
              {title}
            </span>
          ))
        }
      </div>
      <div className="">
        <PatientList 
          age={12}
          gender='Male'
          imageSrc='/images/doc-1.jpg'
          name='Samuel Kunde'
          email='samkunde1@gmail.com'
          insurancePlan='PersonalCare'
        />
        <PatientList 
          age={12}
          gender='Male'
          imageSrc='/images/doc-1.jpg'
          name='Samuel Kunde'
          email='samkunde1@gmail.com'
          insurancePlan='PersonalCare'
        />
        <PatientList 
          age={12}
          gender='Male'
          imageSrc='/images/doc-1.jpg'
          name='Samuel Kunde'
          email='samkunde1@gmail.com'
          insurancePlan='PersonalCare'
        />
        <PatientList 
          age={12}
          gender='Male'
          imageSrc='/images/doc-1.jpg'
          name='Samuel Kunde'
          email='samkunde1@gmail.com'
          insurancePlan='PersonalCare'
        />
      </div>
    </div>
  )
}

export default ClientsPage
