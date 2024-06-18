"use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Blog, { BlogParams } from "../database/models/blog.model";
import { User } from "../database/models/user.model";

export async function createBlog(clerkId:string, blogData:BlogParams) {
    try {
        await connectToDatabase();
        
    } catch (error) {
        handleError(error)
    }
}

export async function getAllBlogs() {
    try {
        await connectToDatabase();
        const blogs = await Blog.find()
        return JSON.parse(JSON.stringify(blogs))
    } catch (error) {
        handleError(error)
    }
}

export async function getBlogById(blogId:string) {
    try {
        await connectToDatabase();
        const blog = await Blog.findById({_id: blogId})
        if(!blog) throw new Error("Blog not found!")
        return JSON.parse(JSON.stringify(blog))
    } catch (error) {
        handleError(error)
    }
}

export async function editBlog(clerkId:string, blogId:string, blogData:BlogParams) {
    try {
        await connectToDatabase();
        const blogAuthor = await User.findOne({clerkId})
        if(!blogAuthor) throw new Error("Author not found!")
        let blogToEdit
        if (blogAuthor.blogsAuthored.includes(blogId)) {
            blogToEdit = await Blog.findByIdAndUpdate({
                _id: blogId}, {blogData}, {new: true}
            )
            if(!blogToEdit) throw new Error("Blog not found!")
        } else {
            throw new Error("Blog not found in author's published blogs")
        }
        return JSON.parse(JSON.stringify(blogToEdit))
    } catch (error) {
        handleError(error)
    }
}

export async function deleteBlog(clerkId:string, blogId:string) {
    try {
        await connectToDatabase();
        const blogAuthor = await User.findOne({clerkId})
        if(!blogAuthor) throw new Error("Author not found!")
        if (blogAuthor.blogsAuthored.includes(blogId)) {
            const blogToDelete = await Blog.findByIdAndUpdate({_id: blogId})
            if(!blogToDelete) throw new Error("Blog not found!")
        } else {
            throw new Error("Blog not found in author's published blogs")
        }
        blogAuthor.blogsAuthored.remove(blogId)
        await blogAuthor.save()
        return "Blog deleted successfully"        
    } catch (error) {
        handleError(error)
    }
}

export async function shareBlog(senderId:string, blogId:string, receiverId: string) {
    try {
        await connectToDatabase();
        
    } catch (error) {
        handleError(error)
    }
}

export async function likeBlog(clerkId:string, blogId:string) {
    try {
        await connectToDatabase();
        
    } catch (error) {
        handleError(error)
    }
}

export async function commentOnBlog(clerkId:string, blogId:string, comment: string) {
    try {
        await connectToDatabase();
        const user = await User.findOne({clerkId})
        if(!user) throw new Error("User not found!")
        
        const blog = await Blog.findOne({blogId})
        if(!blog) throw new Error("blog not found!")
        
        blog.comments.append({userId: user._id, comment})
        await blog.save()
    } catch (error) {
        handleError(error)
    }
}

export async function saveBlog(clerkId:string, blogId:string) {
    try {
        await connectToDatabase();
        const user = await User.findOne({clerkId})
        if(!user) throw new Error("User not found!")
        
        const blog = await Blog.findOne({blogId})
        if(!blog) throw new Error("blog not found!")
        
        user.savedBlogs.append(blog._id)
            
    } catch (error) {
        handleError(error)
    }
}
