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
    <div className="flex h-[90%] flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
    <h2 className="bg-green-1 rounded py-2 text-center text-base font-normal">
      
    </h2>
    <div  className="flex flex-col gap-2">
      <h1 className="text-4xl text-green-4 font-extrabold lg:text-6xl">
        {time}
      </h1>
      <p className="text-lg font-medium text-green-4 lg:text-2xl">
        {date}
      </p>
    </div>
  </div>
  )
}

export default UpcomingRenderer
