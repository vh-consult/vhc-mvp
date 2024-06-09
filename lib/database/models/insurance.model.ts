import { Schema, model, models } from "mongoose";

const InsuranceSchema = new Schema({
    plan: {
        type: String,
        enum: ["personal-care", "family-care", "unlimited"],
        required: true
    },
    renewal_date: {
        type: Date,
        
    },
    start_date: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

InsuranceSchema.pre('save', function(next) {
    if (!this.renewal_date) {
        const oneYearLater = new Date(this.start_date);
        oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
        this.renewal_date = oneYearLater;
    }
    next();
});

const Insurance = models?.Insurance || model("Insurance", InsuranceSchema);

export default Insurance;