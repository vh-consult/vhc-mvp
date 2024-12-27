"use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Blog, { BlogParams } from "../database/models/blog.model";
import User from "../database/models/user.model";
import { WriteStream } from "fs";
import { File } from "buffer";

interface BlogDataParams {
    title: string;
    introduction?: string;
    content: string;
    conclusion?: string;
    coverImage?: string
}

export async function createBlog(id:string, blogData:BlogDataParams) {
    try {
        await connectToDatabase();
        const author = await User.findById({id})
        if (!author) throw new Error("user not found")
        
        const newBlog = await Blog.create(blogData)
        author.blogsAuthored.push(newBlog._id)
        await author.save()
        newBlog.author = author._id
        await newBlog.save()

        return JSON.parse(JSON.stringify(newBlog))

    } catch (error) {
        handleError(error)
    }
}

export async function getAllBlogs() {
    try {
        await connectToDatabase();
        const blogs = await Blog.find().populate("author")
        return JSON.parse(JSON.stringify(blogs))
    } catch (error) {
        handleError(error)
    }
}

export async function getBlogById(blogId:string) {
    try {
        await connectToDatabase();
        // console.log(blogId)
        const blog:BlogParams|any = await Blog.findById(blogId).populate("author")
        if(!blog) throw new Error("Blog not found!")
        const authorName = blog.author.firstName + ' ' + blog.author.lastName
        const authorImage = blog.author.photo

        const blogData = {
            authorImage: authorImage,
            authorName: authorName,
            title: blog.title,
            introduction: blog.introduction,
            content: blog.content,
            conclusion: blog.conclusion,
            coverImg: blog.coverImage,
            datePublished: blog.createdAt
        }
        // console.log(blogData)
        return JSON.parse(JSON.stringify(blogData))
    } catch (error) {
        handleError(error)
    }
}

export async function editBlog(id:string, blogId:string, blogData:BlogParams) {
    try {
        await connectToDatabase();
        const blogAuthor = await User.findById({id})
        if(!blogAuthor) throw new Error("Author not found!")
        let blogToEdit
        if (blogAuthor.blogsAuthored.includes(blogId)) {
            blogToEdit = await Blog.findByIdAndUpdate(
                blogId, {blogData}, {new: true}
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

export async function deleteBlog(id:string, blogId:string) {
    try {
        await connectToDatabase();
        const blogAuthor = await User.findById({id})
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
        const sender = await User.findOne({id: senderId})
        if(!sender) throw new Error("sender not found!")
        
        const receiver = await User.findOne({id: receiverId})
        if(!receiver) throw new Error("receiver not found!")
        
            
        const blog = await Blog.findOne({blogId})
        if(!blog) throw new Error("blog not found!")
                
        receiver.savedBlogs.push(blog._id)
        await receiver.save()

        blog.shares += 1
        await blog.save()

        return blog.shares
    } catch (error) {
        handleError(error)
    }
}

export async function likeBlog(id:string, blogId:string) {
    try {
        await connectToDatabase();
        const user = await User.findById({id})
        if(!user) throw new Error("User not found!")
        
        const blog = await Blog.findOne({blogId})
        if(!blog) throw new Error("blog not found!")
            
        blog.likes += 1
        await blog.save()

        return blog.likes
    } catch (error) {
        handleError(error)
    }
}

export async function commentOnBlog(id:string, blogId:string, comment: string) {
    try {
        await connectToDatabase();
        const user = await User.findById({id})
        if(!user) throw new Error("User not found!")
        
        const blog = await Blog.findOne({blogId})
        if(!blog) throw new Error("blog not found!")
        
        blog.comments.push({userId: user._id, comment})
        await blog.save()
    } catch (error) {
        handleError(error)
    }
}

export async function saveBlog(id:string, blogId:string) {
    try {
        await connectToDatabase();
        const user = await User.findById({id})
        if(!user) throw new Error("User not found!")
        
        const blog = await Blog.findOne({blogId})
        if(!blog) throw new Error("blog not found!")
        
        user.savedBlogs.push(blog._id)
        await user.save()

        return "Blog saved"
            
    } catch (error) {
        handleError(error)
    }
}
