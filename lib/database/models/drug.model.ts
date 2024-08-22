import { Schema, model, models } from "mongoose";

export interface DrugParams {
    name: string;
    image?: string;
    catalog: string;
    price:number;
    description: string;
    quantity:number;
    expiryDate: Date
}

const DrugSchema = new Schema({
    name: {type: String, required: [true, "Please drug's name is required"]},
    image: {type: String, required: true},
    catalog: {type: String, required: [true, "Please drug's catalog is required"]},
    price: {type: Number, required: [true, "Please state the price"]},
    description: {type: String, required: [true, "Please add description"]},
    quantity: {type: Number, required: [true, "Please state the quantity being added"]},
    expiryDate: {type:Date},
    shop: {type: Schema.Types.ObjectId, ref: 'Pharmacy'}
});

const Drug = models?.Drug || model("Drug", DrugSchema)

export default Drug