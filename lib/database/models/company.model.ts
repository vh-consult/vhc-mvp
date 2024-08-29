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
    companyType: "Hospital" | "Pharmacy",
    statistics: Array<any>
  }
const StatsSchema = new Schema({
    title: String,
    scaleOfMeasure: String,
    content: String,
    rate: Number
})

const CompanySchema = new Schema<CompanyParams>({
    name: {type: String, minlength: [2, "Name cannot be less than 2 characters"]},
    location: {type: String},
    logo: {type: String},
    tagline: {type: String},
    description: {type: String},
    posts: {type: Schema.Types.ObjectId, ref: 'Blog'},
    isVerified: {type: Boolean, default: false},
    statistics: [StatsSchema],
}, { discriminatorKey: 'companyType' });


const PharmacySchema = new Schema({
    inventory: [{type: Schema.Types.ObjectId, ref: 'Drug'}],
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    admins: [{type: Schema.Types.ObjectId, ref: 'PharmacyAdmin'}],

});

const HospitalSchema = new Schema({
    doctors: [{type: Schema.Types.ObjectId, ref: 'Doctor'}],
    clients: [{type: Schema.Types.ObjectId, ref: 'Patient'}],
    description: {type: String},
    services: [{type: String}],
    appointments: [{type: Schema.Types.ObjectId, ref: 'Consultation'}],
    admins: [{type: Schema.Types.ObjectId, ref: 'HospitalAdmin'}],
});


const Company = models?.Company || model("Company", CompanySchema);
const Hospital = models?.Hospital || Company.discriminator("Hospital", HospitalSchema);
const Pharmacy = models?.Pharmacy || Company.discriminator("Pharmacy", PharmacySchema);

export {Company, Hospital, Pharmacy}