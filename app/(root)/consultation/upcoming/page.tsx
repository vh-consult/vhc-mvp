"use client"
import CallList from '@/components/consultation/CallList';
import UpcomingConsultationCard from '@/components/consultation/UpcomingConsultationCard';
import { useUserStore } from '@/stores/user-store';
import Cookies from "js-cookie"
const UpcomingPage =  () => {
  const {user} = useUserStore()

  return (
    <section className="gap-10 text-dark">
      {
        user?.type === "Patient" ? <CallList type="upcoming" /> : 
        user?.type === "Doctor" ? (<div className='grid grid-cols-3 gap-6'>
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