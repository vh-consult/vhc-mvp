"use server";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Message from "../database/models/message.model";

export async function sendMessage(userId: string, content: string) {
  try {
    await connectToDatabase();

    const message = await Message.create(content);
  } catch (error) {
    handleError(error);
  }
}

export async function sendResponse(messageId: string, response: string) {
  try {
    await connectToDatabase();

    const message = await Message.findById(messageId);
  } catch (error) {
    handleError(error);
  }
}
