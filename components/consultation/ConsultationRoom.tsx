'use client';
import { useState } from 'react';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useRouter, useSearchParams } from 'next/navigation';
import { Users, LayoutList } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Loader from '../general/Loader';
import { cn } from '@/lib/utils';
import EndCallButton from './EndCallButton';
import { FaStethoscope } from 'react-icons/fa';
import ConsultationForm from '../doctor/ConsultationForm';
import useDBUser from '@/hooks/useDBUser';
import { BiComment } from 'react-icons/bi';
import ConsultationSummaryCard from './ConsultationSummaryCard';

type CallLayoutType = 'grid' | 'left' ;

const ConsultationRoom = ({appointmentId}:{appointmentId: string}) => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('grid');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const [showConsultationForm, setShowConsultationForm] = useState<boolean>(false)
  const callingState = useCallCallingState();
  const {role} = useDBUser()
  const [showComment, setShowComment] = useState<boolean>(false)

  
  if (callingState !== CallingState.JOINED) return (<span className='bg-green-2 w-14 h-14 rounded-lg shadow-lg'>
    <Loader/>
  </span>);

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout groupSize={2} />;
      default:
        return <SpeakerLayout participantsBarPosition="left" />;
    }
  };

  return (
    <section className="relative h-full w-full overflow-hidden pt-2 text-green-4">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full h-[500px] max-w-[1000px] items-center">
          <CallLayout /> 
        </div>
        <div
          className={cn('h-full hidden ml-2', {
            'show-block': showParticipants || showComment || showConsultationForm,
          })} 
        >
          {
            showParticipants? (
              <CallParticipantsList onClose={() => setShowParticipants(false)} />
            ): showComment? (
              <div
                className={cn(' hidden ml-2', {
                  'show-block': showComment,
                })} 
              >          
              <ConsultationSummaryCard id=''/>
              </div>
            ): showConsultationForm? (
              <div
              className={cn(' hidden ml-2', {
                'show-block': showConsultationForm,
                })} 
              >          
                <ConsultationForm appointmentId={appointmentId}/>
              </div>  
            ): ``
          }
        </div>
      </div>

      {/* video layout and call controls */}
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 ">
        <CallControls onLeave={() => router.push(`/consultation/home`)} />

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer bg-dark-1 p-2 rounded-full
             hover:opacity-85  ">
              <LayoutList size={20} className="text-green-1" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className=" bg-white text-green-4">
            {['Grid', 'Top-down'].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  onClick={() =>
                    setLayout(item.toLowerCase() as CallLayoutType)
                  }
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className=" cursor-pointer rounded-full bg-dark-1 p-2 hover:opacity-85  ">
            <Users size={20} className="text-green-1" />
          </div>
        </button>
        {
          role==="Doctor"? (
            <button onClick={()=>{setShowConsultationForm((prev) => !prev)}} className=" cursor-pointer text-green-1 rounded-full bg-dark-1 p-2 hover:opacity-85  ">
                <FaStethoscope/>
            </button>
          ): (
            <button onClick={()=>{setShowComment((prev) => !prev)}} className=" cursor-pointer text-green-1 rounded-full bg-dark-1 p-2 hover:opacity-85 ">
              <BiComment/>
            </button>
          )
        }
        {!isPersonalRoom && <EndCallButton  />}
      </div>
    </section>
  );
};

export default ConsultationRoom;