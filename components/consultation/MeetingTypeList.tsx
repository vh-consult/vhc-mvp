'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import ClickableCard from '../ClickableCard';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import Loader from '../Loader';
import { Textarea } from '../ui/textarea';
import { useToast } from '../ui/use-toast';
import { Input } from '../ui/input';
import ReactDatePicker from 'react-datepicker';
import { Label } from '../ui/label';
import { Consultation } from '@/lib/database/models/appointment.model';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ClickableCardProps } from '../user/RenderUserLanding';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
  appointmentType: '',
  doctor: ''
};

const ClickableCards: Array<ClickableCardProps> = [
  {
    title: 'New Meeting',
    description: 'Start an instant meeting',
    imageSrc: '/icons/add-meeting.svg',
    action: 'isInstantMeeting'
  },
  {
    title: 'Join Meeting',
    description: 'via invitation link',
    imageSrc: '/icons/join-meeting.svg',
    action: 'isJoiningMeeting'
  },
  {
    title: 'Schedule Meeting',
    description: 'Plan your meeting',
    imageSrc: '/icons/schedule.svg',
    action: 'isScheduleMeeting'
  }
]

type MeetingStateProps = 'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<MeetingStateProps>(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();
  console.log(client)
  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: 'Please select a date and time' });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create meeting');
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      // await 
      setCallDetail(call);
      if (!values.description) {
        router.push(`/user/meeting/${call.id}`);
      }
      toast({
        title: 'Meeting Created',
      });
    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to create Meeting' });
    }
  };

  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/user/meeting/${callDetail?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {
        ClickableCards.map((card, index) => (
            <ClickableCard
              key={index}
              imgURL={card.imageSrc}
              title={card.title}
              description={card.description}
              handleClick={() => setMeetingState(card.action as MeetingStateProps)} 
              className='bg-dark-3 hover:bg-dark-4'   
            />
        ))
      }
      <ClickableCard
        imgURL="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-dark-3 hover:bg-dark-4"
        handleClick={() => router.push('/recordings')}
      />

      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
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
            <Label className="text-base font-normal leading-[22.4px] text-green-1">
              What are some of your symptoms
            </Label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
              placeholder='e.g: Headache and severe back pain...'
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <Label className="text-base font-normal leading-[22.4px] text-green-1">
              Select Date and Time
            </Label>
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

          {
            values.appointmentType === "specialBooking"? (
              <div>
                <Label>Add Physician</Label>
                <Input 
                  placeholder='Type name...' 
                  onChange={(e)=>setValues({...values, doctor: e.target.value})}
                />
              </div>
            ) : ``
          }
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: 'Link Copied' });
          }}
          image={'/icons/checked.svg'}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;