"use client"

import useDBUser from '@/hooks/useDBUser'
import { useRouter } from 'next/navigation'
import React from 'react'
import ClickableCard from '../general/ClickableCard'
import { getAdminCompany } from '@/lib/actions/company.actions'
import Loader from '../general/Loader'

export interface ClickableCardProps {
    title: string;
    description: string;
    imageSrc: string;
    action: string;
}

export interface ClickableCardDataStructure {
    patientAndDoctor: ClickableCardProps[];
    admin: ClickableCardProps[];
    patient: ClickableCardProps[];
    doctor: ClickableCardProps[];

}



const RenderUserLanding = () => {
    const router = useRouter()
    const {role, clerkId, companyId} = useDBUser()

    const ClickableCardData: ClickableCardDataStructure = {
        patientAndDoctor: [
            {
                title: 'Consultation',
                description: 'Visit consultation room',
                imageSrc: '/icons/consultation.svg',
                action: `/consultation/home`
            },
            {
                title: 'Pharmacy',
                description: 'Order for drugs',
                imageSrc: '/icons/Pill.svg',
                action: `/pharmacy/home`
            },
            {
                title: 'Blogs',
                description: 'Access health-related information',
                imageSrc: '/icons/dashboard.svg',
                action: `/blogs/home`
            },
        ],
        patient: [
            {
                title: 'Dashboard',
                description: 'Enter your dashboard',
                imageSrc: '/icons/dashboard.svg',
                action: `/${clerkId}/dashboard`
            },
        ],
        doctor: [
            {
                title: 'Affiliates & Clients',
                description: 'Manage your affiliate contacts',
                imageSrc: '/icons/Company.svg',
                action: `/affiliates`
            },
        ],
        admin: [
            {
                title: 'Company Profile',
                description: 'Manage your company',
                imageSrc: '/icons/Company.svg',
                action: `/company/${companyId}/overview`
            },
        ]
    };
    
  return (

        <>
            {
                role === undefined? (
                    <ClickableCard 
                    title="Activate Account"
                    description="Activate your account"
                    imgURL="/icons/Profile.svg"
                    handleClick={() => { router.push("/account-activation")}}
                    className='bg-white hover:bg-gray-100 text-green-4 h-[250px] w-[100%]'
                />
                ) : ''
            }
            {
                role === "Patient" ? (
                    ClickableCardData.patient.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-green-4 w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : ''
            }
            {
                role === "Patient" || role === "Doctor"  ? (
                    ClickableCardData.patientAndDoctor.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-green-4 w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : ''
            }
            {
                role === "Doctor" ? (
                    ClickableCardData.doctor.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-green-4 w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : ''
            }
            {
                role === "HospitalAdmin" || role === "PharmacyAdmin" && companyId !== undefined ? (
                    ClickableCardData.admin.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-green-4 w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : (companyId === undefined && role === "PharmacyAdmin" ) ? (
                    <ClickableCard 
                    title="Register Company"
                    description="Create company profile"
                    imgURL="/icons/Company.svg"
                    handleClick={() => { router.push("/company/set-up")}}
                    className='bg-white hover:bg-gray-100 text-green-4 w-[100%]'
                />
                ): ''
            }
            {
                role === "" ? <Loader/> : ''
            }
        </>
  )
}

export default RenderUserLanding
