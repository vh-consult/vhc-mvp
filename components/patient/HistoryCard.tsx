import React from 'react'
import { Button } from '../ui/button';

interface LabTestProps {
    test: string;
    result: string;
    lab_technician?: string;
    test_performed?: Array<string>;
  }

interface HistoryCardProps {
    activity: string;
    date: Date;
    host: string;
    summary?: string;
    button?: boolean;
    className?: string;
    meds?: Array<string>;
    paymentMethod?: string;
    orders?: Array<string>;
    eventType: string;
    complaint?: string;
    eventinterface?: 'consultation' | 'purchase' | 'lab' | 'check-up' | string;
    review?: string;
    tests_results?: Array<LabTestProps>;
    usedAt: string ;
  }

const HistoryCard = ({
    activity,
    date,
    host,
    summary,
    complaint,
    paymentMethod,
    orders,
    meds,
    eventType,
    tests_results,
    review,
    className,
    usedAt 
}: HistoryCardProps) => {
  return (
    <>
    {
      usedAt === 'settings' ? (
        <div 
          className={`
            ${className} bg-gray-50
            `}>
          <h3>{activity}</h3>
          <p>
            {new Date(date).toLocaleDateString()}
          </p>
          <div>
            {
              eventType==='consultation'?
              (
                <div>
                  <p>{complaint}</p>
                  {
                    meds && meds.map((med, index) => {return (
                      <span key={index} className='mr-2 capitalize'>{med}</span>
                    )})
                  }
                </div>
                ): eventType==='purchase'?
                (
                  <div>
                  {
                    orders && orders.map((med, index) => {return (
                      <span key={index} className='mr-2 capitalize'>{med}</span>
                    )})
                  }
                  <p>{paymentMethod}</p>
                </div>
                ) : eventType==='lab'?
                (
                  <div>
                  {
                    tests_results && tests_results.map((test, index) => {return (
                      <div key={index}>
                        <span>{test.test}:{test.result}</span>
                        <p>{test.lab_technician}</p>
                      </div>
                    )})
                  }
                </div>
                ): eventType==='check-up'?
                (
                  <div>
                  <p>{review}</p>
                  {
                    meds && meds.map((med, index) => {return (
                      <div key={index}>
                        <span>{med}</span>
                      </div>
                    )})
                  }
                  <p>{summary}</p>
                </div>
                ): ``
            }
          </div>
        </div>
      ) : (
        <div className={className}>
          <div className='w-full px-1 flex items-center h-[40px]'>
            <span 
              className='w-1/5'
            >
              {activity}
            </span>
            <span 
              className='w-1/5'
            >
              {date.toDateString().slice(4, 10)}
            </span>
            <span 
              className='w-1/5'
            >
              {date.toLocaleTimeString().slice(0,5)}
            </span>
            <span 
              className='w-1/5'
            >
              {host}
            </span>
            <span 
              className='w-1/5 flex items-center justify-between'
            >
              {summary}
              <Button 
                className='w-[80px] h-[25px] border border-patientTextColor rounded-md text-sm'
              >
                Get info
              </Button>
            </span>
          </div>
        </div>
      )
    }
  </>
  )
}

export default HistoryCard
