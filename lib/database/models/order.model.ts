import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    reference: { type: String },
    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    },
    status: {
        type: String,
        enum: ["pending", "delivered", "canceled"]
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Pharmacy'
    },
    drugs: [{
        type: Schema.Types.ObjectId,
        ref: 'Drug'
    }],
    delivery_mode: {
        type: String,
        enum: ["homeDelivery", "inPerson"]
    },
    shipping_address: {
        
    },
    note: {
        type: String,
    }
})

const Order = models?.Order || model("Order", OrderSchema);

export default Order