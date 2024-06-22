import { Schema, model, models } from "mongoose";


const ConsultationSchema = new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
    },
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
},{
    timestamps: true
})


const ReminderSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    time: {
        type: Date,
        required: true
    },
    purpose: {
        type: String,
    }
},{
    timestamps: true
})

const BookingSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    host: {
        type: Schema.Types.ObjectId,
        enum: ['Doctor', 'Company']
    },
    time: {
        type: Date,
        required: true
    },
    purpose: {
        type: String,
    },
    channel: {
        type: String,
        enum: ['virtual', 'inPerson']
    }
},{
    timestamps: true
})

const Consultation = models?.Consultation || model("Consultation", ConsultationSchema);
const Reminder = models?.Reminder ||  model("Reminder", ReminderSchema);
const Booking = models?.Booking ||  model("Booking", BookingSchema);


export {Consultation, Reminder, Booking}