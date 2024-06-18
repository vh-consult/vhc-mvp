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

// Define Zod schema
const blogPostSchema = z.object({
  blogTitle: z.string().min(5, 'Please select your purpose on this app'),
  blogType: z.string().min(5, 'Please select your purpose on this app'),
  description: z.string().min(1, 'description is required'),
  author: z.string().min(4, 'Please select author').max(6),
  postCategory: z.string().min(1, 'Please select your postCategory'),
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
    description: '',
    author: '',
    postCategory: '',
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
      <Card className={`relative w-[400px] ${loading ? 'hidden' : ''} border-none bg-dark-1 text-green-1`}>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
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
              <div className="flex flex-col space-y-1.5">
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
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor='description'>Content</Label>
                <Input
                  required
                  id='description'
                  className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) => setValues({ ...values, description: e.target.value })}
                />
                {errors.description && <span className="text-red-500">{errors.description}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="author">author</Label>
                <Select required onValueChange={(value) => setValues({ ...values, author: value })}>
                  <SelectTrigger id="author">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-dark-3 text-green-1'>
                    <SelectItem value=""></SelectItem>
                    <SelectItem value=""></SelectItem>
                  </SelectContent>
                </Select>
                {errors.author && <span className="text-red-500">{errors.author}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
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
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleSubmit}
            className='w-full bg-green-2'
          >
            Activate
          </Button>
        </CardFooter>
      </Card>
      {loading && <Loader />}
    </div>
  )
}

export default CreateBlogPostPage
