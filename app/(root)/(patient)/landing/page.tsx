"use client"
import RenderUserLanding from '@/components/user/RenderUserLanding';
import LandingPageBanner from '@/components/user/LandingPageBanner';
import React from 'react'
import useDBUser from '@/hooks/useDBUser';
import { useRouter } from 'next/navigation';
import Loader from '@/components/general/Loader';

const UserHomePage = () => {
  const {role, companyId} = useDBUser()
  const router = useRouter()

  if (role === "PharmacyAdmin") {
    return router.push(`/company/${companyId}/overview}`)
  }
  return (
        <section className="w-full flex flex-row p-3">
          <div className=" mx-auto  w-[33%] rounded-[20px] bg-sky-2">
            {/* convert this to the medication reminder */}
            <LandingPageBanner/>
          </div>
          <div className='mx-auto w-[65%] grid grid-cols-2 flex-wrap gap-6'>
            <RenderUserLanding/>
          </div>
        </section>
      )
}

export default UserHomePage
