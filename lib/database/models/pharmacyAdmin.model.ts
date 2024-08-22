import { Schema, model, models } from "mongoose";
import User from "./user.model";


const PharmacyAdminSchema = new Schema({
    company: {type: Schema.Types.ObjectId, ref: 'Pharmacy'},
    role: {type: String, enum: ["employee", "employer"]}
  },
);

const PharmacyAdmin = models?.PharmacyAdmin || User.discriminator("PharmacyAdmin", PharmacyAdminSchema);
export default PharmacyAdmin