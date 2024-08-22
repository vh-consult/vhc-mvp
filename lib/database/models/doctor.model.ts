import { Schema, model, models } from "mongoose";
import User from "./user.model";


const DoctorSchema = new Schema({
    bio: {type: String},
    personalRoom: {type: String},
    ongoingSession: {type: Schema.Types.ObjectId, ref: 'Booking'},
    clients: [{type: Schema.Types.ObjectId, ref: 'Patient'}],
    consultationHistory: [{type: Schema.Types.ObjectId, ref: 'Consultation'}],
    requestedBookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}],
    acceptedBookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}],
    blogsAuthored: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
    affiliateHospital: {type: Schema.Types.ObjectId, ref: 'Hospital'},
    savedBlogs: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
    orders: [{type: Schema.Types.ObjectId,ref: 'Order'}],
});

  
const Doctor =  models?.Doctor || User.discriminator("Doctor", DoctorSchema);
export default Doctor
