import { Schema, model, models } from "mongoose";
import { User } from "./user.model";


const CompanyAdminSchema = new Schema({
    company: {type: Schema.Types.ObjectId, ref: 'Company'},
    role: {type: String, enum: ["employee", "employer"]}
  },
);

const CompanyAdmin = models?.CompanyAdmin || User.discriminator("CompanyAdmin", CompanyAdminSchema);
export default CompanyAdmin