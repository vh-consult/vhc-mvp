import Message from '@/components/message/Message'
import MessageList from '@/components/message/MessageCard'
import React from 'react'

const CompanyPostsPage = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-4'>
      <div className="col-span-1">
        <Message/>
      </div>
      <div className="col-span-2 bg-white "></div>
    </div>
  )
}

export default CompanyPostsPage
