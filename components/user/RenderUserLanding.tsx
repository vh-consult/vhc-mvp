"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import ClickableCard from '../general/ClickableCard'
import Loader from '../general/Loader'
import Cookies from "js-cookie"
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
    const user = JSON.parse(Cookies.get("user") || '{}');
    console.log(user)
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
                imageSrc: '/icons/info.svg',
                action: `/blogs/home`
            },
        ],
        patient: [
            {
                title: 'Dashboard',
                description: 'Enter your dashboard',
                imageSrc: '/icons/dashboard.svg',
                action: `/${user?.id}/dashboard`
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
                action: `/company/${user.company}/overview`
            },
        ]
    };
    
  return (

        <>
            {
                user.role === undefined? (
                    <ClickableCard 
                    title="Activate Account"
                    description="Activate your account"
                    imgURL="/icons/Profile.svg"
                    handleClick={() => { router.push("/account-activation")}}
                    className='bg-white hover:bg-gray-100 text-dark h-[250px] w-[100%]'
                />
                ) : ''
            }
            {
                user.role === "Patient" ? (
                    ClickableCardData.patient.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-dark w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : ''
            }
            {
                user.role === "Patient" || user.role === "Doctor"  ? (
                    ClickableCardData.patientAndDoctor.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-dark w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : ''
            }
            {
                user.role === "Doctor" ? (
                    ClickableCardData.doctor.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-dark w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : ''
            }
            {
                user.role === "HospitalAdmin" || user.role === "PharmacyAdmin" && user.company !== undefined ? (
                    ClickableCardData.admin.map((card, index) => (
                        <ClickableCard 
                            title={card.title}
                            description={card.description}
                            imgURL={card.imageSrc}
                            handleClick={() => { router.push(card.action)}}
                            className='bg-white hover:bg-gray-100 text-dark w-[100%]'
                            key={index}
                        />
        
                    ))
                ) : (user.company === undefined && user.role === "PharmacyAdmin" ) ? (
                    <ClickableCard 
                    title="Register Company"
                    description="Create company profile"
                    imgURL="/icons/Company.svg"
                    handleClick={() => { router.push("/company/set-up")}}
                    className='bg-white hover:bg-gray-100 text-dark w-[100%]'
                />
                ) :''
            }
            {
                user.role === "" ? <Loader/> : ''
            }
        </>
  )
}

export default RenderUserLanding
