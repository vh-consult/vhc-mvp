import BookingCard from '@/components/consultation/BookingCard';
import CallList from '@/components/consultation/CallList';
import { hostBookings } from '@/lib/actions/appointment.actions';
import { currentUser } from '@clerk/nextjs/server';
import { cookies } from 'next/headers';

const UpcomingPage = async () => {
  const user = await currentUser()
  // const role = cookies().get("userData")
  const role = "Doctor"
  const bookings = await hostBookings(user?.id!)
  return (
    <section className="grid grid-cols-2 size-full  gap-10 text-white">
      <CallList type="upcoming" />
      {
        role === "Doctor" ? (
          <div className="">
            {
              bookings.length > 0 ? bookings.map((booking:any, index:number) => (
                <BookingCard 
                  key={index}
                  host={booking}
                />
              )): ''
            }
          </div>

        ): ''
      }
    </section>
  );
};

export default UpcomingPage;