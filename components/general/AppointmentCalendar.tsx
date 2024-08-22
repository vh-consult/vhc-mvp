"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BookingParams, fetchAcceptedBookings } from '@/lib/actions/appointment.actions';
import useDBUser from '@/hooks/useDBUser';
import { useUser } from '@clerk/nextjs';

const AppointmentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointments, setAppointments] = useState<BookingParams[]>([]);
  const {user} = useUser()
  useEffect(()=> {
    const getBookings = async () => {
      const bookings = await fetchAcceptedBookings(user?.id as string)
      console.log(bookings)
      setAppointments(bookings)
    }
    getBookings()
  }, [user])
  
  const daysInMonth = (month: number, year: number) => 
    {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: number, year: number) => 
    {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const days = [];
    const date = new Date(currentDate);
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInCurrentMonth = daysInMonth(month, year);
    const firstDay = (firstDayOfMonth(month, year) + 6) % 7; // Adjusting to start from Monday

    // Add empty slots for days of the previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${i}`} className="w-full 
        h-full p-1 border border-l-0 border-gray-100"></td>);
    }

    // Add days of the current month
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const isToday = new Date().toDateString() === 
      new Date(year, month, day).toDateString();
      const appointment = appointments.find(
        (appointment) => new Date(appointment?.date!).
        toDateString() === new Date(year, month, day).
        toDateString()
      );

      days.push(
        <td
          key={day}
          className={`w-full relative h-full p-1 border 
             border-gray-100 ${
            isToday ? `bg-green-2 text-green-1` : 
            ``
          }`}
        >
          <div className="absolute top-0 right-3 text-lg 
          font-bold">{day}</div>
          {appointment && (
            <div className="absolute bottom-2 flex
            flex-col">
              <span className={`text-sm font-medium 
                ${isToday ? 'text-green-4' : `text-green-2`}`}>
                {appointment.channel}
              </span>
              <span className="text-lg ">{
              appointment.host}</span>
              <span className="text-[12px] font-semibold">
                {new Date(appointment?.date!).toLocaleTimeString()}</span>
            </div>
          )}
        </td>
      );
    }

    // Add empty slots for days of the next month to fill the last week
    while (days.length % 7 !== 0) {
      days.push(<td key={`empty-next-${days.length}`} 
        className="w-full h-full p-1 border border-l-0 border-gray-100">

        </td>);
    }

    // Group the days into weeks
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(<tr key={`week-${i}`} className="w-full 
        h-[100px] items-center flex justify-between">{days.slice(i, i + 7)}</tr>);
    }

    return weeks;
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(
      currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(
      currentDate.getMonth() + 1)));
  };

  return (
    <div className="w-full min=h-screen rounded-t-xl p-4 text-green-4">
      <div className="w-full mt-[1%] mb-[2%] flex items-center justify-between">
        <span className="text-lg font-medium">Calendar</span>
        <span className="">
          {currentDate.toLocaleString('default', { month: 'long' })}, {currentDate.getFullYear()}
        </span>
        <div className='flex '>
          <span className="flex-center mr-2 flex border rounded-md border-gray-600 cursor-pointer  h-[30px] w-[30px]">
            <AiOutlineLeft
              onClick={handlePreviousMonth}
            />
          </span>
          <span className="flex-center flex border rounded-md border-gray-600 cursor-pointer  h-[30px] w-[30px]">
            <AiOutlineRight
              onClick={handleNextMonth}
            />
          </span>
        </div>
      </div>
      <table className="w-full ">
        <thead className="w-full text-sm font-semibold opacity-80 h-[30px]">
          <tr className="w-full h-full items-center flex justify-between">
            <td className="w-full h-full text-center">Monday</td>
            <td className="w-full h-full text-center">Tuesday</td>
            <td className="w-full h-full text-center">Wednesday</td>
            <td className="w-full h-full text-center">Thursday</td>
            <td className="w-full h-full text-center">Friday</td>
            <td className="w-full h-full text-center">Saturday</td>
            <td className="w-full h-full text-center">Sunday</td>
          </tr>
        </thead>
        <tbody>
          {generateCalendarDays()}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentCalendar;
