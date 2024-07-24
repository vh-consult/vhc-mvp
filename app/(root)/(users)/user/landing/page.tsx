
import RenderUserLanding from '@/components/user/RenderUserLanding';
import UpcomingRenderer from '@/components/user/UpcomingRenderer';
import React from 'react'

const UserHomePage = () => {
  return (
    <section className="pt-6">
      <div className="h-[300px] w-[90%] mx-auto rounded-[20px] bg-hero bg-cover">
      <UpcomingRenderer/>
    </div>
    <div className='bg-dark-2 w-[90%] mx-auto py-10 md:grid md:grid-cols-3 flex-wrap gap-10'>
      <RenderUserLanding/>
    </div>

    </section>
  )
}

export default UserHomePage
