import { Schema, model, models, Document } from "mongoose";

export interface CommentProps {
    userId: string;
    comment: string
}

export interface BlogParams extends Document {
    title: string;
    content: string;
    likes: number;
    shares: number;
    author: Schema.Types.ObjectId;
    coverImage: string;
    comments: Array<CommentProps>
  }

const BlogSchema = new Schema<BlogParams>({
    title: {
        type: String,
        required: [true, "Please provide the title."],
        minlength: [2, "title cannot be less than 2 characters"]
    },
    content: {
        type: String,
        required: [true, "Please provide the content."],
        minlength: [100, "content cannot be less than 100 characters"]
    },
    coverImage: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: {
        type: Number,
    },
    shares: {
        type: Number,
    },
    comments: [{
        type: Array<CommentProps>
    }]
}, { timestamps: true });

const Blog = models?.Blog || model("Blog", BlogSchema);
export default Blog