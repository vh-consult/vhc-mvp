"use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";


export async function addToCart(clerkId: string, drugId: string) {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}

export async function removeFromCart(clerkId: string, drugId: string) {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}


export async function placeOrder(clerkId: string, drugId: string) {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}


export async function cancelOrder(clerkId: string, orderId: string) {
    try {
        await connectToDatabase()
    } catch (error) {
        handleError(error)
    }
}