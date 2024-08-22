import { Schema, model, models } from "mongoose";

const options = { discriminatorKey: "type", timestamps: true };

const HistorySchema = new Schema({
  activity: {type: String, required: true},
  host: {type: Schema.Types.ObjectId, refPath: 'hostType'},
  hostType: {type: String, enum: ["User", "Company"]},
  summary: {type: String},
  orders: [{type: Schema.Types.ObjectId, ref:"Order"}],
  meds: [{type: Schema.Types.ObjectId, ref: "Medication"}]
})

const UserSchema = new Schema({
    clerkId: {type: String},
    email: {type: String},
    photo: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    dateOfBirth: {type: Date},
    country: {type: String},
    location: {type: String},
    gender: {type: String, enum: ["male", "female"]},
    savedBlogs: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
    subscribedToNewsletter: {type: Boolean, default: false},
    orders: [{type: Schema.Types.ObjectId,ref: 'Order'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    cart: [{type: Schema.Types.ObjectId, ref: 'Drug'}],
    history: [HistorySchema],
  }, options
);






const User = models?.User || model("User", UserSchema);

export {
  User,
  Doctor,
};
