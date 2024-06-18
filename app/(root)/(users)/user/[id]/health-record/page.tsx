import RecordList from '@/components/patient/RecordList'
import React from 'react'

const records = [
  {
    complaint: ['Headache', 'Fever', 'Runny tummy', 'Cold'],
    consultationType:'Virtual Consultation',
    date:'12th Aug, 2023',
    diagnosis:['Malaria', 'Cholera', 'Typhoid fever', 'Pneumonia'],
    medications:[
      {drug: 'paracetamol', dose: '2X Daily'}, 
      {drug: 'Girazol', dose: '2X Daily'}
    ],
    physician:'Dr Martey Kwartey',
    time:'12:42pm',
    notes:['Check up in 12 days', 'Eat well and stay away from diary foods while taking drugs'],
    provider:'Serwise Hospital LLC',
  },
  {
    complaint: ['Headache', 'Fever', 'Runny tummy', 'Cold'],
    consultationType:'Virtual Consultation',
    date:'12th Aug, 2023',
    diagnosis:['Malaria', 'Cholera', 'Typhoid fever', 'Pneumonia'],
    medications:[
      {drug: 'paracetamol', dose: '2X Daily'}, 
      {drug: 'Girazol', dose: '2X Daily'}
    ],
    physician:'Dr Martey Kwartey',
    time:'12:42pm',
    notes:['Check up in 12 days', 'Eat well and stay away from diary foods while taking drugs'],
    provider:'Serwise Hospital LLC',
  },
  {
    complaint: ['Headache', 'Fever', 'Runny tummy', 'Cold'],
    consultationType:'Virtual Consultation',
    date:'12th Aug, 2023',
    diagnosis:['Malaria', 'Cholera', 'Typhoid fever', 'Pneumonia'],
    medications:[
      {drug: 'paracetamol', dose: '2X Daily'}, 
      {drug: 'Girazol', dose: '2X Daily'}
    ],
    physician:'Dr Martey Kwartey',
    time:'12:42pm',
    notes:['Check up in 12 days', 'Eat well and stay away from diary foods while taking drugs'],
    provider:'Serwise Hospital LLC',
  },
  {
    complaint: ['Headache', 'Fever', 'Runny tummy', 'Cold'],
    consultationType:'Virtual Consultation',
    date:'12th Aug, 2023',
    diagnosis:['Malaria', 'Cholera', 'Typhoid fever', 'Pneumonia'],
    medications:[
      {drug: 'paracetamol', dose: '2X Daily'}, 
      {drug: 'Girazol', dose: '2X Daily'}
    ],
    physician:'Dr Martey Kwartey',
    time:'12:42pm',
    notes:['Check up in 12 days', 'Eat well and stay away from diary foods while taking drugs'],
    provider:'Serwise Hospital LLC',
  },
  {
    complaint: ['Headache', 'Fever', 'Runny tummy', 'Cold'],
    consultationType:'Virtual Consultation',
    date:'12th Aug, 2023',
    diagnosis:['Malaria', 'Cholera', 'Typhoid fever', 'Pneumonia'],
    medications:[
      {drug: 'paracetamol', dose: '2X Daily'}, 
      {drug: 'Girazol', dose: '2X Daily'}
    ],
    physician:'Dr Martey Kwartey',
    time:'12:42pm',
    notes:['Check up in 12 days', 'Eat well and stay away from diary foods while taking drugs'],
    provider:'Serwise Hospital LLC',
  },
]

const HealthRecordPage = () => {
  return (
    <>
      <div className="w-full text-sm h-[30px] sticky left-[120px] top-[64px] z-50 text-center text-green-1 font-medium bg-dark-1 flex justify-between items-center">
        <span className="w-1/12 ">Date</span>
        <span className="w-2/12 ">Host Details</span>
        <span className="w-2/12 ">Symptoms</span>
        <span className="w-2/12 ">Diagnosis</span>
        <span className="w-2/12 ">Medication</span>
        <span className="w-3/12 ">Notes</span>
      </div>
      <div className='w-full bg-inherit'>
        {
          records.map((record, index) => {
            return (
              <RecordList
                key={index}
                complaint={record.complaint}
                consultationType={record.consultationType}
                date={record.date}
                diagnosis={record.diagnosis}
                medications={record.medications}
                physician={record.physician}
                time={record.time}
                notes={record.notes}
                provider={record.provider}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default HealthRecordPage
