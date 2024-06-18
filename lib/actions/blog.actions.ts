"use server"

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { BlogParams } from "../database/models/blog.model";

export async function createBlog(clerkId:string, blogData:BlogParams) {
    
}

export async function editBlog(clerkId:string, blogData:BlogParams) {
    
}

export async function deleteBlog(clerkId:string, blogId:string) {
    
}

export async function shareBlog(senderId:string, blogId:string, receiverId: string) {
    
}

export async function likeBlog(clerkId:string, blogId:string) {
    
}

export async function commentOnBlog(clerkId:string, blogId:string) {
    
}