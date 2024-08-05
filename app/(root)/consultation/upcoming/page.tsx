import BookingCard from '@/components/consultation/BookingCard';
import CallList from '@/components/consultation/CallList';
import { hostBookings } from '@/lib/actions/appointment.actions';
import { currentUser } from '@clerk/nextjs/server';

const UpcomingPage = async () => {
  const user = await currentUser()
  const bookings = await hostBookings(user?.id!)
  return (
    <section className="flex flex-center size-full flex-col gap-10 text-white">
      <CallList type="upcoming" />
      {
        bookings.length > 0 ? bookings.map((booking:any, index:number) => (
          <BookingCard 
            key={index}
            host={booking}
          />
        )): ''
      }
    </section>
  );
};

export default UpcomingPage;