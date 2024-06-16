import Image from 'next/image'
import React from 'react'

const cardsContent = {
    personalDetails: {
      header: 'Personal Details',
      contents: [
        {
          title: 'Full Name',
          body: 'Solomon Aries'
        },
        {
          title: 'Date of Birth',
          body: '12th July, 1996'
        },
        {
          title: 'Gender',
          body: 'Male'
        },
        {
          title: 'Language(s) Spoken',
          body: ['English', 'Twi']
        },
        {
          title: 'Country',
          body: 'Ghana'
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
        body: 'Serwise hospital LLC'
      },
      {
        title: 'personal physician',
        body: 'Dr Monroe Xiav'
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

const Account = () => {
  return (
    <div className=''>
      <div className="w-full h-[225px] rounded-lg p-3 border border-gray-400 ">
        <h2 className="text-xl capitalize font-medium">
          {
            cardsContent.personalDetails.header
          }
        </h2>
        <div className="flex w-[80%]">
          <Image
            width={150}
            height={150} 
            src="/assets/images/doc-3.jpg" 
            alt="" 
            className='w-[150px] h-[150px] object-cover border
            border-gray-400 rounded-full'
            />
          <div className="w-2/3 flex flex-wrap">
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
      <div className="w-full flex justify-between mt-3">

        <div className="w-[300px] rounded-lg p-2 h-[315px] border border-gray-400">
          <h2 className='text-xl capitalize font-medium'>
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

        <div className="w-[300px] rounded-lg p-2 h-[315px] border border-gray-400">
          <h2 className='text-xl capitalize font-medium'>
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
        <div className="w-[300px] rounded-lg p-2 h-[315px] border border-gray-400">
          <h2 className='text-xl capitalize font-medium'>
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
