"use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { Company, Hospital, Pharmacy } from "../database/models/company.model";
import { User } from "../database/models/user.model";

export interface CompanyProps {
    name: string;
    location: string;
    image: string;
    type: string;
}
export async function createCompany(userId: string, companyData: CompanyProps){
    try {
        await connectToDatabase();

        const userCreatingCompany = await User.findOne({ clerkId: userId });
        if (!userCreatingCompany) throw new Error("User not found");
        
        let company;
        switch (userCreatingCompany.role) {
            case "pharmacyAdmin":
                company = await Pharmacy.create(companyData)
                break;
            case "hospitalAdmin":
                company = await Hospital.create(companyData)
                break;  
            default:
                break;
        }
        userCreatingCompany.company = company._id
        company.admins.append(userCreatingCompany._id)
        await userCreatingCompany.save()
        await company.save()
        return JSON.parse(JSON.stringify(company));
    } catch (error) {
        handleError(error);
    }
}

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