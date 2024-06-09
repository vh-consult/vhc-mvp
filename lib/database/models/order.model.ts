import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
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
        enum: ["home delivery", "in person"]
    },
    note: {
        type: String,

    }
})

const Order = models?.Order || model("Order", OrderSchema);

export default Order