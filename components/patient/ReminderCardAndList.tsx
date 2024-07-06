import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getReminders } from '@/lib/actions/appointment.actions'

interface ReminderCardProps {
  sender: string;
  message: string
}

const ReminderCard = ({sender, message}: ReminderCardProps) => {
  return (
    <div>
      
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
        reminders && reminders.map((reminder, index) => (
          <ReminderCard 
            key={index}
            sender= {reminder.sender}
            message= {reminder.message}
            
          />
        ))
      }
    </div>
  )
}

export default ReminderList
