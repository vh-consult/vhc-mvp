import {Schema, models, model} from "mongoose"

const ConsultationSchema = new Schema({
    patient: {type: Schema.Types.ObjectId, ref: "Patient"},
    doctor: {type: Schema.Types.ObjectId, ref: "Doctor"},
    date: {type: Date, required: true, default: new Date()},
    problemStatement: {type: String, default: 'Emergency'},
    channel: {type: String, enum: ['virtual', 'inPerson', 'lab'], default: 'virtual'},
    medication: [{type: Schema.Types.ObjectId, ref: 'Medication'}],
    summary: {type: String},
    diagnosis: [{type: String}],
    examination: [{type: String}],
    status: {type: String, enum: ["pending", "canceled", "accepted", "finished"],default: 'pending'},
    link: {type: String}
},{
    timestamps: true
})

const Consultation = models?.Consultation || model("Consultation", ConsultationSchema)

export default Consultation