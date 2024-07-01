"use client"

import useUserRole from '@/hooks/useUserRole'
import { useRouter } from 'next/navigation'
import React, { Suspense } from 'react'
import Loader from '../Loader'
import ClickableCard from '../ClickableCard'

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

const ClickableCardData: ClickableCardDataStructure = {
    user: [
        {
            title: 'Dashboard',
            description: 'Enter your dashboard',
            imageSrc: '/icons/dashboard.svg',
            action: '/user/dashboard'
        },
        {
            title: 'Affiliation',
            description: 'Manage your contacts',
            imageSrc: '/icons/userlist.svg',
            action: '/user/affiliation'
        },
        {
            title: 'Pharmacy',
            description: 'Order for drugs',
            imageSrc: '/icons/Pill.svg',
            action: '/pharmacy/home'
        },
        {
            title: 'Consultation',
            description: 'Visit consultation room',
            imageSrc: '/icons/consultation.svg',
            action: '/user/consultation/home'
        },
    ],
    company: [
        {
            title: 'Company',
            description: 'Manage your company',
            imageSrc: '/icons/Company.svg',
            action: '/company/home'
        },
    ]
};



const RenderUserLanding = () => {
    const router = useRouter()
    const {userRole} = useUserRole()
  return (

        <>
            {
                ClickableCardData.user.map((card, index) => (
                    <ClickableCard 
                        title={card.title}
                        description={card.description}
                        imgURL={card.imageSrc}
                        handleClick={() => { router.push(card.action)}}
                        className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                        key={index}
                    />

                ))
            }
            {
                userRole === "hospitalAdmin" || userRole === "pharmacyAdmin" ? (
                    ClickableCardData.company.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                            key={index}
                        />
        
                    ))
                ) : ``
            }
        </>
  )
}

export default RenderUserLanding
