'use client';

import { useState } from 'react';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';

import { useGetCallById } from '@/hooks/useGetCallById';
import Alert from '@/components/consultation/Alert';
import ConsultationSetup from '@/components/consultation/ConsultationSetup';
import ConsultationRoom from '@/components/consultation/ConsultationRoom';
import Loader from '@/components/general/Loader';
import { useUserStore } from '@/stores/user-store';
const ConsultationPage = () => {
  const { id } = useParams();
  const {user} = useUserStore();
  const { call, isCallLoading } = useGetCallById(id!);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if ( user !== undefined || isCallLoading) return <Loader />;

  if (!call) return (
    <p className="text-center text-3xl font-bold text-secondary">
      Call Not Found
    </p>
  );

  //@ts-ignore
  const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user?._id));

  if (notAllowed) return <Alert title="You are not allowed to join this Consultation" />;

  return (
    <main className="h-full w-full">
      <StreamCall call={call}>
        <StreamTheme className='text-dark bg-secondary'>
        {!isSetupComplete ? (
          <ConsultationSetup setIsSetupComplete={setIsSetupComplete} />
        ) : (
          <ConsultationRoom consultationId={id as string} />
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default ConsultationPage;