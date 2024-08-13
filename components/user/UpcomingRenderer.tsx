import React from 'react'

const UpcomingRenderer = () => {
    const now = new Date();

    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    const date = (new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full'
    })).format(now);
  return (
    <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
    <h2 className="bg-green-1 max-w-[300px] rounded py-2 text-center text-base font-normal">
    Upcoming Consultation at: 12:30 PM 
    </h2>
    <div  className="flex flex-col gap-2">
      <h1 className="text-4xl text-green-1 font-extrabold lg:text-7xl">
        {time}
      </h1>
      <p className="text-lg font-medium text-green-1 lg:text-2xl">
        {date}
      </p>
    </div>
  </div>
  )
}

export default UpcomingRenderer
