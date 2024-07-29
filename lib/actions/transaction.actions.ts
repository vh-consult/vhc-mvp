import Order from "../database/models/order.model";
import Transaction from "../database/models/transaction.model";
import { User } from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export async function makePayment(
    userId: string,
    amount: number, 
    reference: string,
    items: string[],
) {
    try {
        await connectToDatabase()
        const user = await User.findOne({clerkId: userId})
        if (!user) throw new Error("User notfound")
        
        const newOrder = await Order.create()
    } catch (error) {
        handleError(error)
    }
}