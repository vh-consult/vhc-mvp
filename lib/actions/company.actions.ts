"use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { Company, Hospital, Pharmacy } from "../database/models/company.model";
import { User } from "../database/models/user.model";

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
        console.log(error)
        handleError(error);
    }
}

export async function getAdminCompany(adminId: string) {
    try {
        await connectToDatabase()
        const userClaimingToBeAdmin = await User.findOne({clerkId: adminId})
        if (!userClaimingToBeAdmin) throw new Error("User not found")
        console.log(userClaimingToBeAdmin.userRole)
        if (
            userClaimingToBeAdmin.userRole !== "HospitalAdmin" || 
            userClaimingToBeAdmin.userRole !== "PharmacyAdmin"
        ) throw new Error("User not an admin of a company")

        const admin = await userClaimingToBeAdmin.populate('company')
        console.log(admin.company)
        return {companyId: admin.company._id}
    } catch (error) {
        handleError(error)
    }
}

export async function getAllPharmacyShops() {
    try {
        await connectToDatabase();
        const allPharmacies = await Company.find({companyType: "Pharmacy"});
        return JSON.parse(JSON.stringify(allPharmacies))
    } catch (error) {
        handleError(error)
    }
}

export async function fetchPharmacyOverviewData(shopId:string) {
    try {
        await connectToDatabase()
        const shop = await Company.findOne(
            {_id: shopId, companyType: "Pharmacy"}
        ).populate({
            path: "orders",
            populate: [
                { path: "buyer", select: "firstName lastName email" }
            ]
        }).populate({
            path: "inventory",
            select: "name expiryDate quantity price catalog"
        })
        if(!shop) throw new Error("No shop found")
        const orders = shop.orders
        const inventory = shop.inventory
        const shopData = shop.toObject()
        
        return {orders, inventory, shopData}
        
    } catch (error) {
        console.log(error)
    }
}

export async function fetchFilteredDrugs(
    pharmacyId: string, query: string
) {
    try {
        await connectToDatabase()

        const pharmacy = await Company.findOne(
            {_id: pharmacyId, companyType: "Pharmacy"}
        ).populate('inventory');
        if (!pharmacy) throw new Error('No pharmacy found');
        if (!pharmacy.inventory) throw new Error('No pharmacy drugs found');

        const inventory = pharmacy.inventory
        const filteredInventory = await inventory.find({
            $regex: query, $options: 'i'
        })
        return JSON.parse(JSON.stringify(filteredInventory))
    } catch (error) {
        console.log(error)
        handleError(error)
    }
}


export async function getPharmacyById(pharmacyId: string) {
    try {
        await connectToDatabase();
        const pharmacyFromDB = await Company.findById(pharmacyId);
        if (!pharmacyFromDB) throw new Error("pharmacy shop not found!");
        return JSON.parse(JSON.stringify(pharmacyFromDB))
    } catch (error) {
        handleError(error)
    }
}

export async function getHospitalById(hospitalId: string) {
    try {
        await connectToDatabase();
        const hospitalFromDB = await Company.findById(
            {_id: hospitalId, companyType: "Hospital"}
        );
        if (!hospitalFromDB) throw new Error("hospital shop not found!");
        return JSON.parse(JSON.stringify(hospitalFromDB))
    } catch (error) {
        handleError(error)
    }
}

export async function getAllHospitals() {
    try {
        await connectToDatabase();
        const allHospitals = await Company.find(
            {companytpe: "Hospital"}
        );
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