import CallList from '@/components/consultation/CallList';

const UpcomingPage = () => {
  return (
    <section className="flex flex-center size-full flex-col gap-10 text-white">
      <CallList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;