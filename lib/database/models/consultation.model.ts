import {Schema, models, model} from "mongoose"

const ConsultationSchema = new Schema({
    patient: {type: Schema.Types.ObjectId, ref: "Patient"},
    doctor: {type: Schema.Types.ObjectId, ref: "Doctor"},
    date: {type: Date, required: true},
    problemStatement: {type: String,},
    channel: {type: String, enum: ['virtual', 'inPerson', 'lab']},
    medication: [{type: Schema.Types.ObjectId, ref: 'Medication'}],
    summary: {type: String},
    diagnosis: [{type: String, required: true}],
    examination: [{type: String, required: true}],
},{
    timestamps: true
})

const Consultation = models?.Consultation || model("Consultation", ConsultationSchema)

export default Consultation