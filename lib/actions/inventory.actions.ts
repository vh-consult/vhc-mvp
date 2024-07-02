import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { PharmacyAdmin } from "../database/models/user.model";

export interface DrugParams {
    name: string;
    batchId: string;
    catalog: string;
    price: number;
    description: string;
    quantity: number
}

export async function addToInventory(adminId: string, shopId: string, drugData: DrugParams) {
    try {
        await connectToDatabase()
        const admin = await PharmacyAdmin.findById({_id: adminId})

    } catch (error) {
        handleError(error)
    }
}

export async function removeFromInventory() {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}

export async function updateInventory() {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}