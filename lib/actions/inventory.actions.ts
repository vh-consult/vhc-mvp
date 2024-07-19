"use server"
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { PharmacyAdmin, User } from "../database/models/user.model";
import { Company, Pharmacy } from "../database/models/company.model";
import Drug from "../database/models/drug.model";

export interface DrugParams {
    name: string;
    catalog: string;
    price: number;
    description: string;
    quantity: number,
    image: string
}

export async function addToInventory(
    adminId: string, 
    drugData: DrugParams
) {
    try {
        await connectToDatabase();
        const admin = await User.findOne({ clerkId: adminId }).populate('company');
        if (!admin) throw new Error("User not found");

        if (admin.userRole === "PharmacyAdmin") {
            const company = admin.company;
            if (!company) throw new Error("No company found");
            if (company.companyType !== "Pharmacy") throw new Error("Company is not a pharmacy");

            let drugToAdd = null;
            for (let i = 0; i < company.inventory.length; i++) {
                const drug = await Drug.findById(company.inventory[i]);
                if (drug && drug.name === drugData.name && drug.catalog === drugData.catalog) {
                    drugToAdd = drug;
                    break;
                }
            }

            if (drugToAdd) {
                drugToAdd.quantity += drugData.quantity;
                drugToAdd.price = drugData.price;
                drugToAdd.description = drugData.description;
                await drugToAdd.save();
                return { message: "Drug in inventory updated" };
            } else {
                const newDrug = await Drug.create(drugData);
                newDrug.shop = company._id;
                await newDrug.save();

                company.inventory.push(newDrug._id);
                await company.save();

                return { message: 'Drug added to inventory' };
            }
        } else {
            throw new Error("User not a pharmacy admin");
        }
    } catch (error) {
        handleError(error);
    }
}

export async function removeFromInventory(adminId: string, drugId: string, shopId: string) {
    try {
        await connectToDatabase()
        const admin = await PharmacyAdmin.findById({_id: adminId})
        if (!admin) throw new Error("Admin not found")

        const shop = await Pharmacy.findById({_id: shopId})
        if (!shop) throw new Error("Shop not found")

        if (!shop.admins.includes(adminId)) throw new Error("Not an admin of pharmacy")
        
        } catch (error) {
        handleError(error)
    }
}

export async function updateInventory(adminId: string, shopId: string) {
    try {
        await connectToDatabase()
        const admin = await PharmacyAdmin.findById({_id: adminId})
        if (!admin) throw new Error("Admin not found")

        const shop = await Pharmacy.findById({_id: shopId})
        if (!shop) throw new Error("Shop not found")

        if (!shop.admins.includes(adminId)) throw new Error("Not an admin of pharmacy")
        
    } catch (error) {
        handleError(error)
    }
}