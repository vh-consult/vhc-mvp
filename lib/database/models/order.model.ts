import { Schema, model, models } from "mongoose";



const OrderSchema = new Schema({
    amount: { type: Number},
    payment_status: { type: String, enum: ["Not Paid", "Paid"]},
    reference: { type: String},
    status: { type: String, enum: ["pending", "delivered", "cancelled"], default: "pending"},
    buyer: { type: Schema.Types.ObjectId, ref: 'User'},
    shop: { type: Schema.Types.ObjectId, ref: 'Company'},
    items: [{ type: Schema.Types.ObjectId, ref: 'Drug'}],
    delivery_mode: { type: String, enum: ["homeDelivery", "inPerson"]},
    shipping_address: { type: String},
    note: { type: String,}
})

const Order = models?.Order || model("Order", OrderSchema);

export default Order