
import RenderUserLanding from '@/components/user/RenderUserLanding';
import React from 'react'

const UserHomePage = () => {

  
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const date = (new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
  })).format(now);
  return (
    <section className="pt-10">
      <div className="h-[300px] w-[90%] mx-auto rounded-[20px] bg-hero bg-cover">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
        Upcoming Meeting at: 12:30 PM 
        </h2>
        <div  className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">
            {time}
          </h1>
          <p className="text-lg font-medium text-green-1 lg:text-2xl">
            {date}
          </p>
        </div>
      </div>
    </div>
    <div className='bg-dark-2 min-h-screen w-[90%] mx-auto pt-10 pb-10 grid grid-cols-3 flex-wrap gap-10'>
      <RenderUserLanding/>
    </div>

    </section>
  )
}

export default UserHomePage
