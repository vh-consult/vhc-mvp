"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

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
  hostId?: string;
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
  hostName,
  hostId
}: ConsultationCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-white px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <span className="w-[40px] h-[40px] flex flex-center rounded-md bg-gray-400">
          <Image src={icon} alt="upcoming" width={28} height={28}  />
        </span>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="flex w-full items-center">
          {
            hostImage ? (
                <Image
                  src={hostImage}
                  alt="attendees"
                  width={40}
                  height={40}
                  className={cn("rounded-full w-[30px] h-[30px] mr-2 object-cover")}
                />
            ) : (
              <span className="w-[40px] h-[40px] bg-sky-2 flex flex-center mr-2 text-xl text-violet-1 font-bold rounded-full">
                {hostName?.slice(0,1)}
              </span>
            )
          }
            <span className="text-lg font-medium text-green-4">
              {hostName}
            </span>
        </div>
        {!isPreviousConsultation && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-blue-1 text-green-1 px-6">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={async () => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link copied",
                });
              }}
              className="bg-green-3 px-6"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
                className="bg-gray-300"
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default ConsultationCard;