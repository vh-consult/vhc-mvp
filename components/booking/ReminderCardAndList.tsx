'use client'
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getReminders } from '@/lib/actions/appointment.actions'
import Image from 'next/image';

export interface ReminderCardProps {
  imageUrl: string;
  sender: string;
  message: string;
  time: Date;
}

const ReminderCard = ({imageUrl, sender, message, time}: ReminderCardProps) => {
  return (
    <div className='w-full'>
      <Image 
        src={imageUrl}
        alt='user_picture'
        width={80}
        height={80}
        className='rounded-full object-cover'
      />
      <div className="flex flex-col">
        <div className="flex flex-row flex-between">
          <span className='text-lg'>{sender}</span>
          <span className='text-xs'>{time.toLocaleTimeString()}</span>
        </div>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  )
}

const ReminderList = () => {
  const {user} = useUser()
  const [reminders, setReminders] = useState<ReminderCardProps[]>()

  const fetchReminders = async () => {
    const allReminders = await getReminders(user?.id!)
    setReminders(allReminders)
  }
    
  return (
    <div>
      {
        reminders ? (reminders.map((reminder, index) => (
          <ReminderCard 
            key={index}
            imageUrl={reminder.imageUrl}
            time={reminder.time}
            sender= {reminder.sender}
            message= {reminder.message}
          />
        ))): 'No reminder'
      }
    </div>
  )
}

export default ReminderList
