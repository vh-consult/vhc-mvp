"use client"
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea'

// Define Zod schema
const blogPostSchema = z.object({
  blogTitle: z.string().min(5, 'Please select your purpose on this app'),
  blogType: z.string().min(5, 'Please select your purpose on this app'),
  introduction: z.string().min(1, 'intro is required'),
  content: z.string().min(1, 'content is required'),
  conclusion: z.string().min(1, 'conclusion is required'),
  author: z.string().min(4, 'Please select author').max(6),
  postCategory: z.string().min(1, 'Please select your postCategory'),
  coverImage: z.any()
});

// Define type for form values
type FormValues = z.infer<typeof blogPostSchema>;


const CreateBlogPostPage = () => {

  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const initialValues: FormValues = {
    blogTitle: '',
    blogType: '',
    introduction: '',
    content: '',
    conclusion: '',
    author: '',
    postCategory: '',
    coverImage: File
  };

  const [values, setValues] = useState<FormValues>(initialValues);

  const validateForm = (): boolean => {
    try {
      blogPostSchema.parse(values);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors: Partial<Record<keyof FormValues, string>> = err.errors.reduce(
          (acc, curr) => {
            if (curr.path.length > 0 && typeof curr.path[0] === 'string') {
              acc[curr.path[0] as keyof FormValues] = curr.message;
            }
            return acc;
          },
          {} as Partial<Record<keyof FormValues, string>>
        );
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {

    } finally {
      setLoading(false);
    }
  };


  return (
<div className='bg-dark-2 min-h-screen w-full py-5 flex flex-center'>
          <form>
            <h1 className="text-xl font-medium">Create Post</h1>
            <div className="grid w-full items-center gap-4">
              <div className="flex w-full flex-col gap-2.5">
                <Label className="text-base font-normal leading-[22.4px] text-green-1">
                  Title
                </Label>
                <Input
                  className="w-full rounded bg-dark-3 p-2 focus:outline-none"
                />
                {errors.blogTitle && <span className="text-red-500">{errors.blogTitle}</span>}
              </div>
              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="postCategory">postCategory</Label>
                <Select required onValueChange={(value) => setValues({ ...values, postCategory: value })}>
                  <SelectTrigger id="postCategory">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-dark-3 text-green-1'>
                    <SelectItem value=""></SelectItem>
                    <SelectItem value=""></SelectItem>
                    <SelectItem value=""></SelectItem>
                    <SelectItem value=""></SelectItem>
                    <SelectItem value=""></SelectItem>
                  </SelectContent>
                </Select>
                {errors.postCategory && <span className="text-red-500">{errors.postCategory}</span>}
              </div> */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor='introduction'>Introduction</Label>
                <Textarea
                  id='introduction'
                  className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) => setValues({ ...values, introduction: e.target.value })}
                />
                {errors.introduction && <span className="text-red-500">{errors.introduction}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor='content'>content</Label>
                <Textarea
                  id='content'
                  className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) => setValues({ ...values, content: e.target.value })}
                />
                {errors.content && <span className="text-red-500">{errors.content}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor='conclusion'>conclusion</Label>
                <Textarea
                  id='conclusion'
                  className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) => setValues({ ...values, conclusion: e.target.value })}
                />
                {errors.conclusion && <span className="text-red-500">{errors.conclusion}</span>}
              </div>
              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="blogType">What are you?</Label>
                <Select required onValueChange={(value) => setValues({ ...values, blogType: value })}>
                  <SelectTrigger id="blogType">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-dark-3 text-green-1'>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="hospitalAdmin">Hospital Admin</SelectItem>
                    <SelectItem value="pharmacyAdmin">Pharmacy Admin</SelectItem>
                  </SelectContent>
                </Select>
                {errors.blogType && <span className="text-red-500">{errors.blogType}</span>}
              </div> */}
            </div>
          </form>
          <Button
            onClick={handleSubmit}
            className='w-full bg-green-2'
          >
             {loading? <Loader />: `Upload Content`}
          </Button>      
    </div>
  )
}

export default CreateBlogPostPage
