import { Schema, model, models, Document } from "mongoose";

const options = { discriminatorKey: "role", timestamps: true };

const UserSchema = new Schema(
  {
    clerkId: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    photo: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    country: {
      type: String,
    },
    location: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    blogsAuthored: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
      },
    ],
    savedBlogs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
      },
    ],
    subscribedToNewsletter: {
      type: Boolean,
      default: false,
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
    reminders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reminder',
      },
    ],
    cart: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Drug',
      },
    ],
  },
  options
);

const DoctorSchema = new Schema({
  specialty: {
    type: String,
  },
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  affiliateHospital: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
  },
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
  consultationHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Consultation',
    },
  ],
});

const PatientSchema = new Schema({
    healthRecord: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Consultation',
      },
    ],
    currentMeds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Medication',
      },
    ],
    insurancePlan: {
      type: Schema.Types.ObjectId,
      ref: 'Insurance'
    },
    affiliateHospital: {
      type: Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    personalPhysician: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    appointments: [
      {
        type: Schema.Types.ObjectId,
        refPath: 'Bookings',
      },
    ],
});

const PharmacyAdminSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Pharmacy',
  },
});

const HospitalAdminSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
  },
});

const User = models?.User || model("User", UserSchema);
const Patient =  models?.Patient || User.discriminator("Patient", PatientSchema);
const Doctor =  models?.Doctor || User.discriminator("Doctor", DoctorSchema);
const HospitalAdmin =  models?.HospitalAdmin || User.discriminator("HospitalAdmin", HospitalAdminSchema);
const PharmacyAdmin =  models?.PharmacyAdmin || User.discriminator("PharmacyAdmin", PharmacyAdminSchema);

export {
  User,
  Patient,
  Doctor,
  HospitalAdmin,
  PharmacyAdmin
};
