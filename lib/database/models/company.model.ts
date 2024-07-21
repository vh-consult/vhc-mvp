import { Schema, model, models, Document } from "mongoose";

export interface CompanyParams extends Document {
    name: string;
    location: string;
    isVerified: boolean;
    admins: Schema.Types.ObjectId[];
    logo?: string;
    tagline?: string;
    description: string;
    services?: string[];
    posts?: Schema.Types.ObjectId[];
    companyType: "Hospital" | "Pharmacy"
  }

const CompanySchema = new Schema<CompanyParams>({
    name: {
        type: String,
        minlength: [2, "Name cannot be less than 2 characters"]
    },
    location: {
        type: String,
    },
    logo: {
        type: String,
    },
    tagline: {
        type: String,
    },
    admins: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    description: {
        type: String,
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
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
});

const HospitalSchema = new Schema({
    doctors: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    clients: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    description: {
        type: String,
    },
    services: [{
        type: String,
    }],
    booked_appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
});


const Company = models?.Company || model("Company", CompanySchema);
const Hospital = models?.Hospital || Company.discriminator("Hospital", HospitalSchema);
const Pharmacy = models?.Pharmacy || Company.discriminator("Pharmacy", PharmacySchema);

export {Company, Hospital, Pharmacy}