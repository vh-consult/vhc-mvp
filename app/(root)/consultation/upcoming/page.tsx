"use client"
import CallList from '@/components/consultation/CallList';
import UpcomingConsultationCard from '@/components/consultation/UpcomingConsultationCard';
import useDBUser from '@/hooks/useUser';

const UpcomingPage =  () => {
  const {role} = useDBUser()

  return (
    <section className="gap-10 text-green-4">
      {
        role === "Patient" ? <CallList type="upcoming" /> : 
        role === "Doctor" ? (<div className='grid grid-cols-3 gap-6'>
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