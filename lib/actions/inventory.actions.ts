import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";

export async function addToInventory() {
    try {
        await connectToDatabase()
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