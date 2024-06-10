
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
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
  location: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  planId: {
    type: String,
    enum: ["personal-care", "family-care", "unlimited"],
  },
  role: {
    type: String,
    enum: ["doctor", "patient", "hospital-admin", "pharmacy-admin"],
  },
},{
    discriminatorKey: 'userRole'
});

const DoctorSchema = new Schema({
    specialty: {
        type: String,
    },
    affiliatedHospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
    },
    assignedPatients: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    booked_appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }], 
});

const PatientSchema = new Schema({
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    health_record: [{
        type: Schema.Types.ObjectId,
        ref: 'Consultation'
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    insurance_plan: {
        type: Schema.Types.ObjectId,
        ref: 'Insurance'
    },
    healthcare_provider: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    personal_doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
});

const PharmacyAdminSchema = new Schema({
    pharmacy: {
        type: Schema.Types.ObjectId,
        ref: 'Pharmacy'
    }
});

const HospitalAdminSchema = new Schema({
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    }
});

const User = models?.User || model("User", UserSchema);
const Doctor = User?.discriminator("Doctor", DoctorSchema);
const Patient = User?.discriminator("Patient", PatientSchema);
const HospitalAdmin = User?.discriminator("HospitalAdmin", HospitalAdminSchema);
const PharmacyAdmin = User?.discriminator("PharmacyAdmin", PharmacyAdminSchema);

export {
    User, 
    Doctor, 
    Patient, 
    HospitalAdmin, 
    PharmacyAdmin
};
