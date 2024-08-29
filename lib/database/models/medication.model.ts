import { Schema, model, models, Document } from "mongoose";

export interface MedicationParams extends Document {
    drug: string;
    dose: number;
    caution?: string;
    status?:string;
    duration?: string;
}

const MedicationSchema = new Schema<MedicationParams>({
    drug: { type: String, required: [true, "drug's name is required"],},
    dose: { type: Number, required: [true, "Input drug dosage"],},
    caution: { type: String, required: [true, "caution for taking drugs is required"],},
    status: { type: String, enum: ["notFinished", "finished"], default: "notFinished",},
    duration: { type: String,},
});

const Medication = models?.Medication || model("Medication", MedicationSchema)

export default Medication