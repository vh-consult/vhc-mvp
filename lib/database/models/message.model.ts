import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: [{
        type: String,
        required: true
    }],
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    response: [{
        type: String,
    }],
    isRead: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

const Message = models?.Message ||  model("Message", MessageSchema);
export default Message