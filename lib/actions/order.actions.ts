  "use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Drug from "../database/models/drug.model";
import { User } from "../database/models/user.model";
import { Pharmacy } from "../database/models/company.model";


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
    drugs: Array<string>, 
    shopId: string
) {
    try {
        await connectToDatabase()

        const userOrderingItem = await User.findOne({clerkId})
        if (!userOrderingItem) throw new Error("User not found")

        const shop = await Pharmacy.findById({_id: shopId})
        if (!shop) throw new Error("Pharmacy not found")    

        drugs.forEach(async (drugID) => {
            const drug = await Drug.findById({_id: drugID})
            if(!drug) throw new Error("Drug not found")
            
            userOrderingItem.orders.push(drug)
            await userOrderingItem.save()
        });
        
        
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