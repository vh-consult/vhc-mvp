import { Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    problem_statement: {
        type: String,
    },
    channel: {
        type: String,
        enum: ['virtual', 'inPerson', 'lab']
    },
    status: {
        type: String,
        enum: ["pending", "canceled", "completed"],
        default: 'pending'
    },
},{
    discriminatorKey: "BooingStatus",
    timestamps: true
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

const Booking = models?.Booking ||  model("Booking", BookingSchema);
const Consultation = models?.Consultation || Booking.discriminator("Consultation", ConsultationSchema);


export {Consultation, Booking}