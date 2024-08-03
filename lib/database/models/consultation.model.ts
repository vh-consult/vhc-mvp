import {Schema, models, model} from "mongoose"

const ConsultationSchema = new Schema({
    patient: {type: Schema.Types.ObjectId, ref: "User"},
    doctor: {type: Schema.Types.ObjectId, ref: "User"},
    date: {type: Date, required: true},
    problem_statement: {type: String,},
    channel: {type: String, enum: ['virtual', 'inPerson', 'lab']},
    medication: [{type: Schema.Types.ObjectId, ref: 'Medication'}],
    summary: {type: String},
    diagnosis: [{type: String, required: true}]
},{
    timestamps: true
})

const Consultation = models?.Consultation || model("Consultation", ConsultationSchema)

export default Consultation