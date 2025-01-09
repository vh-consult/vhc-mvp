import Image from 'next/image'
import React from 'react'

const AffiliateHospital = () => {
  return (
    <div className="h-[260px] w-full flex bg-white rounded-lg p-4 items-center" >
      <div className="w-[250px] h-full bg-secondary">
        <Image 
            src={'/images/hosp-1.jpg'}
            alt='hospital-image'
            width={250}
            height={220}
            className='w-full h-[175] object-cover'
        />
        <h1 className="text-xl font-medium">Serwise Hospital LLC</h1>
        <p className="text-sm">Ayeduae, Kumasi</p>
      </div>
      <div className="ml-4 flex flex-col w-[calc(100%-260px)] ">
        <div className="mb-3">
            <h1 className="text-base font-semibold">
                About
            </h1>
            <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id, expedita ea aliquid laudantium perferendis natus explicabo molestias vel animi aliquam, error tenetur cumque, sunt libero sequi vero ipsa fuga delectus accusantium totam similique optio perspiciatis! Fugiat minima cumque officiis quae molestiae vel nostrum doloremque odio, sed necessitatibus ea aut consequuntur iure at accusantium dolor deserunt cupiditate culpa ipsa temporibus. Fugit tempora, itaque fugiat voluptate animi a quo adipisci nostrum distinctio. Adipisci corrupti sequi voluptatem!
            </p>
        </div>
        <div className="">
            <h1 className="text-base font-semibold">
                Specialties
            </h1>
            <ul className='list-disc ml-4 grid grid-cols-2 text-sm'>
                <li>E.N.T</li>
                <li>Eye Clinic</li>
                <li>Gynaecology</li>
                <li>Psychoanalysis</li>
                <li>Child care</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AffiliateHospital
