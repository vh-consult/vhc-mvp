import { Schema, model, models } from "mongoose";
import User from "./user.model";


const PharmacyAdminSchema = new Schema({
    company: {type: Schema.Types.ObjectId, ref: 'Pharmacy'},
    permission: {type: String, enum: ["employee", "admin"], default: "admin"}
  },
);

const PharmacyAdmin = models?.PharmacyAdmin || User.discriminator("PharmacyAdmin", PharmacyAdminSchema);
export default PharmacyAdmin