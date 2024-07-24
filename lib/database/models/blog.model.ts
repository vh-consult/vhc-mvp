import { Schema, model, models, Document } from "mongoose";

export interface CommentProps {
    userId: string;
    comment: string
}

export interface BlogParams extends Document {
    title: string;
    introduction?: string;
    content: string;
    conclusion?: string;
    likes: number;
    shares: number;
    author: Schema.Types.ObjectId | string;
    coverImage: string;
    comments: Array<CommentProps>;
    createdAt: Date;
  }

const BlogSchema = new Schema<BlogParams>({
    title: {
        type: String,
        required: [true, "Please provide the title."],
    },
    introduction: {
        type: String,
    },    
    content: {
        type: String,
        required: [true, "Please provide the content."],
        minlength: [100, "content cannot be less than 100 characters"]
    },
    conclusion: {
        type: String,
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
        default: 0
    },
    shares: {
        type: Number,
        default: 0
    },
    comments: [{
        type: Array<CommentProps>
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { timestamps: true });

const Blog = models?.Blog || model("Blog", BlogSchema);
export default Blog