"use client"
import SearchBar from '@/components/general/SearchBar'
import PatientList from '@/components/doctor/PatientList'
import React from 'react'
import { fetchDoctorClients } from '@/lib/actions/doctor.actions'
import { useUserStore } from '@/stores/user-store'

const headers = [
  "Name", "Gender", "Age", "Email", "Actions"
]

const Clients = async () => {
  const {user} = useUserStore()

  const clients = await fetchDoctorClients(user?._id!)
  return (
    <div className='px-16'>
      <div className="flex items-center justify-between mb-2">
        <h1 className='text-2xl font-medium'>Clientele</h1>
        <SearchBar className='border w-[300px] rounded-full bg-gray-100'/>
      </div>
      <div className="grid grid-cols-5  h-[30px] text-sm font-medium opacity-75 rounded-t-lg bg-gray-200 w-full items-center px-3">
        {
          headers.map((title, index) => (
            <span className="w-full ml-10 " key={index}>
              {title}
            </span>
          ))
        }
      </div>
      <div className="">
        {
          clients.map((client:any, index:number)=>(
            <PatientList 
              key={index}
              age={new Date().getFullYear() - new Date(client.dateOfBirth).getFullYear()}
              gender={client.gender}
              imageSrc={client.photo}
              name={client.firstName + ' ' + client.lastName}
              email={client.email}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Clients
