import { Schema, model, models } from "mongoose";


const AppointmentSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    physician: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    problem_statement: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ["pending", "canceled", "completed"],
        default: 'pending'
    }
},{
    discriminatorKey: 'appointmentStatus'
})

const ConsultationSchema = new Schema({
    medication: [{
        type: Schema.Types.ObjectId,
        ref: 'Medication'
    }],
    summary: {
        type: String,
    },
    diagnosis: [{
        type: String,
        required: true
    }]
})


const Appointment = models?.Appointment || model("Appointment", AppointmentSchema);
const Consultation = Appointment?.discriminator("Consultation", ConsultationSchema);

export {Appointment, Consultation}