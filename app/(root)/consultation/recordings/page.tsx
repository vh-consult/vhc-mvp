import CallList from '@/components/consultation/CallList';

const PreviousPage = () => {
  return (
    <section className="flex flex-center size-full flex-col gap-10 text-white">
      <CallList type="recordings" />
    </section>
  );
};

export default PreviousPage;