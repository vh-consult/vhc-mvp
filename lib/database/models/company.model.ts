import { Schema, model, models, Document } from "mongoose";

export interface CompanyParams extends Document {
    name: string;
    location: string;
    isVerified: boolean;
    admins: Schema.Types.ObjectId[];
    image: string;
    type: "hospital" | "pharmacy"
  }

  export interface PharmacyParams extends Document {
    name: string;
    location: string;
    isVerified: boolean;
    admins: Schema.Types.ObjectId[];
    image: string;
    inventory: Schema.Types.ObjectId[];
    orders: Schema.Types.ObjectId[];
    opens_at: string;
    closes_at: string
  }

  export interface HospitalParams extends Document {
    name: string;
    location: string;
    isVerified: boolean;
    admins: Schema.Types.ObjectId[];
    image: string;
    doctors: Schema.Types.ObjectId[];
    clients: Schema.Types.ObjectId[];
    description: string;
    specialties: Array<string>;
    booked_appointments: Schema.Types.ObjectId[];
  }

const CompanySchema = new Schema<CompanyParams>({
    name: {
        type: String,
        required: [true, "Please provide the company's name."],
        minlength: [2, "Name cannot be less than 2 characters"]
    },
    location: {
        type: String,
    },
    image: {
        type: String,
    },
    admins: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    isVerified: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        required: [true, "Please the type of company is required"],
        enum: ["hospital", "pharmacy"],
    }
}, { discriminatorKey: 'companyType' });


const PharmacySchema = new Schema<PharmacyParams>({
    inventory: [{
        type: Schema.Types.ObjectId,
        ref: 'Drug'
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    opens_at: {
        type: String,
        required: [true, "Please state opening time."],
    },
    closes_at: {
        type: String,
        required: [true, "Please state closing time."],
    },
    
});

const HospitalSchema = new Schema<HospitalParams>({
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
const Hospital = models?.Hospital || Company.discriminator("Hospital", HospitalSchema);
const Pharmacy = models?.Pharmacy || Company.discriminator("Pharmacy", PharmacySchema);

export {Company, Hospital, Pharmacy}