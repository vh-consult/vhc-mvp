import { useEffect, useState } from 'react';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { fetchUpcoming } from '@/lib/actions/doctor.actions';
import Cookies from "js-cookie"
import { useUserStore } from '@/stores/user-store';

export const useGetCalls = () => {
  const {user} = useUserStore()
  const client = useStreamVideoClient();
  const [calls, setCalls] = useState<Call[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCalls = async () => {
      if (!client || !user?._id) return;
      
      setIsLoading(true);

      try {
        const { calls } = await client.queryCalls({
          sort: [{ field: 'starts_at', direction: -1 }],
          filter_conditions: {
            starts_at: { $exists: true },
            $or: [
              { created_by_user_id: user._id },
              { members: { $in: [user._id] } },
            ],
          },
        });

        setCalls(calls);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCalls();
  }, [client, user?._id]);

  const now = new Date();

  const endedCalls = calls?.filter(({ state: { startsAt, endedAt } }: Call) => {
    return (startsAt && new Date(startsAt) < now) || !!endedAt
  })

  const upcomingCalls = calls?.filter(({ state: { startsAt } }: Call) => {
    return startsAt && new Date(startsAt) > now
  })

  const upcoming = async () => {
    const calls = await fetchUpcoming(user?._id as string)
  }

  return { endedCalls, upcomingCalls, callRecordings: calls, isLoading }
};