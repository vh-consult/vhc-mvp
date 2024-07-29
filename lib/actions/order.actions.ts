  "use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Drug from "../database/models/drug.model";
import { User } from "../database/models/user.model";
import { Company, Pharmacy } from "../database/models/company.model";
import { startSession } from "mongoose";


export async function addToCart(clerkId: string, drugId: string) {
    try {
        await connectToDatabase()

        const userAddingItem = await User.findOne({clerkId})
        if (!userAddingItem) throw new Error("User not found")

        const itemToAdd = await Drug.findById({_id: drugId})
        if (!itemToAdd) throw new Error("Drug not found")
        
        userAddingItem.cart.push(drugId)
        await userAddingItem.save()

        return {message: 'Item added to cart'}
    } catch (error) {
        handleError(error)
    }
}

export async function removeFromCart(clerkId: string, drugId: string) {
    try {
        await connectToDatabase()

        const userRemovingItem = await User.findOne({clerkId})
        if (!userRemovingItem) throw new Error("User not found")
            
        const itemToRemove = await Drug.findById({_id: drugId})
        if (!itemToRemove) throw new Error("Drug not found")

        userRemovingItem.cart.remove(drugId)
        await userRemovingItem.save()

        return {message: 'Item removed from cart'}
    } catch (error) {
        handleError(error)
    }
}


export async function placeOrder(
    clerkId: string, 
    drugs: Array<string> , 
    shopId: string
) {
    try {
        await connectToDatabase()
        console.log("started")
        const userOrderingItem = await User.findOne({clerkId})
        if (!userOrderingItem) throw new Error("User not found")

        const shop = await Pharmacy.findById(shopId)
        if (!shop) throw new Error("Pharmacy not found")  
        console.log("shop found")
        const session = await startSession()
        session.startTransaction()
        drugs.forEach(async (drugID) => {
            const drug = await Drug.findById(drugID)
            if(!drug) throw new Error("Drug not found")
            console.log(drug)
            userOrderingItem.orders.push(drug._id)
            await userOrderingItem.save()
        });
        
        await session.commitTransaction();
        session.endSession();
        return {message: "Order placed successfully"}
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

export async function retrieveShopOrders(shopId:string) {
    try {
        await connectToDatabase()
        const shop = await Company.findOne({_id: shopId, companyType: "Pharmacy"}).populate("orders")
        if (!shop) throw new Error("Shop not found")

        const orders = shop.orders
        return JSON.parse(JSON.stringify(orders))
    } catch (error) {
        handleError(error)
    }
}

