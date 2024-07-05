import { Schema, model, models, Document } from "mongoose";

export interface DrugParams extends Document {
    name: string;
    batch_ID: string;
    catalog: string;
    price:number;
    description: string;
    quantity:number;
}

const DrugSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please drug's name is required"],
    },
    batchId: {
        type: String,
        required: [true, "Please  is required"],
        unique: [true, "Please batch id  is required"]
    },
    catalog: {
        type: String,
        required: [true, "Please drug's catalog is required"],
    },
    price: {
        type: Number,
        required: [true, "Please state the price"],
    },
    description: {
        type: String,
        required: [true, "Please add description"],
    },
    quantity: {
        type: Number,
        required: [true, "Please state the quantity being added"],
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Pharmacy'
    }
});

const Drug = models?.Drug || model("Drug", DrugSchema)

export default Drug