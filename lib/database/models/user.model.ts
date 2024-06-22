
import { Schema, model, models, Document } from "mongoose";

export interface UserParams {
  clerkId: string;
  email: string;
  photo: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  country: string;
  location: string;
  gender: "male"|"female";
  insurance_plan: Schema.Types.ObjectId;
  role: "doctor"|"patient"|"pharmacyAdmin"|"hospitalAdmin";
  blogsAuthored: Array<Schema.Types.ObjectId>;
  savedBlogs:  Array<Schema.Types.ObjectId>;
  healthRecord:  Array<Schema.Types.ObjectId>;
  orders:  Array<Schema.Types.ObjectId>;
  subscribedToNewsletter: boolean
}

interface PatientParams extends UserParams {
  consultationSessions: Array<Schema.Types.ObjectId>;
  appointments: Array<Schema.Types.ObjectId>;
  affiliateHospital: Schema.Types.ObjectId;
  personalPhysician: Schema.Types.ObjectId
}

interface DoctorParams extends UserParams {
  bookings: Array<Schema.Types.ObjectId>;
  specialty: string;
  clients: Array<Schema.Types.ObjectId>;
  reminders: Array<Schema.Types.ObjectId>
  affiliateHospital: Schema.Types.ObjectId;
}


const UserSchema = new Schema<UserParams>({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
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
  insurance_plan: {
    type: Schema.Types.ObjectId,
    ref: 'Insurance'
  },
  role: {
    type: String,
    enum: ["doctor", "patient", "hospitaAdmin", "pharmacAdmin"],
  },
  blogsAuthored: [{
    type: Schema.Types.ObjectId,
    ref: 'Blog'
  }],
  savedBlogs: [{
    type: Schema.Types.ObjectId,
    ref: 'Blog'
  }],
  subscribedToNewsletter: {
    type: Boolean,
    default: false
  },
  healthRecord: [{
    type: Schema.Types.ObjectId,
    ref: 'Consultation'
  }],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }],
},{
    timestamps: true
});

const DoctorSchema = new Schema<DoctorParams>({
    specialty: {
        type: String,
    },
    affiliateHospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
    },
    clients: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    bookings: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }], 
});

const PatientSchema = new Schema<PatientParams>({
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    affiliateHospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    personalPhysician: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
});

const PharmacyAdminSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Pharmacy'
    }
});

const HospitalAdminSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    }
});

const User = models?.User || model("User", UserSchema);
const Doctor =  models?.Doctor || model("Doctor", DoctorSchema);
const Patient =  models?.Patient || model("Patient", PatientSchema);
const HospitalAdmin =  models?.HospitalAdmin || model("HospitalAdmin", HospitalAdminSchema);
const PharmacyAdmin =  models?.PharmacyAdmin || model("PharmacyAdmin", PharmacyAdminSchema);

export {
    User, 
    Doctor, 
    Patient, 
    HospitalAdmin, 
    PharmacyAdmin
};
