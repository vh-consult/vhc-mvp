import { Schema, model, models } from "mongoose";

const options = { discriminatorKey: "userRole", timestamps: true };

const HistorySchema = new Schema({
  activity: {type: String, required: true},
  host: {type: Schema.Types.ObjectId, refPath: 'hostType'},
  hostType: {type: String, enum: ["User", "Company"]},
  summary: {type: String},
  orders: [{type: Schema.Types.ObjectId, ref:"Order"}],
  meds: [{type: Schema.Types.ObjectId, ref: "Medication"}]
})

const UserSchema = new Schema({
    clerkId: {type: String},
    email: {type: String},
    photo: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    dateOfBirth: {type: Date},
    country: {type: String},
    location: {type: String},
    gender: {type: String, enum: ["male", "female"]},
    blogsAuthored: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
    savedBlogs: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
    subscribedToNewsletter: {type: Boolean, default: false},
    orders: [{type: Schema.Types.ObjectId,ref: 'Order'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    cart: [{type: Schema.Types.ObjectId, ref: 'Drug'}],
    affiliateHospital: {type: Schema.Types.ObjectId, ref: 'Company'},
    personalPhysician: {type: Schema.Types.ObjectId, ref: 'User'},
    history: [{type: Schema.Types.ObjectId, ref: 'History'}],
    healthRecord: [{type: Schema.Types.ObjectId, ref: 'Consultation'}],
    currentMeds: [{type: Schema.Types.ObjectId, ref: 'Medication'}],
  }, options
);



const DoctorSchema = new Schema({
  bio: {type: String},
  personalRoom: {type: String},
  clients: [{type: Schema.Types.ObjectId, ref: 'User'}],
  consultationHistory: [{type: Schema.Types.ObjectId, ref: 'Consultation'}],
  bookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}],
});

const PatientSchema = new Schema({
  insurancePlan: {type: Schema.Types.ObjectId,  ref: 'Insurance'},
});

const PharmacyAdminSchema = new Schema({
  company: {type: Schema.Types.ObjectId, ref: 'Company'}
});

const HospitalAdminSchema = new Schema({
  company: {type: Schema.Types.ObjectId, ref: 'Company'},
});

const User = models?.User || model("User", UserSchema);
const Doctor =  models?.Doctor || User.discriminator("Doctor", DoctorSchema);
const HospitalAdmin =  models?.HospitalAdmin || User.discriminator("HospitalAdmin", HospitalAdminSchema);
const PharmacyAdmin =  models?.PharmacyAdmin || User.discriminator("PharmacyAdmin", PharmacyAdminSchema);
const Patient =  models?.Patient || User.discriminator("Patient", PatientSchema);

export {
  User,
  Patient,
  Doctor,
  HospitalAdmin,
  PharmacyAdmin
};
