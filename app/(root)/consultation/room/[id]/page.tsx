'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';

import { useGetCallById } from '@/hooks/useGetCallById';
import Alert from '@/components/consultation/Alert';
import ConsultationSetup from '@/components/consultation/ConsultationSetup';
import ConsultationRoom from '@/components/consultation/ConsultationRoom';
import Loader from '@/components/general/Loader';

const ConsultationPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <Loader />;

  if (!call) return (
    <p className="text-center text-3xl font-bold text-green-1">
      Call Not Found
    </p>
  );

  // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
  const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) return <Alert title="You are not allowed to join this Consultation" />;

  return (
    <main className="h-full w-full">
      <StreamCall call={call}>
        <StreamTheme className='text-green-4 bg-green-3'>
        {!isSetupComplete ? (
          <ConsultationSetup setIsSetupComplete={setIsSetupComplete} />
        ) : (
          <ConsultationRoom consultationId={id[0]} />
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default ConsultationPage;