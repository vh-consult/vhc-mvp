"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import {  newBooking, notifyHost, searchHost } from '@/lib/actions/appointment.actions';
import { useDebouncedCallback } from 'use-debounce';
import useDBUser from '@/hooks/useDBUser';
import DoctorDashboard from '../user/DoctorDashboard';

const initialValues = {
  date: new Date(),
  problem_statement: '',
  link: '',
  appointmentType: '',
  host: '' 
};

const ClickableCards = [
  { title: 'Emergency Consultation', description: 'Start an emergency session', imageSrc: '/icons/add-meeting.svg', action: 'isEmergencyConsultation' },
  { title: 'Join Consultation', description: 'via invitation link', imageSrc: '/icons/join-meeting.svg', action: 'isJoiningConsultation' },
  { title: 'Schedule Consultation', description: 'Plan your Consultation', imageSrc: '/icons/schedule.svg', action: 'isSchedulingConsultation' }
];

type ConsultationStateProps = 'isSchedulingConsultation' | 'isJoiningConsultation' | 'isEmergencyConsultation' | undefined;

const ConsultationTypeList = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [ConsultationState, setConsultationState] = useState<ConsultationStateProps>(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call | null>(null);
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();
  const [hostList, setHostList] = useState<any[]>([])
  const [hostName, setHostName] = useState('')
  const {dbUser, role} = useDBUser()
  const [hostImage, setHostImage] = useState('')

  useEffect(() => {
    console.log('Client:', client);
    console.log('User:', user);
  }, [client, user]);
  const handleSearch = useDebouncedCallback(async (query: string) => {
    const params = new URLSearchParams(searchParams)
    if (query) {
      params.set("query", query)
    } else {
      params.delete("query")
    }
    const host = await searchHost(query)
    setHostList(host)
  })
  const handleHostSelection = (host: any) => {
    values.host = host.id
    setHostName(host.name) 
    setHostImage(host.photo)
    setHostList([])
  }
  const createConsultation = async () => {
    if (!client || !user) return;
    try {
      if (!values.date) {
        toast({ title: 'Please select a date and time' });
        return;
      }
      
      const newCall = await newBooking(user?.id, values)
        const id = newCall;
        const call = client.call('default', id);
        console.log(1)
        if (!call) throw new Error('Failed to create consultation session');
        const startsAt = values.date.toISOString() || new Date(Date.now()).toISOString();
        console.log(2)
        const description = values.problem_statement || 'Emergency Consultation';
        await call.getOrCreate({
          data: {
            starts_at: startsAt,
            custom: { 
              description, 
              host: hostName, 
              hostImage: hostImage,
              hostId: dbUser?._id 
            },
          },
        });
        setCallDetail(call);
        if (!values.problem_statement) {
          await notifyHost(user?.id, newCall)
          router.push(`/consultation-room/${call.id}`);
        }
        toast({ title: 'Consultation Created' });
      setValues(initialValues)
      setTimeout(() => {
        setCallDetail(null)
      }, 5000);
    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to create Consultation' });
    }
  };

  if (!client || !user) {
    console.log('Client or user not available yet:', { client, user });
    return <Loader />;
  }
  const ConsultationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/consultation-room/${callDetail?.id}`;
  
  return (
    <>
        {
          role === "Patient" ? (
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 text-green-4">
            {ClickableCards.map((card, index) => (
              <ClickableCard
                key={index}
                imgURL={card.imageSrc}
                title={card.title}
                description={card.description}
                handleClick={() => setConsultationState(card.action as ConsultationStateProps)}
                className='bg-white hover:bg-gray-100'
              />
              ))}
              <ClickableCard
                imgURL="/icons/recordings.svg"
                title="View Recordings"
                description="Consultation Recordings"
                className="bg-white hover:bg-gray-100"
                handleClick={() => router.push('/consultation/recordings')}
              />

              {!callDetail ? (
                <FormModal
                  isOpen={ConsultationState === 'isSchedulingConsultation'}
                  onClose={() => setConsultationState(undefined)}
                  title="Create Consultation"
                  handleClick={createConsultation}
                >
                  <div className="flex flex-col gap-2.5">
                    <Label className="text-base font-normal leading-[22.4px] text-green-4" htmlFor="appointmentType">Appointment type</Label>
                    <Select required onValueChange={(value) => setValues({ ...values, appointmentType: value })}>
                      <SelectTrigger id="appointmentType" className='bg-green-3'>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper" className='bg-green-3 text-green-4'>
                        <SelectItem value="inPersonGeneral">General Care - In-person</SelectItem>
                        <SelectItem value="virtual">Virtual Consultation</SelectItem>
                        <SelectItem value="lab">Lab Session</SelectItem>
                        <SelectItem value="specialBooking">Special Booking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <Label className="text-base font-normal leading-[22.4px] text-green-4">What are some of your symptoms</Label>
                    <Textarea
                      className=" bg-green-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      onChange={(e) => setValues({ ...values, problem_statement: e.target.value })}
                      placeholder='e.g: Headache and severe back pain...'
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2.5">
                    <Label className="text-base font-normal leading-[22.4px] text-green-4">Select Date and Time</Label>
                    <ReactDatePicker
                      selected={values.date}
                      onChange={(date) => setValues({ ...values, date: date! })}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="w-full rounded bg-green-3 p-2 focus:outline-none"
                    />
                  </div>
                    <div>
                    <Label>Search & Select Physician</Label>
                    <Input 
                      className=" bg-green-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder='Type name...' 
                      defaultValue={''}
                      onChange={(e)=>handleSearch(e.target.value)}
                    />
                    {
                      hostList.length > 0 && (
                        <div className='w-full bg-white'>
                          {
                            hostList.map((host:any, index) => (
                              <div 
                                key={index} 
                                onClick={()=>{handleHostSelection(host)}} 
                                className='p-2 cursor-pointer text-sm hover:bg-green-3'
                              >
                                {host.name}
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
                  </div>
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
                  className=" bg-green-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormModal>

              <FormModal
                isOpen={ConsultationState === 'isEmergencyConsultation'}
                onClose={() => setConsultationState(undefined)}
                title="Start an Emergency Consultation"
                className="text-center"
                buttonText="Start Consultation"
                handleClick={createConsultation}
              />
                  </section>

          ): role === "Doctor"? (
            <DoctorDashboard/>
          ): ''
        }
    </>
  );
};

export default ConsultationTypeList;
