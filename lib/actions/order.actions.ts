  "use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Drug from "../database/models/drug.model";
import { User } from "../database/models/user.model";
import { Company, Pharmacy } from "../database/models/company.model";
import { startSession } from "mongoose";
import Order from "../database/models/order.model";


export async function addToCart(clerkId: string, drugId: string) {
    try {
        await connectToDatabase()

        const userAddingItem = await User.findOne({clerkId})
        if (!userAddingItem) throw new Error("User not found")

        const itemToAdd = await Drug.findById(drugId)
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
            
        const itemToRemove = await Drug.findById(drugId)
        if (!itemToRemove || !userRemovingItem.cart.includes(drugId)) throw new Error("Drug not found")

        userRemovingItem.cart.remove(drugId)
        await userRemovingItem.save()

        return {message: 'Item removed from cart'}
    } catch (error) {
        handleError(error)
    }
}

export interface OrderData {
    item: string;
    buyer: string;
    note: string;
    quantity: number;
    shop: string;
    amount: number;
}

export async function placeOrder(
    clerkId: string, 
    data: OrderData, 
) {
    try {
        await connectToDatabase()
        
        const userOrderingItem = await User.findOne({clerkId})
        if (!userOrderingItem) throw new Error("User not found")

        const shop = await Company.findOne({_id: data.shop, companyType: "Pharmacy"})
        if (!shop) throw new Error("Pharmacy not found")  

        const session = await startSession()
        session.startTransaction()
        const drug = await Drug.findById(data.item)
        if(!drug) throw new Error("Drug not found")        
        const newOrder = await Order.create({...data, buyer: userOrderingItem._id})
        console.log(newOrder)
        userOrderingItem.orders.push(newOrder._id)
        await userOrderingItem.save()
        shop.orders.push(newOrder._id)
        await shop.save()
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
        const user = await User.findOne({clerkId}).populate("orders")
        if(!user) throw new Error("User not found")
        
        const order = await Order.findById(orderId)
        if(!order) throw new Error("Order not found")

        if (order.buyer !== user._id || !user.orders.includes(orderId)) throw new Error("Order not placed by user")
            
        const session = await startSession()
        session.startTransaction()

        order.status = "cancelled"
        await order.save()
        
        await session.commitTransaction();
        session.endSession();
        
        return {message: 'Order cancelled successfully'}
    } catch (error) {
        handleError(error)
    }
}

export async function retrieveShopOrders(shopId:string) {
    try {
        await connectToDatabase()
        const shop = await Company.findOne(
            {_id: shopId, companyType: "Pharmacy"}
        ).populate("orders")
        if (!shop) throw new Error("Shop not found")

        const orders = await shop.orders
        console.log(orders)
        // .populate("buyer")
        // .populate("items")
        return JSON.parse(JSON.stringify(orders))
    } catch (error) {
        handleError(error)
    }
}

