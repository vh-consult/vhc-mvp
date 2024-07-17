// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import ClickableCard from '../general/ClickableCard';
// import FormModal from './FormModal';
// import Loader from '../general/Loader';
// import { Textarea } from '../ui/textarea';
// import { useToast } from '../ui/use-toast';
// import { Input } from '../ui/input';
// import ReactDatePicker from 'react-datepicker';
// import { Label } from '../ui/label';
// import { Consultation } from '@/lib/database/models/appointment.model';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import { ClickableCardProps } from '../user/RenderUserLanding';
// import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
// import { useUser } from '@clerk/nextjs';

// const initialValues = {
//   dateTime: new Date(),
//   description: '',
//   link: '',
//   appointmentType: '',
//   doctor: ''
// };

// const ClickableCards: Array<ClickableCardProps> = [
//   {
//     title: 'New Consultation',
//     description: 'Start an instant Consultation',
//     imageSrc: '/icons/add-Consultation.svg',
//     action: 'isInstantConsultation'
//   },
//   {
//     title: 'Join Consultation',
//     description: 'via invitation link',
//     imageSrc: '/icons/join-Consultation.svg',
//     action: 'isJoiningConsultation'
//   },
//   {
//     title: 'Schedule Consultation',
//     description: 'Plan your Consultation',
//     imageSrc: '/icons/schedule.svg',
//     action: 'isSchedulingConsultation'
//   }
// ]

// type ConsultationStateProps = 'isSchedulingConsultation' | 'isJoiningConsultation' | 'isInstantConsultation' | undefined

// const ConsultationTypeList = () => {
//   const router = useRouter();
//   const [ConsultationState, setConsultationState] = useState<ConsultationStateProps>(undefined);
//   const [values, setValues] = useState(initialValues);
//   const [callDetail, setCallDetail] = useState<Call>();
//   const client = useStreamVideoClient();
//   const { user } = useUser();
//   const { toast } = useToast();
  
//   const createConsultation = async () => {
//     if (!client || !user) return;
//     try {
//       if (!values.dateTime) {
//         toast({ title: 'Please select a date and time' });
//         return;
//       }
//       const id = crypto.randomUUID();
//       const call = client.call('default', id);
//       if (!call) throw new Error('Failed to create Consultation');
//       const startsAt =
//         values.dateTime.toISOString() || new Date(Date.now()).toISOString();
//       const description = values.description || 'Instant Consultation';
//       await call.getOrCreate({
//         data: {
//           starts_at: startsAt,
//           custom: {
//             description,
//           },
//         },
//       });
//       // await 
//       setCallDetail(call);
//       if (!values.description) {
//         router.push(`/user/Consultation/${call.id}`);
//       }
//       toast({
//         title: 'Consultation Created',
//       });
//     } catch (error) {
//       console.error(error);
//       toast({ title: 'Failed to create Consultation' });
//     }
//   };

//   console.log(client)
//   console.log(user?.id)
//   if (!client || !user) return <Loader />;

//   const ConsultationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/user/Consultation/${callDetail?.id}`;

//   return (
//     <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
//       {
//         ClickableCards.map((card, index) => (
//             <ClickableCard
//               key={index}
//               imgURL={card.imageSrc}
//               title={card.title}
//               description={card.description}
//               handleClick={() => setConsultationState(card.action as ConsultationStateProps)} 
//               className='bg-dark-3 hover:bg-dark-4'   
//             />
//         ))
//       }
//       <ClickableCard
//         imgURL="/icons/recordings.svg"
//         title="View Recordings"
//         description="Consultation Recordings"
//         className="bg-dark-3 hover:bg-dark-4"
//         handleClick={() => router.push('/recordings')}
//       />

//       {!callDetail ? (
//         <FormModal
//           isOpen={ConsultationState === 'isSchedulingConsultation'}
//           onClose={() => setConsultationState(undefined)}
//           title="Create Consultation"
//           handleClick={createConsultation}
//         >
//           <div className="flex flex-col gap-2.5">
//             <Label className="text-base font-normal leading-[22.4px] text-green-1" htmlFor="appointmentType">Appointment type</Label>
//             <Select required onValueChange={(value) => setValues({ ...values, appointmentType: value })}>
//               <SelectTrigger id="appointmentType">
//                 <SelectValue placeholder="Select" />
//               </SelectTrigger>
//               <SelectContent position="popper" className='bg-dark-3 text-green-1'>
//                 <SelectItem value="inPersonGeneral">General Care - In-person</SelectItem>
//                 <SelectItem value="virtual">Virtual Consultation</SelectItem>
//                 <SelectItem value="lab">Lab Session</SelectItem>
//                 <SelectItem value="specialBooking">Special Booking</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <Label className="text-base font-normal leading-[22.4px] text-green-1">
//               What are some of your symptoms
//             </Label>
//             <Textarea
//               className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
//               onChange={(e) =>
//                 setValues({ ...values, description: e.target.value })
//               }
//               placeholder='e.g: Headache and severe back pain...'
//             />
//           </div>
//           <div className="flex w-full flex-col gap-2.5">
//             <Label className="text-base font-normal leading-[22.4px] text-green-1">
//               Select Date and Time
//             </Label>
//             <ReactDatePicker
//               selected={values.dateTime}
//               onChange={(date) => setValues({ ...values, dateTime: date! })}
//               showTimeSelect
//               timeFormat="HH:mm"
//               timeIntervals={15}
//               timeCaption="time"
//               dateFormat="MMMM d, yyyy h:mm aa"
//               className="w-full rounded bg-dark-3 p-2 focus:outline-none"
//             />
//           </div>

//           {
//             values.appointmentType === "specialBooking"? (
//               <div>
//                 <Label>Add Physician</Label>
//                 <Input 
//                   placeholder='Type name...' 
//                   onChange={(e)=>setValues({...values, doctor: e.target.value})}
//                 />
//               </div>
//             ) : ``
//           }
//         </FormModal>
//       ) : (
//         <FormModal
//           isOpen={ConsultationState === 'isSchedulingConsultation'}
//           onClose={() => setConsultationState(undefined)}
//           title="Consultation Created"
//           handleClick={() => {
//             navigator.clipboard.writeText(ConsultationLink);
//             toast({ title: 'Link Copied' });
//           }}
//           image={'/icons/checked.svg'}
//           buttonIcon="/icons/copy.svg"
//           className="text-center"
//           buttonText="Copy Consultation Link"
//         />
//       )}

//       <FormModal
//         isOpen={ConsultationState === 'isJoiningConsultation'}
//         onClose={() => setConsultationState(undefined)}
//         title="Type the link here"
//         className="text-center"
//         buttonText="Join Consultation"
//         handleClick={() => router.push(values.link)}
//       >
//         <Input
//           placeholder="Consultation link"
//           onChange={(e) => setValues({ ...values, link: e.target.value })}
//           className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
//         />
//       </FormModal>

//       <FormModal
//         isOpen={ConsultationState === 'isInstantConsultation'}
//         onClose={() => setConsultationState(undefined)}
//         title="Start an Instant Consultation"
//         className="text-center"
//         buttonText="Start Consultation"
//         handleClick={createConsultation}
//       />
//     </section>
//   );
// };

// export default ConsultationTypeList;

"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ClickableCard from '../general/ClickableCard';
import FormModal from './FormModal';
import Loader from '../general/Loader';
import { Textarea } from '../ui/textarea';
import { useToast } from '../ui/use-toast';
import { Input } from '../ui/input';
import ReactDatePicker from 'react-datepicker';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
  appointmentType: '',
  doctor: ''
};

const ClickableCards = [
  { title: 'New Consultation', description: 'Start an instant Consultation', imageSrc: '/icons/add-meeting.svg', action: 'isInstantConsultation' },
  { title: 'Join Consultation', description: 'via invitation link', imageSrc: '/icons/join-meeting.svg', action: 'isJoiningConsultation' },
  { title: 'Schedule Consultation', description: 'Plan your Consultation', imageSrc: '/icons/schedule.svg', action: 'isSchedulingConsultation' }
];

type ConsultationStateProps = 'isSchedulingConsultation' | 'isJoiningConsultation' | 'isInstantConsultation' | undefined;

const ConsultationTypeList = () => {
  const router = useRouter();
  const [ConsultationState, setConsultationState] = useState<ConsultationStateProps>(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call | null>(null);
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();

  useEffect(() => {
    console.log('Client:', client);
    console.log('User:', user);
  }, [client, user]);

  const createConsultation = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: 'Please select a date and time' });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create Consultation');
      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Consultation';
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: { description },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/user/consultation/room/${call.id}`);
      }
      toast({ title: 'Consultation Created' });
    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to create Consultation' });
    }
  };

  if (!client || !user) {
    console.log('Client or user not available yet:', { client, user });
    return <Loader />;
  }

  const ConsultationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/user/consultation/room/${callDetail?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {ClickableCards.map((card, index) => (
        <ClickableCard
          key={index}
          imgURL={card.imageSrc}
          title={card.title}
          description={card.description}
          handleClick={() => setConsultationState(card.action as ConsultationStateProps)}
          className='bg-dark-3 hover:bg-dark-3'
        />
      ))}
      <ClickableCard
        imgURL="/icons/recordings.svg"
        title="View Recordings"
        description="Consultation Recordings"
        className="bg-dark-3 hover:bg-dark-3"
        handleClick={() => router.push('/recordings')}
      />

      {!callDetail ? (
        <FormModal
          isOpen={ConsultationState === 'isSchedulingConsultation'}
          onClose={() => setConsultationState(undefined)}
          title="Create Consultation"
          handleClick={createConsultation}
        >
          <div className="flex flex-col gap-2.5">
            <Label className="text-base font-normal leading-[22.4px] text-green-1" htmlFor="appointmentType">Appointment type</Label>
            <Select required onValueChange={(value) => setValues({ ...values, appointmentType: value })}>
              <SelectTrigger id="appointmentType">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper" className='bg-dark-3 text-green-1'>
                <SelectItem value="inPersonGeneral">General Care - In-person</SelectItem>
                <SelectItem value="virtual">Virtual Consultation</SelectItem>
                <SelectItem value="lab">Lab Session</SelectItem>
                <SelectItem value="specialBooking">Special Booking</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2.5">
            <Label className="text-base font-normal leading-[22.4px] text-green-1">What are some of your symptoms</Label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => setValues({ ...values, description: e.target.value })}
              placeholder='e.g: Headache and severe back pain...'
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <Label className="text-base font-normal leading-[22.4px] text-green-1">Select Date and Time</Label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          </div>
          {values.appointmentType === "specialBooking" && (
            <div>
              <Label>Add Physician</Label>
              <Input 
                placeholder='Type name...' 
                onChange={(e)=>setValues({...values, doctor: e.target.value})}
              />
            </div>
          )}
        </FormModal>
      ) : (
        <FormModal
          isOpen={ConsultationState === 'isSchedulingConsultation'}
          onClose={() => setConsultationState(undefined)}
          title="Consultation Created"
          handleClick={() => {
            navigator.clipboard.writeText(ConsultationLink);
            toast({ title: 'Link Copied' });
          }}
          image={'/icons/checked.svg'}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Consultation Link"
        />
      )}

      <FormModal
        isOpen={ConsultationState === 'isJoiningConsultation'}
        onClose={() => setConsultationState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Consultation"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Consultation link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </FormModal>

      <FormModal
        isOpen={ConsultationState === 'isInstantConsultation'}
        onClose={() => setConsultationState(undefined)}
        title="Start an Instant Consultation"
        className="text-center"
        buttonText="Start Consultation"
        handleClick={createConsultation}
      />
    </section>
  );
};

export default ConsultationTypeList;
