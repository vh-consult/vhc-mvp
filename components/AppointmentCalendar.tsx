
import React, {useState, useEffect} from 'react'

const AppointmentCalendar = (color: string | any) => {
    const exactDay = new Date(Date.now()).toLocaleDateString()
    const appointedDayStyle = `border-${color} `
    const exactDayStyle = `bg-${color} text-white`
  return (
    <div className='w-[100%] h-[100%] border rounded-t-xl p-4'>
        <div className='w-full flex items-center justify-between'>
            <span className='text-lg font-medium '>Calendar</span>
            <span className="">May, 2024</span>
        </div>
        <table className='w-full h-[98%] '>
            <thead className='w-full text-sm font-semibold opacity-80 h-[30px]'>
                <tr className='w-full h-full items-center flex justify-between '>
                    <td className='w-full h-full text-center'>Monday</td>
                    <td className='w-full h-full text-center'>Tuesday</td>
                    <td className='w-full h-full text-center'>Wednesday</td>
                    <td className='w-full h-full text-center'>Thursday</td>
                    <td className='w-full h-full text-center'>Friday</td>
                    <td className='w-full h-full text-center'>Saturday</td>
                    <td className='w-full h-full text-center'>Sunday</td>
                </tr>
            </thead>
            <tbody>
            <tr className='w-full h-[100px]   items-center flex justify-between'>
                <td className={`w-full relative h-full p-1 border ${exactDayStyle}`}>
                    <div className='absolute top-0 right-0 text-lg font-bold'>23</div>
                    <div className="absolute bottom-2 flex flex-col">
                        <span className={`text-sm font-medium ${exactDay? 'text-white' : `text-${color}`}`}>
                            Check-up
                        </span>
                        <span className='text-lg font-'>
                            Dr Rins Monroe
                        </span>
                        <span className='text-[12px] font-semibold'>
                            12:30pm
                        </span>
                    </div>
                </td>
                <td className={`w-full relative h-full p-1 border border-l-0 ${appointedDayStyle}`}>
                    <div className='absolute top-0 right-0 text-lg font-bold'>24</div>
                    <div className="absolute bottom-2 flex flex-col">
                        <span className={`text-sm font-medium ${!exactDay? 'text-white' : `text-${color}`}`}>
                            Check-up
                        </span>
                        <span className='text-lg font-'>
                            Dr Rins Monroe
                        </span>
                        <span className='text-[12px] font-semibold'>
                            12:30pm
                        </span>
                    </div>
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
            </tr>
            <tr className='w-full h-[100px]   items-center flex justify-between'>
                <td className='w-full h-full p-1 border'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
                <td className='w-full h-full p-1 border border-l-0'>
                    
                </td>
            </tr>
            <tr className='w-full h-[100px]   items-center flex justify-between'>
                <td className='w-full h-full p-1 border'>Monday</td>
                <td className='w-full h-full p-1 border border-l-0'>Tuesday</td>
                <td className='w-full h-full p-1 border border-l-0'>Wednesday</td>
                <td className='w-full h-full p-1 border border-l-0'>Thursday</td>
                <td className='w-full h-full p-1 border border-l-0'>Friday</td>
                <td className='w-full h-full p-1 border border-l-0'>Saturday</td>
                <td className='w-full h-full p-1 border border-l-0'>Sunday</td>
            </tr>
            <tr className='w-full h-[100px]   items-center flex justify-between'>
                <td className='w-full h-full p-1 border'>Monday</td>
                <td className='w-full h-full p-1 border border-l-0'>Tuesday</td>
                <td className='w-full h-full p-1 border border-l-0'>Wednesday</td>
                <td className='w-full h-full p-1 border border-l-0'>Thursday</td>
                <td className='w-full h-full p-1 border border-l-0'>Friday</td>
                <td className='w-full h-full p-1 border border-l-0'>Saturday</td>
                <td className='w-full h-full p-1 border border-l-0'>Sunday</td>
            </tr>
            <tr className='w-full h-[100px]  items-center flex justify-between'>
                <td className='w-full h-full p-1 border'>Monday</td>
                <td className='w-full h-full p-1 border border-l-0'>Tuesday</td>
                <td className='w-full h-full p-1 border border-l-0'>Wednesday</td>
                <td className='w-full h-full p-1 border border-l-0'>Thursday</td>
                <td className='w-full h-full p-1 border border-l-0'>Friday</td>
                <td className='w-full h-full p-1 border border-l-0'>Saturday</td>
                <td className='w-full h-full p-1 border border-l-0'>Sunday</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AppointmentCalendar
