import PatientList from '@/components/doctor/PatientList'
import React from 'react'

const OverviewPage = () => {
  return (
    <>
      <PatientList 
        age={4}
        gender='Male'
        imageSrc='/images/doc 1.jpg'
        name='Ayisi Nana' 
      />
    </>
  )
}

export default OverviewPage