import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdMeetingRoom, MdMessage, MdOutlineEmail, MdOutlineRoom, MdSchedule } from 'react-icons/md'
import { Button } from '../ui/button'

const AffiliateDoctor = () => {
  return (
    <div className="h-[260px] w-full flex bg-white rounded-lg p-4 items-center">
      <div className="w-[250px] h-full bg-green-1">
        <Image 
            src={'/images/doc-1.jpg'}
            alt='hospital-image'
            width={250}
            height={200}
            className='w-full h-[185px] object-cover'
        />
        <h1 className="text-lg font-medium">Dr Moroe Samuella</h1>
        <p className="text-sm">Merriz Hospital, Indiana</p>
      </div>
      <div className="w-[calc(100%-260px)] ml-4">
        <div className="mb-3">
            <h1 className="font-medium">
                Bio
            </h1>
            <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quas delectus fugit sint incidunt, 
                itaque, tempora perferendis animi, magni eius aspernatur velit possimus quidem consequatur eaque quam adipisci 
                asperiores voluptas culpa laudantium cupiditate. Ratione itaque impedit vero nemo unde sapiente reiciendis ipsa 
                minus accusantium quis.
            </p>
        </div>
        <div className="grid grid-cols-2">

            <div className="">
                <h1 className="font-medium">
                    Contact
                </h1>
                <ul className='text-sm '>
                    <li className='flex items-center'>
                        <MdOutlineEmail className='mr-2'/>
                        moroesamuella@merrizhospital.com
                    </li>
                    <li className='flex items-center'>
                        <MdMeetingRoom className='mr-2'/>
                        <Link href={''} className='underline hover:font-medium'>
                            Join Consultation Room
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="">
            <h1 className="font-medium">
                    Actions
                </h1>
                <div className="flex gap-x-6">
                    <Button>
                        <MdSchedule className='mr-2'/>
                        Book An Appointment
                    </Button>
                    <Button>
                        <MdMessage className='mr-2'/>
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AffiliateDoctor
