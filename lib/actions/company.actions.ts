"use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { Company, Hospital, Pharmacy } from "../database/models/company.model";
import { User } from "../database/models/user.model";
import { writeFile } from 'fs/promises'
import { uploader } from "./general.actions";

export interface CompanyProps {
    name: string;
    location: string;
    logo: string;
    description: string;
    type: string;
}
export async function createCompany(clerkId: string, companyData: any){
    try {
        await connectToDatabase();
        
        const userCreatingCompany = await User.findOne({ clerkId });
        if (!userCreatingCompany) throw new Error("User not found");

        let company:any;
        const {type:_, ...registrationData} = companyData 
        console.log(registrationData)
        switch (companyData.type) {
            case "pharmacy":
                company = await Pharmacy.create(registrationData)
                break;
            case "hospital":
                company = await Hospital.create(registrationData)
                break;  
            default:
                break;
        }
        userCreatingCompany.company = company._id
        company.admins.push(userCreatingCompany._id)
        await userCreatingCompany.save()
        await company.save()
        return JSON.parse(JSON.stringify(company));
    } catch (error) {
        handleError(error);
    }
}

export async function getAllPharmacyShops() {
    try {
        await connectToDatabase();
        const allPharmacies = await Pharmacy.find();
        return JSON.parse(JSON.stringify(allPharmacies))
    } catch (error) {
        handleError(error)
    }
}

export async function getPharmacyInventory(pharmacyId: string) {
    try {
        await connectToDatabase()
        const inventory = await Pharmacy.findById(pharmacyId).populate('inventory')
        if (!inventory) throw new Error('No pharmacy drugs found')
        
        return JSON.parse(JSON.stringify(inventory))
    } catch (error) {
        handleError(error)
    }
}

export async function fetchFilteredDrugs(pharmacyId: string, query: string) {
    try {
        await connectToDatabase()
        const filteredInventory = await Pharmacy.findById(pharmacyId).populate('inventory')
        if (!filteredInventory) throw new Error('No pharmacy drugs found')
        
        
        return JSON.parse(JSON.stringify(filteredInventory))
    } catch (error) {
        handleError(error)
    }
}

export async function getPharmacyById(pharmacyId: string) {
    try {
        await connectToDatabase();
        const pharmacyFromDB = await Pharmacy.findById({_id: pharmacyId});
        if (!pharmacyFromDB) throw new Error("pharmacy shop not found!");
        return JSON.parse(JSON.stringify(pharmacyFromDB))
    } catch (error) {
        handleError(error)
    }
}

export async function getHospitalById(hospitalId: string) {
    try {
        await connectToDatabase();
        const hospitalFromDB = await Hospital.findById({_id: hospitalId});
        if (!hospitalFromDB) throw new Error("hospital shop not found!");
        return JSON.parse(JSON.stringify(hospitalFromDB))
    } catch (error) {
        handleError(error)
    }
}

export async function getAllHospitals() {
    try {
        await connectToDatabase();
        const allHospitals = await Hospital.find();
        return JSON.parse(JSON.stringify(allHospitals))
    } catch (error) {
        handleError(error)
    }
}

export async function getAllCompanies() {
    try {
        await connectToDatabase();
        const allCompanies = await Company.find();
        return JSON.parse(JSON.stringify(allCompanies))
    } catch (error) {
        handleError(error)
    }
}

export async function fetchCompanyData (companyId: string) {
    try {
        await connectToDatabase()
        const company = await Company.findById(companyId)
        if (!company) throw new Error("Company not found")

        return JSON.parse(JSON.stringify(company))
    } catch (error) {
        handleError(error)
    }
}