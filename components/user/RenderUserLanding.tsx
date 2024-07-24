"use client"

import useDBUser from '@/constants/hooks/useDBUser'
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
    pharmacy: ClickableCardProps[];
    hospital: ClickableCardProps[];
    company: ClickableCardProps[];
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
                title: 'Affiliation',
                description: 'Visit affiliate page',
                imageSrc: '/icons/userlist.svg',
                action: `/user/${clerkId}/affiliation`
            },
            {
                title: 'Pharmacy',
                description: 'Order for drugs',
                imageSrc: '/icons/Pill.svg',
                action: `/pharmacy/home`
            },
        ],
        company: [
            {
                title: 'Company Profile',
                description: 'Manage your company',
                imageSrc: '/icons/Company.svg',
                action: `/company/${companyId}`
            },
        ],
        hospital: [
            {
                title: 'Affiliation',
                description: 'Manage your affiliates',
                imageSrc: '/icons/Medical Doctor.svg',
                action: `/company/${companyId}/affiliates`
            },
            {
                title: 'Manage Clients',
                description: 'Manage your patients',
                imageSrc: '/icons/User Account.svg',
                action: `/company/${companyId}/clients`
            },
        ],
        pharmacy: [
            {
                title: 'Inventory',
                description: 'Manage your inventory',
                imageSrc: '/icons/Warehouse.svg',
                action: `/company/${companyId}/inventory`
            },
            {
                title: 'Orders',
                description: 'Process customer\' orders',
                imageSrc: '/icons/Cart.svg',
                action: `/company/${companyId}/orders`
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
                role === "Patient" || role === "Doctor" ? (
                    ClickableCardData.patientAndDoctor.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-dark-1 hover:bg-dark-3 text-green-1 w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : role === "PharmacyAdmin" ? (
                    ClickableCardData.pharmacy.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-dark-1 hover:bg-dark-3 text-green-1 w-[100%]'
                            key={index}
                        />
        
                    ))
                ): ''
            }
            {
                role === "HospitalAdmin" || role === "PharmacyAdmin" ? (
                    ClickableCardData.company.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-dark-1 hover:bg-dark-3 text-green-1 w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : ``
            }
        </>
  )
}

export default RenderUserLanding
