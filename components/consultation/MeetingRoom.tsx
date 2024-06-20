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
import Loader from '../Loader';
import { cn } from '@/lib/utils';
import EndCallButton from './EndCallButton';
import { FaStethoscope } from 'react-icons/fa';
import ConsultationForm from '../doctor/ConsultationForm';
import useUserRole from '@/hooks/useUserRole';
import { BiComment } from 'react-icons/bi';
import ConsultationComment from './ConsultationComment';

type CallLayoutType = 'grid' | 'Top-down' ;

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('grid');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const [showConsultationForm, setShowConsultationForm] = useState<boolean>(false)
  const callingState = useCallCallingState();
  const {userRole} = useUserRole()
  const [showComment, setShowComment] = useState<boolean>(false)

  
  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      default:
        return <SpeakerLayout participantsBarPosition="bottom" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-2 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <CallLayout /> 
        </div>
        <div
          className={cn('h-[calc(100vh-86px)] hidden ml-2', {
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
              <ConsultationComment/>
              </div>
            ): showConsultationForm? (
              <div
              className={cn(' hidden ml-2', {
                'show-block': showConsultationForm,
                })} 
              >          
                <ConsultationForm/>
              </div>  
            ): ``
          }
        </div>
      </div>

      {/* video layout and call controls */}
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
        <CallControls onLeave={() => router.push(`/consultation/home`)} />

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 
            py-2 hover:bg-[#4c535b]  ">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
            {['Grid', 'Top-down'].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  onClick={() =>
                    setLayout(item.toLowerCase() as CallLayoutType)
                  }
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-dark-1" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
            <Users size={20} className="text-white" />
          </div>
        </button>
        {
          userRole==="doctor"? (
            <button onClick={()=>{setShowConsultationForm((prev) => !prev)}} className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
                <FaStethoscope/>
            </button>
          ): (
            <button onClick={()=>{setShowComment((prev) => !prev)}} className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
              <BiComment/>
            </button>
          )
        }
        {!isPersonalRoom && <EndCallButton  />}
      </div>
    </section>
  );
};

export default MeetingRoom;