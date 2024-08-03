import { Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
    patient: {type: Schema.Types.ObjectId, ref: 'User'},
    host: {type: Schema.Types.ObjectId, refPath: 'hostType',},
    hostType: {type: String, enum: ["User", "Company"]  },
    link: {type: String,},
    date: {type: Date, required: true, default: new Date()},
    problem_statement: {type: String, default: 'Emergency'},
    channel: {type: String, enum: ['virtual', 'inPerson', 'lab'],default: 'virtual'},
    status: {type: String, enum: ["pending", "cancelled", "completed"],default: 'pending'},
},{
    timestamps: true
})


const Booking = models?.Booking ||  model("Booking", BookingSchema);


export default Booking