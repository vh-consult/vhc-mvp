
import RenderUserLanding from '@/components/user/RenderUserLanding';
import UpcomingRenderer from '@/components/user/UpcomingRenderer';
import React from 'react'

const UserHomePage = () => {
  return (
    <section className="w-full flex flex-row p-3">
      <div className=" mx-auto w-[33%] rounded-[20px] bg-hero bg-cover">
        <UpcomingRenderer/>
      </div>
      <div className='mx-auto w-[65%] grid grid-cols-2 flex-wrap gap-6'>
        <RenderUserLanding/>
      </div>
    </section>
  )
}

export default UserHomePage
