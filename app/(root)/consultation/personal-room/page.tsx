"use client";

import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-secondary lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] w-[80%] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

const PersonalRoom = () => {
  const router = useRouter();
  const user = JSON.parse(Cookies.get("user") || '{}');
  const client = useStreamVideoClient();
  const { toast } = useToast();

  const consultationId = user?.id;

  const { call } = useGetCallById(consultationId!);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", consultationId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/consultation/room/${consultationId}?personal=true`);
  };

  const consultationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/consultation/room/${consultationId}?personal=true`;

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-xl font-bold lg:text-3xl">Personal Consultation Room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.firstName}'s consultation Room`} />
        <Table title="Consultation ID" description={consultationId!} />
        <Table title="Invite Link" description={consultationLink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-blue-1" onClick={startRoom}>
          Start Consultation
        </Button>
        <Button
          className="bg-secondary"
          onClick={() => {
            navigator.clipboard.writeText(consultationLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;