"use server"

import { revalidatePath } from "next/cache";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { Company } from "../database/models/company.model";

export async function createCompany(company: CreateCompanyParams){

}