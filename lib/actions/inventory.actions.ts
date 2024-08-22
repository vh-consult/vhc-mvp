"use server"
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { Company, Pharmacy } from "../database/models/company.model";
import Drug from "../database/models/drug.model";
import User from "../database/models/user.model";

export interface DrugParams {
    name: string;
    catalog: string;
    price: number;
    description: string;
    quantity: number,
    image: string,
    expiryDate: Date;
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
            const shop = admin.company;
            if (!shop) throw new Error("No shop found");
            if (shop.companyType !== "Pharmacy") throw new Error("Company is not a pharmacy");

            let drugToAdd = null;
            for (let i = 0; i < shop.inventory.length; i++) {
                const drug = await Drug.findById(shop.inventory[i]);
                if (drug && drug.name === drugData.name && drug.catalog === drugData.catalog) {
                    drugToAdd = drug;
                    break;
                }
            }

            if (drugToAdd) {
                drugToAdd.quantity += drugData.quantity;
                drugToAdd.price = drugData.price;
                drugToAdd.description = drugData.description;
                drugToAdd.expiryDate = drugData.expiryDate
                await drugToAdd.save();
                return { message: "Drug in inventory updated" };
            } else {
                const newDrug = await Drug.create(drugData);
                newDrug.shop = shop._id;
                await newDrug.save();

                shop.inventory.push(newDrug._id);
                await shop.save();

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
        const admin = await PharmacyAdmin.findOne({clerkId})
        if (!admin) throw new Error("Admin not found")

        const shop = await Company.findOne({_id: shopId, companyType: "Pharmacy"})
        if (!shop) throw new Error("Shop not found")

        if (!shop.admins.includes(clerkId)) throw new Error("Not an admin of pharmacy")
        
        if (!shop.inventory.includes(drugId)) throw new Error("Drug not in shop inventory")
        
        let drugToRemove = null;
        for (let i = 0; i < shop.inventory.length; i++) {
            const drug = await Drug.findById(shop.inventory[i]);
            if (drug && drug._id === drugId) {
                drugToRemove = drug;
                break;
            }
        }

        if (drugToRemove) {
            await Drug.findByIdAndDelete(drugId);
            return { message: "Drug in inventory deleted" };
        } else{
            throw new Error("Drug not found in inventory")
        }

        } catch (error) {
        handleError(error)
    }
}

export async function updateInventory(
    clerkId: string, shopId: string,
    drugData: DrugParams
) {
    try {
        await connectToDatabase()
        const admin = await PharmacyAdmin.findOne({clerkId})
        if (!admin) throw new Error("Admin not found")

        const shop = await Company.findOne({_id: shopId, companyType: "Pharmacy"})
        if (!shop) throw new Error("Shop not found")

        if (!shop.admins.includes(clerkId)) throw new Error("Not an admin of pharmacy")
        
        let drugToUpdate = null;
        for (let i = 0; i < shop.inventory.length; i++) {
            const drug = await Drug.findById(shop.inventory[i]);
            if (drug && drug.name === drugData.name && drug.catalog === drugData.catalog) {
                drugToUpdate = drug;
                break;
            }
        }

        if (drugToUpdate) {
            drugToUpdate.quantity += drugData.quantity;
            drugToUpdate.price = drugData.price;
            drugToUpdate.description = drugData.description;
            drugToUpdate.expiryDate = drugData.expiryDate
            await drugToUpdate.save();
            return { message: "Drug in inventory updated" };
        }
    } catch (error) {
        handleError(error)
    }
}

export async function getDrug(drugId: string, shopId: string) {
    try {
        await connectToDatabase()
        console.log(drugId, shopId)
        
        const shop = await Company.findOne({_id: shopId, companyType: "Pharmacy"}).populate("inventory")
        if (!shop) throw new Error("Shop not found")

        const inventory = shop.inventory
        
        // Check if the drugId exists in the inventory
        const drugInInventory = inventory.some((item: any) => item._id.toString() === drugId)
        
        if (!drugInInventory) {
            throw new Error("Drug not in shop inventory")
        }

        const drug = await Drug.findById(drugId)
        if (!drug) throw new Error("Drug not found")

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