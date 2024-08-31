import CallList from "@/components/consultation/CallList";

const HistoryPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Past Consultation Sessions</h1>

      <CallList type="ended" />
    </section>
  );
};

export default HistoryPage;