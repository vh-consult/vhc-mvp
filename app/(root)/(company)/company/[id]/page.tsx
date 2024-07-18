"use client"
import AboutComponent from '@/components/company/AboutComponent'
import AdminsComponent from '@/components/company/AdminsComponent'
import PostsComponent from '@/components/company/PostsComponent'
import ServicesComponent from '@/components/company/ServicesComponent'
import AddToInventory from '@/components/pharmacy/AddToInventory'
import { CompanyProps, fetchCompanyData } from '@/lib/actions/company.actions'
import { CompanyParams } from '@/lib/database/models/company.model'
import { linkSync } from 'fs'
import Image from 'next/image'
import React, { ReactNode, useState, useEffect } from 'react'
import { BsDot } from 'react-icons/bs'

interface NavComponent {
  label: string;
  componentToRender: ReactNode
}





const CompanyProfile = ({companyId}:{companyId: string}) => {
  const [companyData, setCompanyData] = useState<CompanyParams>()
  const navsForRendering = [
    {
      label: 'About',
      componentToRender: <AboutComponent companyDescription={companyData?.description!}/>
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
  const [active, setActive] = useState(navsForRendering[0].label)
  useEffect(()=>{
    const request = async () => {
      const company = await fetchCompanyData(companyId)
      setCompanyData(company)
    }
    request()
  }, [companyId])
  return(
    <section>
      <div className="w-full">
        <div className="w-full h-1/6 bg-blue-50"></div>
        <div className="w-full flex">
          <Image 
            alt=''
            src={companyData?.logo!}
            width={100}
            height={100}
          />
          <div className="">
            <h2 className="text-2xl font-medium">
            {companyData?.name!}
            </h2>
            <p className="text-base">
              Your healthcare in one place
            </p>
            <p className="text-sm opacity-75 flex">
            {companyData?.companyType!} <BsDot/> {companyData?.location!} 
            </p>
          </div>
        </div>
        <div className="w-2/6 flex flex-between" >
          {
            navsForRendering.map((component, index) => (
                <span 
                  key={index} 
                  onClick={()=> setActive(component.label)} 
                  className={`
                    ${active === component.label? 'text-blue-1': ''} 
                    hover:cursor-pointer`
                  }>
                    {component.label}
                </span>
              ))
          }
        </div>
      </div>
      <div className="">
      {
            navsForRendering.map((component, index) => (
                <div className="" key={index}>
                  {active === component.label? component.componentToRender : ``}
                </div>
              ))
          }
      </div>
    </section>
  )
}

const CompanyPage =  ({params}: {params: {id: string}}) => {    
  return (
    
    <main className='w-full min-h-screen'>
      <CompanyProfile companyId={params.id}/>
    </main>
  )
}

export default CompanyPage
