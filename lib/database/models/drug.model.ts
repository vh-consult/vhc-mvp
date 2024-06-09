import { Schema, model, models } from "mongoose";

const DrugSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    batch_ID: {
        type: String,
        required: true,
        unique: true
    },
    catalog: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const Drug = models?.Drug || model("Drug", DrugSchema)

export default Drug