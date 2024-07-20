"use client"

import useDBUser from '@/hooks/useDBUser'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ClickableCard from '../general/ClickableCard'
import { getAdminCompany } from '@/lib/actions/company.actions'

export interface ClickableCardProps {
    title: string;
    description: string;
    imageSrc: string;
    action: string;
}

export interface ClickableCardDataStructure {
    user: ClickableCardProps[];
    company: ClickableCardProps[];
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
                title: 'Affiliation',
                description: 'Manage your contacts',
                imageSrc: '/icons/userlist.svg',
                action: `/user/${clerkId}/affiliation`
            },
            {
                title: 'Pharmacy',
                description: 'Order for drugs',
                imageSrc: '/icons/Pill.svg',
                action: `/pharmacy/home`
            },
            {
                title: 'Consultation',
                description: 'Visit consultation room',
                imageSrc: '/icons/consultation.svg',
                action: `/user/${clerkId}/consultation/home`
            },
        ],
        company: [
            {
                title: 'Company',
                description: 'Manage your company',
                imageSrc: '/icons/Company.svg',
                action: `/company/${companyId}`
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
                    imgURL=""
                    handleClick={() => { router.push("/account-activation")}}
                    className='bg-dark-1 hover:bg-dark-3 text-green-1 h-[250px] w-[100%]'
                />
                ) : 
               ( ClickableCardData.user.map((card, index) => (
                    <ClickableCard 
                        title={card.title}
                        description={card.description}
                        imgURL={card.imageSrc}
                        handleClick={() => { router.push(card.action)}}
                        className='bg-dark-1 hover:bg-dark-3 text-green-1 w-[100%]'
                        key={index}
                    />

                )))
            }
            {
                role === "HospitalAdmin" || role === "PharmacyAdmin" ? (
                    ClickableCardData.company.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : ``
            }
        </>
  )
}

export default RenderUserLanding
