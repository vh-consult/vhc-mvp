"use client"
import CallList from '@/components/consultation/CallList';
import UpcomingConsultationCard from '@/components/consultation/UpcomingConsultationCard';
import Cookies from "js-cookie"
const UpcomingPage =  () => {
  const user = JSON.parse(Cookies.get("user") || '{}');

  return (
    <section className="gap-10 text-dark">
      {
        user.role === "Patient" ? <CallList type="upcoming" /> : 
        user.role === "Doctor" ? (<div className='grid grid-cols-3 gap-6'>
          <UpcomingConsultationCard appointment='Virtual consultation' clientName='Kofi Smith' scheduledAt={new Date()} problemStatement='Headache'/>
          <UpcomingConsultationCard appointment='Virtual consultation' clientName='Kofi Smith' scheduledAt={new Date()} problemStatement='Headache'/>
          <UpcomingConsultationCard appointment='Virtual consultation' clientName='Kofi Smith' scheduledAt={new Date()} problemStatement='Headache'/>
          <UpcomingConsultationCard appointment='Virtual consultation' clientName='Kofi Smith' scheduledAt={new Date()} problemStatement='Headache'/>

        </div>) : ''
      }
      
    </section>
  );
};

export default UpcomingPage;