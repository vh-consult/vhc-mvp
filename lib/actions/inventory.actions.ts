"use server"
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { PharmacyAdmin } from "../database/models/user.model";
import { Pharmacy } from "../database/models/company.model";
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
    shopId: string, 
    drugData: DrugParams
) {
    try {
        await connectToDatabase()
        const admin = await PharmacyAdmin.findOne({clerkId: adminId})
        if (!admin) throw new Error("Admin not found")

        const shop = await Pharmacy.findById({_id: shopId})
        if (!shop) throw new Error("Shop not found")

        if (!shop.admins.includes(adminId)) throw new Error("Not an admin of pharmacy")

        let drugToAdd
        const existingDrugs = await shop.populate("inventory")
        existingDrugs.forEach(async (drug:any) => {
            if(
                drug.shop === shop._id && 
                drug.name === drugData.name && 
                drug.catalog === drugData.catalog
            ) {
                drugToAdd = await Drug.findById({_id: drug._id})
                drugToAdd.quantity += drugData.quantity
                drugToAdd.amount = drugData.price
                drugToAdd.description = drugData.description
                drugToAdd.catalog = drugData.catalog
                await drugToAdd.save()
            }
        });
        const newDrug = await Drug.create(drugData)
        newDrug.shop = shop._id
        await newDrug.save()

        shop.inventory.push(newDrug._id)
        await shop.save()

        // return JSON.parse(JSON.stringify())
        return {message: 'drug added to inventory'}

    } catch (error) {
        handleError(error)
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