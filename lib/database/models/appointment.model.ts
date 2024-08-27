import { Schema, model, models } from "mongoose";

const AppointmentSchema = new Schema({
    patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
    doctor: {type: Schema.Types.ObjectId, ref: 'Doctor',},
    link: {type: String},
    date: {type: Date, required: true, default: new Date()},
    problemStatement: {type: String, default: 'Emergency'},
    channel: {type: String, enum: ['virtual', 'inPerson', 'lab'],default: 'virtual'},
    status: {type: String, enum: ["pending", "cancelled", "completed"],default: 'pending'},
},{
    timestamps: true
})


const Appointment = models?.Appointment ||  model("Appointment", AppointmentSchema);


export default Appointment