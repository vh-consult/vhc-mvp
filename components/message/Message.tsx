import React from 'react'
import MessageList from './MessageCardAndList'
import { cn } from '@/lib/utils'

const Message = ({className}: {className?:string}) => {
  return (
    <div className={cn(`w-full h-[400px] bg-white rounded-lg`, className)}>
        <h3 className="w-full text-sm  font-semibold p-3">
          Recent Messages
        </h3>
        <div className="w-full">
          <MessageList className='bg-white hover:bg-gray-100'/>
        </div>
    </div>
  )
}

export default Message
