"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";


export async function createAdmin(formData:any) {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}

export async function removeAdmin(formData:any) {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}