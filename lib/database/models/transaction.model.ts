import { Schema, models, model } from "mongoose";

const TransactionSchema = new Schema({
    items: [{ type: Schema.Types.ObjectId, refPath: 'itemType'}],
    itemType: [{ type: String, enum: ['Drug', 'Insurance']}],
    amount: { type: Number},
    status: { type: String, enum: ["Not Paid", "Paid"]},
    reference: { type: String}
})

const Transaction = models?.Transaction || model("Transaction", TransactionSchema)

export default Transaction