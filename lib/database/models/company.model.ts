import { Schema, model, models } from "mongoose";


const CompanySchema = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    admin: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
}, { discriminatorKey: 'companyType' });


const PharmacySchema = new Schema({
    inventory: [{
        type: Schema.Types.ObjectId,
        ref: 'Drug'
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    working_hours: {
        type: String,
    },
    
});

const HospitalSchema = new Schema({
    doctors: [{
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    }],
    clients: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    description: {
        type: String,
    },
    specialties: [{
        type: String,
    }],
    booked_appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ]
});


const Company = models?.Company || model("Company", CompanySchema);
const Hospital = Company?.discriminator("Hospital", HospitalSchema);
const Pharmacy = Company?.discriminator("Pharmacy", PharmacySchema);

export {Company, Hospital, Pharmacy}