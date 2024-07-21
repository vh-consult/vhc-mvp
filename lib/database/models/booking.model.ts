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
    timestamps: true
})


const Booking = models?.Booking ||  model("Booking", BookingSchema);


export default Booking