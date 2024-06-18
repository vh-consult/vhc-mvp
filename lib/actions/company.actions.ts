"use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { Company, Hospital, Pharmacy } from "../database/models/company.model";
import { User } from "../database/models/user.model";
import { writeFile } from 'fs/promises'

export interface CompanyProps {
    name: string;
    location: string;
    logo?: File;
    description: string;
    type: string;
}
export async function createCompany(userId: string, companyData: CompanyProps){
    try {
        await connectToDatabase();
        const file: File | null = companyData.logo as unknown as File
        if (!file) {
          throw new Error('No logo uploaded')
        }
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        
        const userCreatingCompany = await User.findOne({ clerkId: userId });
        if (!userCreatingCompany) throw new Error("User not found");
        
        let company;
        switch (companyData.type) {
            case "pharmacy":
                company = await Pharmacy.create({
                    name: companyData.name,
                    location: companyData.location,
                    image: buffer,
                    type: "pharmacy",
                })
                break;
            case "hospital":
                company = await Hospital.create({
                    name: companyData.name,
                    location: companyData.location,
                    image: buffer,
                    type: "hospital",
                })
                break;  
            default:
                break;
        }
        userCreatingCompany.company = company._id
        company.admins.append(userCreatingCompany._id)
        await userCreatingCompany.save()
        await company.save()
        console.log(company, buffer, userCreatingCompany)
        return JSON.parse(JSON.stringify(company));
    } catch (error) {
        handleError(error);
    }
}

