import React from 'react'
import RequestList from './RequestCardAndList'

const Request = () => {
  return (
    <div className='w-[37%] h-[400px] bg-dark-1 rounded-lg'>
        <h3 className="w-full text-sm opacity-75 font-semibold p-3 bg-dark-1 z-[10000]">
          Requests
        </h3>
        <div className="w-full">
          <RequestList/>
        </div>
    </div>
  )
}

export default Request
