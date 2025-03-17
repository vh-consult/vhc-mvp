"use client"
import { useUserStore } from '@/stores/user-store'
import Image from 'next/image'
import React from 'react'

const Account = () => {
  const {user} = useUserStore()
  const cardsContent = {
    personalDetails: {
      header: 'Personal Details',
      contents: [
        {
          title: 'Full Name',
          body: user?.firstName + ' ' + user?.lastName
        },
        {
          title: 'Date of Birth',
          body: new Date(user?.dob as Date).toLocaleDateString()
        },
        {
          title: 'Gender',
          body: user?.gender
        },
        {
          title: 'Language(s) Spoken',
          body: ['English', 'Twi']
        },
        {
          title: 'Country',
          body: user?.country
        },
        {
          title: 'National ID',
          body: 'GHA-72153382-2'
        },
    ]
  },
  healthcare: {
    header: 'Healthcare Provider Details',
    contents: [
      {
        title: 'hospital of affiliation',
        body: user?.affiliateHospital
      },
      {
        title: 'personal physician',
        body: user?.personalPhysician
      },
      {
        title: 'insurance subscription',
        body: 'Personal care'
      },
      {
        title: 'renewal date',
        body: '12th August, 2024'
      },
  ]
},
  contact: {
    header: 'contact information',
    contents: [
      {
        title: 'Phone number',
        body: ['020 654 8839', '024557 8392']
      },
      {
        title: "next of kin's contact ",
        body: '055 476 7839'
      },
      {
        title: 'email address',
        body: 'solomonaries12@icloud.com'
      },
      {
        title: 'social media handles',
        body: ['the_ayis', 'Solomon Aries']
      },
    ]
  },
  address: {
    header: 'Address Information',
    contents: [
      {
        title: 'City/Sate',
        body: 'Kumasi'
      },
      {
        title: "digital address",
        body: 'KM-883-4838-273'
      },
      {
        title: 'house number',
        body: 'ntb 22/d'
      },
      {
        title: 'work address',
        body: 'Nsien, Accra \n Opposite MTN Office'
      },
    ]
  },
}

  return (
    <div className='w-full'>
      <div className="w-full h-[245px] bg-white rounded-lg p-3 shadow-sm ">
        <h2 className="text-lg capitalize font-medium">
          {
            cardsContent.personalDetails.header
          }
        </h2>
        <div className="flex items-center">
          <Image
            width={150}
            height={150} 
            src={user?.photo as string} 
            alt="" 
            className='w-[185px] h-[185px] object-cover 
            rounded-full'
            />
          <div className="w-[calc(100%-195px)] grid grid-cols-4 grid-rows-2 gap-8">
            {
              cardsContent.personalDetails.contents.map((content, index)=>{
                return(
                  <div 
                    key={index} 
                    className='flex flex-col mx-3'
                  >
                    <span className="font-medium text-sm opacity-50 capitalize">
                      {content.title}
                    </span>
                    <span className="">
                      {content.body}
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-x-4 mt-4">

        <div className=" rounded-lg p-2 h-[280px]  bg-white">
          <h2 className='text-lg capitalize font-medium'>
            {
              cardsContent.healthcare.header
            }
          </h2>
          <div>
          {
              cardsContent.healthcare.contents.map((content, index)=>{
                return(
                  <div 
                    key={index} 
                    className='flex flex-col my-3'
                  >
                    <span className="font-medium text-sm opacity-50 capitalize">
                      {content.title}
                    </span>
                    <span className="">
                      {content.body}
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className=" rounded-lg p-2 h-[280px]  bg-white">
          <h2 className='text-lg capitalize font-medium'>
            {
              cardsContent.contact.header
            }
          </h2>
          <div>
          {
              cardsContent.contact.contents.map((content, index)=>{
                return(
                  <div 
                    key={index} 
                    className='flex flex-col my-3'
                  >
                    <span className="font-medium text-sm opacity-50 capitalize">
                      {content.title}
                    </span>
                    <span className="">
                      {content.body}
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className=" rounded-lg p-2 h-[280px]  bg-white">
          <h2 className='text-lg capitalize font-medium'>
            {
              cardsContent.address.header
            }
          </h2>
          <div>
          {
              cardsContent.address.contents.map((content, index)=>{
                return(
                  <div 
                    key={index} 
                    className='flex flex-col my-3'
                  >
                    <span className="font-medium text-sm opacity-50 capitalize">
                      {content.title}
                    </span>
                    <span className="">
                      {content.body}
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
