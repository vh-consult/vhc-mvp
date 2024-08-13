"use client"

import useDBUser from '@/hooks/useDBUser'
import { useRouter } from 'next/navigation'
import React from 'react'
import ClickableCard from '../general/ClickableCard'
import { getAdminCompany } from '@/lib/actions/company.actions'

export interface ClickableCardProps {
    title: string;
    description: string;
    imageSrc: string;
    action: string;
}

export interface ClickableCardDataStructure {
    patientAndDoctor: ClickableCardProps[];
    admin: ClickableCardProps[];
    user: ClickableCardProps[];
}



const RenderUserLanding = () => {
    const router = useRouter()
    const {role, clerkId, companyId} = useDBUser()

    const ClickableCardData: ClickableCardDataStructure = {
        user: [
            {
                title: 'Dashboard',
                description: 'Enter your dashboard',
                imageSrc: '/icons/dashboard.svg',
                action: `/user/${clerkId}/dashboard`
            },
            {
                title: 'Consultation',
                description: 'Visit consultation room',
                imageSrc: '/icons/consultation.svg',
                action: `/consultation/home`
            },
        ],
        patientAndDoctor: [
            {
                title: 'Pharmacy',
                description: 'Order for drugs',
                imageSrc: '/icons/Pill.svg',
                action: `/pharmacy/home`
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
                    className='bg-white hover:bg-gray-100 text-green-1 h-[250px] w-[100%]'
                />
                ) : 
               ( ClickableCardData.user.map((card, index) => (
                    <ClickableCard 
                        title={card.title}
                        description={card.description}
                        imgURL={card.imageSrc}
                        handleClick={() => { router.push(card.action)}}
                        className='bg-white hover:bg-gray-100 text-green-1 w-[100%]'
                        key={index}
                    />

                )))
            }
            {
                role === "Patient" || role === "Doctor"  ? (
                    ClickableCardData.patientAndDoctor.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-green-1 w-[100%]'
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
                ) : companyId === undefined && role !== "Patient" ? (
                    <ClickableCard 
                    title="Register Company"
                    description="Create company profile"
                    imgURL="/icons/Company.svg"
                    handleClick={() => { router.push("/company/set-up")}}
                    className='bg-white hover:bg-gray-100 text-green-1 w-[100%]'
                />
                ): ''
            }
        </>
  )
}

export default RenderUserLanding
