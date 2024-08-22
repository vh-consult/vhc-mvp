import { Schema, model, models, Document } from "mongoose";

export interface InsuranceParams extends Document {
    plan: "personal-care" | "family-care" | "unlimited";
    renewal_date: Date;
    start_date: Date;
    users: Schema.Types.ObjectId[]
} 

const InsuranceSchema = new Schema<InsuranceParams>({
    plan: { type: String, enum: ["personal-care", "family-care", "unlimited"], required: true},
    renewal_date: { type: Date, },
    start_date: { type: Date, default: Date.now()},
    users: [{ type: Schema.Types.ObjectId, ref: 'Patient'}]
});

InsuranceSchema.pre('save', function(next) {
    if (!this.renewal_date) { const oneYearLater = new Date(this.start_date); oneYearLater.setFullYear(oneYearLater.getFullYear() + 1); this.renewal_date = oneYearLater;}
    next();
});

const Insurance = models?.Insurance || model("Insurance", InsuranceSchema);

export default Insurance;