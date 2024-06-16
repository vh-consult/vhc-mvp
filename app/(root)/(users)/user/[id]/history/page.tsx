import HistoryCard from '@/components/patient/HistoryCard'
import React from 'react'

const userHistoryList = [
    {
      activity: 'Check up',
      date: new Date('2024-06-12T12:30'),
      host: 'Serwise Hospital',
      complaint: 'Abdominal pains after eating banku and pepper without fish',
      meds: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'consultation'
    },
    {
      activity: 'Visit To K-Pharma Drug Store',
      date: new Date('2024-06-12T12:30'),
      host: 'MC Pharma',
      paymentMethod: 'Mobile Money',
      orders: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'purchase'
    },
    {
      activity: 'Check up',
      date: new Date('2024-06-12T12:30'),
      host: 'Serwise Hospital',
      complaint: 'Abdominal pains after eating banku and pepper without fish',
      meds: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'consultation'
    },
    {
      activity: 'Visit To K-Pharma Drug Store',
      date: new Date('2024-06-12T12:30'),
      host: 'MC Pharma',
      paymentMethod: 'Mobile Money',
      orders: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'purchase'
    },
    {
      activity: 'Check up',
      date: new Date('2024-06-12T12:30'),
      host: 'Serwise Hospital',
      complaint: 'Abdominal pains after eating banku and pepper without fish',
      meds: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'consultation'
    },
    {
      activity: 'Visit To K-Pharma Drug Store',
      date: new Date('2024-06-12T12:30'),
      host: 'MC Pharma',
      paymentMethod: 'Mobile Money',
      orders: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'purchase'
    },
    {
      activity: 'Lab Tests',
      date: new Date('2024-06-12T12:30'),
      host: 'Serwise Hospital',
      tests_result: [{Malaria: 'Positive'}, {Typhoid:'Negative'}],
      summary: 'Diagnosed of malaria',
      eventType: 'lab'
    },
    {
      activity: 'Visit To K-Pharma Drug Store',
      date: new Date('2024-06-12T12:30'),
      host: 'MC Pharma',
      paymentMethod: 'Mobile Money',
      orders: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'purchase'
    },
    {
      activity: 'In-person Appointment',
      date: new Date('2024-06-12T12:30'),
      host: 'Dr Mensah Oteh',
      review: 'Ulcer diagnosis',
      meds: ['G - 50mg', 'paracetamol 25mg'],
      summary: 'Medications changed based on patients reaction',
      eventType: 'check-up'
    },
    {
      activity: 'Visit To K-Pharma Drug Store',
      date: new Date('2024-06-12T12:30'),
      host: 'MC Pharma',
      paymentMethod: 'Mobile Money',
      orders: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'purchase'
    },
    {
      activity: 'Check up',
      date: new Date('2024-06-12T12:30'),
      host: 'Serwise Hospital',
      complaint: 'Abdominal pains after eating banku and pepper without fish',
      meds: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'consultation'
    },
    {
      activity: 'Visit To K-Pharma Drug Store',
      date: new Date('2024-06-12T12:30'),
      host: 'MC Pharma',
      paymentMethod: 'Mobile Money',
      orders: ['G - 50mg', 'paracetamol 25mg'],
      eventType: 'purchase'
    },
  ]

const UserHistoryPage = () => {
  return (
    <div>
      <div 
        className='
        w-1/2  md:w-1/4 flex flex-row rounded-lg
        items-center
        ' 
      >
        <div className={`w-[30px] h-[30px] border mr-2 bg-blue-1 rounded-full `}></div>
        <div>
          <h3 className='font-medium text-sm'>Age</h3>
          <p className='font-medium text-2xl'>45</p>
        </div>
      </div>
      <div className=' flex justify-between flex-wrap'>
        {
            userHistoryList.map((history, index) => {
                return(
                    <HistoryCard 
                        key={index}
                        usedAt='settings'
                        activity={history.activity}
                        date={history.date}
                        host={history.host}
                        paymentMethod={history.paymentMethod}
                        complaint={history.complaint}
                        eventType={history.eventType}
                        orders={history.orders}
                        className={`w-[250px] h-[140px] p-2 my-2 rounded-lg`}
                    />
                )
            })
        }
        </div>
    </div>
  )
}

export default UserHistoryPage
