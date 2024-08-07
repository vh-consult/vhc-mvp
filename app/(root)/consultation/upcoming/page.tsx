import BookingCard from '@/components/consultation/BookingCard';
import CallList from '@/components/consultation/CallList';
import { hostBookings } from '@/lib/actions/appointment.actions';
import { currentUser } from '@clerk/nextjs/server';
import { cookies } from 'next/headers';

const UpcomingPage = async () => {
  const user = await currentUser()

  return (
    <section className=" gap-10 text-white">
      <CallList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;