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

export async function removeFromInventory(clerkId: string, drugId: string, shopId: string) {
    try {
        await connectToDatabase()
        const admin = await User.findOne({clerkId, userRole: "PharmacyAdmin"})
        if (!admin) throw new Error("Admin not found")

        const shop = await Company.findOne({_id: shopId, companyType: "Pharmacy"})
        if (!shop) throw new Error("Shop not found")

        if (!shop.admins.includes(clerkId)) throw new Error("Not an admin of pharmacy")
        
        if (!shop.inventory.includes(drugId)) throw new Error("Drug not in shop inventory")
        
        

        } catch (error) {
        handleError(error)
    }
}

export async function updateInventory(clerkId: string, shopId: string) {
    try {
        await connectToDatabase()
        const admin = await User.findOne({clerkId, userRole: "PharmacyAdmin"})
        if (!admin) throw new Error("Admin not found")

        const shop = await Company.findOne({_id: shopId, companyType: "Pharmacy"})
        if (!shop) throw new Error("Shop not found")

        if (!shop.admins.includes(clerkId)) throw new Error("Not an admin of pharmacy")
        
    } catch (error) {
        handleError(error)
    }
}

export async function getDrug(drugId: string , shopId: string) {
    try {
        await connectToDatabase()

        const shop = await Company.findOne({_id: shopId, companyType: "Pharmacy"}).populate("inventory")
        if (!shop) throw new Error("Shop not found")

        const inventory = shop.inventory
        let drug
        if (inventory.includes(drugId)) {
            drug = await Drug.findById(drugId)

        }else {
            throw new Error("Drug not in shop inventory")
        }
        return JSON.parse(JSON.stringify(drug))
    } catch (error) {
        handleError(error)
    }
}


export async function getPharmacyInventory(pharmacyId: string) {
    try {
        await connectToDatabase()
        if (!pharmacyId || pharmacyId.trim() === '') {
            throw new Error('Invalid company ID');
        }
        const pharmacy = await Company.findOne(
            {_id: pharmacyId, companyType: "Pharmacy"}
        ).populate("inventory");
        
        if (!pharmacy) throw new Error('No pharmacy found');
        if (!pharmacy.inventory) throw new Error('No pharmacy drugs found');
        return JSON.parse(JSON.stringify(pharmacy.inventory));
    } catch (error) {
        handleError(error);
    }
}