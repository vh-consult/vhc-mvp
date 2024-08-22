import { Schema, model, models } from "mongoose";
import { User } from "./user.model";

const PatientSchema = new Schema({
    insurancePlan: {type: Schema.Types.ObjectId,  ref: 'Insurance'},
    bookedAppointments: [{type: Schema.Types.ObjectId, ref: 'Booking'}],
    personalPhysician: {type: Schema.Types.ObjectId, ref: 'User'},
    healthRecord: [{type: Schema.Types.ObjectId, ref: 'Consultation'}],
    currentMeds: [{type: Schema.Types.ObjectId, ref: 'Medication'}],
    affiliateHospital: {type: Schema.Types.ObjectId, ref: 'Company'},
});

const Patient =  models?.Patient || User.discriminator("Patient", PatientSchema);
export default Patient