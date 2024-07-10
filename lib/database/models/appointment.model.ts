import { Schema, model, models } from "mongoose";


const ConsultationSchema = new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
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
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
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
        enum: ['virtual', 'inPerson', 'lab']
    }
},{
    timestamps: true
})

const Consultation = models?.Consultation || model("Consultation", ConsultationSchema);
const Reminder = models?.Reminder ||  model("Reminder", ReminderSchema);
const Booking = models?.Booking ||  model("Booking", BookingSchema);


export {Consultation, Reminder, Booking}