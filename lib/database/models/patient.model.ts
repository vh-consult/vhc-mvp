import { Schema, model, models } from "mongoose";
import User from "./user.model";

const PatientSchema = new Schema({
    insurancePlan: {type: Schema.Types.ObjectId,  ref: 'Insurance'},
    personalPhysician: {type: Schema.Types.ObjectId, ref: 'User'},
    healthRecord: [{type: Schema.Types.ObjectId, ref: 'Consultation'}],
    currentMeds: [{type: Schema.Types.ObjectId, ref: 'Medication'}],
    affiliateHospital: {type: Schema.Types.ObjectId, ref: 'Company'},
    cart: [{type: Schema.Types.ObjectId, ref: 'Drug'}],
    orders: [{type: Schema.Types.ObjectId,ref: 'Order'}],
    savedBlogs: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
    subscribedToNewsletter: {type: Boolean, default: false},
    history: [
        {
          diagnosis: String,
          symptoms: [String],
          medications: [String],
          date: { type: Date, default: Date.now },
        },
      ],
});

const Patient =  models?.Patient || User.discriminator("Patient", PatientSchema);
export default Patient