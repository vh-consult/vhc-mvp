
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
const Doctor =  models?.Doctor || User.discriminator("Doctor", DoctorSchema);
const Patient =  models?.Patient || User.discriminator("Patient", PatientSchema);
const HospitalAdmin =  models?.HospitalAdmin || User.discriminator("HospitalAdmin", HospitalAdminSchema);
const PharmacyAdmin =  models?.PharmacyAdmin || User.discriminator("PharmacyAdmin", PharmacyAdminSchema);

export {
    User, 
    Doctor, 
    Patient, 
    HospitalAdmin, 
    PharmacyAdmin
};
