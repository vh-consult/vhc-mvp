"use client"
import AboutComponent from '@/components/company/AboutComponent'
import AdminsComponent from '@/components/company/AdminsComponent'
import PostsComponent from '@/components/company/PostsComponent'
import ServicesComponent from '@/components/company/ServicesComponent'
import { CompanyProps, fetchCompanyData } from '@/lib/actions/company.actions'
import { linkSync } from 'fs'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import { BsDot } from 'react-icons/bs'

interface NavComponent {
  label: string;
  componentToRender: ReactNode
}

const navsForRendering = [
  {
    label: 'About',
    componentToRender: <AboutComponent/>
  },
  {
    label: 'Services',
    componentToRender: <ServicesComponent/>
  },
  {
    label: 'Posts',
    componentToRender: <PostsComponent/>
  },
  {
    label: 'Administrators',
    componentToRender: <AdminsComponent/>
  },
]



const CompanyProfile = () => {
  const [active, setActive] = useState(navsForRendering[0].label)
  
  const handleNavSelect = () => {
    //  setActive(label)
  }
  return(
    <section>
      <div className="w-full">
        <div className="w-full h-1/6 bg-blue-50"></div>
        <div className="w-full flex">
          <Image 
            alt=''
            src={'/images/'}
            width={100}
            height={100}
          />
          <div className="">
            <h2 className="text-2xl font-medium">
              K-Pharma Co. Ltd
            </h2>
            <p className="text-base">
              Your healthcare in one place
            </p>
            <p className="text-sm opacity-75 flex">
              Pharmacy <BsDot/> Accra 
            </p>
          </div>
        </div>
        <div className="w-2/6 flex flex-between" >
          {
            navsForRendering.map((component, index) => (
              <>
                <span 
                  key={index} 
                  onClick={handleNavSelect} 
                  className={`
                    ${active === component.label? 'text-blue-1': ''} 
                    hover:cursor-pointer`
                  }>
                    {component.label}
                </span>
                <div className="">
                  {component.componentToRender}
                </div>
              </>
              ))
          }
        </div>
      </div>
    </section>
  )
}

const CompanyPage = async ({params}: {params: {id: string}}) => {
    // const company = await fetchCompanyData(params.id)
    let type = "pharmacy"
  return (
    <main className='w-full min-h-screen'>
        <CompanyProfile/>
    </main>
  )
}

export default CompanyPage
