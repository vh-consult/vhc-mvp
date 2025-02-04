"use server";

import { StreamClient } from "@stream-io/node-sdk";
import { currentUser } from "./user.actions";

const apikey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User not logged in");
  if (!apiSecret) throw new Error("No API secret found");
  if (!apikey) throw new Error("No API key found");

  const client = new StreamClient(apikey, apiSecret);
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.round(Date.now() / 1000) - 60;

  const token = client.createToken(user._id, exp, issued);

  return token;
};
