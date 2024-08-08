"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { appendConsultationLink } from "@/lib/actions/appointment.actions";

interface ConsultationCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousConsultation?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
  hostImage?: string;
  hostName?: string;
}

const ConsultationCard = ({
  icon,
  title,
  date,
  isPreviousConsultation,
  buttonIcon1,
  hostImage,
  handleClick,
  link,
  buttonText,
  hostName
}: ConsultationCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="flex w-full items-center">
            <Image
              src={hostImage ? hostImage: ''}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full")}
            />
            <span className="text-lg font-medium text-green-1">
              {hostName}
            </span>
        </div>
        {!isPreviousConsultation && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-blue-1 px-6">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={async () => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Saved",
                });
              }}
              className="bg-dark-4 px-6"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Save Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default ConsultationCard;