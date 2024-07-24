import React from 'react'
import MessageList from './MessageCardAndList'

const Message = () => {
  return (
    <div className='w-full h-[400px] bg-white rounded-lg'>
        <h3 className="w-full text-sm  font-semibold p-3">
          Recent Messages
        </h3>
        <div className="w-full">
          <MessageList/>
        </div>
    </div>
  )
}

export default Message
