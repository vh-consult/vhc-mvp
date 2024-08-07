'use client';

import { Call, CallRecording } from '@stream-io/video-react-sdk';

import Loader from '../general/Loader';
import { useGetCalls } from '@/hooks/useGetCalls';
import ConsultationCard from './ConsultationCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const CallList = (
  { type, host }: { 
    type?: 'ended' | 'upcoming' | 'recordings',
    host?: any[]
  }) => {
  const router = useRouter();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return 'No Previous Consultations';
      case 'upcoming':
        return 'No scheduled Consultations';
      case 'recordings':
        return 'No Recordings';
      default:
        return '';
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        callRecordings?.map((Consultation) => Consultation.queryRecordings()) ?? [],
      );

      const recordings = callData
        .filter((call) => call.recordings.length > 0)
        .flatMap((call) => call.recordings);

      setRecordings(recordings);
    };

    if (type === 'recordings') {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  if (isLoading) return <Loader />;

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((consultation: Call | CallRecording) => (
          <ConsultationCard
            key={(consultation as Call).id}
            icon={
              type === 'ended'
                ? '/icons/previous.svg'
                : type === 'upcoming'
                  ? '/icons/upcoming.svg'
                  : '/icons/recordings.svg'
            }
            title={
              (consultation as Call).state?.custom?.description ||
              (consultation as CallRecording).filename?.substring(0, 20) ||
              'No Description'
            }
            date={
              (consultation as Call).state?.startsAt?.toLocaleString() ||
              (consultation as CallRecording).start_time?.toLocaleString()
            }
            isPreviousConsultation={type === 'ended'}
            link={
              type === 'recordings'
                ? (consultation as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/user/Consultation/room/${(consultation as Call).id}`
            }
            buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
            buttonText={type === 'recordings' ? 'Play' : 'Start'}
            handleClick={
              type === 'recordings'
                ? () => router.push(`${(consultation as CallRecording).url}`)
                : () => router.push(`/Consultation/${(consultation as Call).id}`)
            }
          />
        ))
      ) : (
        <h1 className="text-2xl font-bold text-white">{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;