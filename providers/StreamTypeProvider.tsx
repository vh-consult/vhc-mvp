"use client";

import { tokenProvider } from "@/lib/actions/stream.actions";
import Loader from "@/components/general/Loader";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import { useUserStore } from "@/stores/user-store";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user } = useUserStore();

  useEffect(() => {
    if (user !== undefined || !user) return;
    if (!apiKey) throw new Error("Stream key not found");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        //@ts-ignore
        id: user?._id,
        //@ts-ignore

        name: user?.firstName || user?.id,
        //@ts-ignore

        image: user?.photo,
      },
      tokenProvider,
    });
    setVideoClient(client);
  }, [user]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};
