"use server"

import { revalidatePath } from "next/cache";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { Company } from "../database/models/company.model";
import { User } from "../database/models/user.model";

export async function updateCompany(userId: string){
    try {
        await connectToDatabase();

        const user = await User.findOne({ clerkId: userId });

        if (!user) throw new Error("User not found");
        
        const companyToUpdate = await Company.findOne({})

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
}