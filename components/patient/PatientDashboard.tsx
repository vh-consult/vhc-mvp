import React from 'react'
import { FaLevelUpAlt, FaWeight } from 'react-icons/fa'
import { MdHeight, MdScale } from 'react-icons/md'
import HighlightCard from '@/components/general/HighlightCard'
import Medication from './Medication'
import Message from '../message/Message'

const PatientDashboard = () => {
    const vitals = [
      {
        title: 'Height (m)',
        icon: <MdHeight/>,
        value: '1.3'
      },
      {
        title: 'Weight (kg)',
        icon: <FaWeight/>,
        value: '65'
      },
      {
        title: 'Blood Pressure (Hg/Pa)',
        icon: <MdScale/>,
        value: '135'
      },
      {
        title: 'Sugar Level (mg)',
        icon: <FaLevelUpAlt/>,
        value: '154'
      },
    ]
    return(
      <main className="w-full">
        <div className="w-full flex flex-between">
          {
            vitals.map(vital => (
              <HighlightCard 
                className='bg-white rounded-lg w-[24%] h-[125px]'
                icon={vital.icon}
                title={vital.title}
                value={vital.value}
                key={vital.title}
              />
            ))
          }
        </div>
        <div className="w-full mt-4 gap-x-3 flex flex-between">
            <Medication/>
            <Message className='bg-white w-[500px]'/>
        </div>
      </main>
    )
  }
export default PatientDashboard
