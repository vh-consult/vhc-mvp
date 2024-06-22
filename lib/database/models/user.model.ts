
import { Schema, model, models, Document } from "mongoose";

export interface UserParams {
  clerkId: string;
  email: string;
  photo?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  country: string;
  location: string;
  gender: "male"|"female";
  insurancePlan?: Schema.Types.ObjectId;
  role: "doctor"|"patient"|"pharmacyAdmin"|"hospitalAdmin";
  blogsAuthored?: Array<Schema.Types.ObjectId>;
  savedBlogs?:  Array<Schema.Types.ObjectId>;
  healthRecord?:  Array<Schema.Types.ObjectId>;
  appointments?:  Array<Schema.Types.ObjectId>;
  affiliateHospital?: Schema.Types.ObjectId;
  personalPhysician?: Schema.Types.ObjectId;
  orders?:  Array<Schema.Types.ObjectId>;
  subscribedToNewsletter: boolean
}


interface DoctorParams extends UserParams {
  bookings: Array<Schema.Types.ObjectId>;
  specialty: string;
  clients: Array<Schema.Types.ObjectId>;
  reminders: Array<Schema.Types.ObjectId>
  affiliateHospital: Schema.Types.ObjectId;
  consultationHistory: Array<Schema.Types.ObjectId>
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
  insurancePlan: {
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
  appointments: [{
    type: Schema.Types.ObjectId,
    enum: ['Consultation','Booking']
  }],
  affiliateHospital: {
      type: Schema.Types.ObjectId,
      ref: 'Hospital'
  },
  personalPhysician: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor'
  },
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
        ref: 'Booking'
    }], 
    consultationHistory: [{
      type: Schema.Types.ObjectId,
      ref: 'Consultation'
  }], 
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
const HospitalAdmin =  models?.HospitalAdmin || model("HospitalAdmin", HospitalAdminSchema);
const PharmacyAdmin =  models?.PharmacyAdmin || model("PharmacyAdmin", PharmacyAdminSchema);

export {
    User, 
    Doctor, 
    HospitalAdmin, 
    PharmacyAdmin
};
