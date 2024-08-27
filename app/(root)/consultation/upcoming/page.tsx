import CallList from '@/components/consultation/CallList';
import { currentUser } from '@clerk/nextjs/server';
import { cookies } from 'next/headers';

const UpcomingPage = async () => {
  const user = await currentUser()

  return (
    <section className=" gap-10 text-green-4">
      <CallList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;