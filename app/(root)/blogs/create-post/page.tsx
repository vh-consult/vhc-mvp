"use client"
import Loader from '@/components/general/Loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUser } from '@clerk/nextjs'
import React, { FormEvent, useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea'
import { createBlog } from '@/lib/actions/blog.actions'
import { SingleImageDropzone } from '@/components/general/SingleImageDropzone'
import { useEdgeStore } from '@/lib/edgestore';

// Define Zod schema
const blogPostSchema = z.object({
  title: z.string().min(1, 'Add blog title'),
  introduction: z.string().min(1, 'intro is required').optional(),
  content: z.string().min(1, 'content is required'),
  conclusion: z.string().min(1, 'conclusion is required').optional(),
  coverImage: z.string()
});

// Define type for form values
type FormValues = z.infer<typeof blogPostSchema>;


const CreateBlogPostPage = () => {

  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [file, setFile] = useState<File>()
  const {edgestore} = useEdgeStore()

  const initialValues: FormValues = {
    title: '',
    introduction: '',
    content: '',
    conclusion: '',
    coverImage: ''
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return;

    setLoading(true);
    try {
      let imageUrl
      if (file) {
        const res = await edgestore.myPublicImages.upload({file})
        console.log(res)
       imageUrl = res.url
      }
      const newBlog = await createBlog(
        user?.id as string, {...values, coverImage: imageUrl}
      )
      router.push(`/blogs/${newBlog._id}`)
    } finally {
      setLoading(false);
    }
  };


  return (
  <form className='bg-white p-4 rounded-lg min-h-screen w-[600px] mx-auto py-5 flex flex-col'>
    <h1 className="text-xl font-medium">Create Post</h1>
    <div className="grid w-full items-center gap-4">
      <SingleImageDropzone
        width={300}
        height={150}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
        className='mx-auto'
      />
      <div className="flex w-full flex-col gap-2.5">
        <Label className="text-base font-normal leading-[22.4px] text-green-1">
          Title
        </Label>
        <Input
          className="w-full rounded bg-green-1 p-2 focus:outline-none"
          onChange={(e) => setValues({...values, title: e.target.value})}
        />
        {errors.title && <span className="text-red-500">{errors.title}</span>}
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor='introduction'>Introduction</Label>
        <Textarea
          id='introduction'
          className=" bg-green-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setValues({ ...values, introduction: e.target.value })}
        />
        {errors.introduction && <span className="text-red-500">{errors.introduction}</span>}
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor='content'>content</Label>
        <Textarea
          id='content'
          className=" bg-green-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setValues({ ...values, content: e.target.value })}
        />
        {errors.content && <span className="text-red-500">{errors.content}</span>}
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor='conclusion'>conclusion</Label>
        <Textarea
          id='conclusion'
          className=" bg-green-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setValues({ ...values, conclusion: e.target.value })}
        />
        {errors.conclusion && <span className="text-red-500">{errors.conclusion}</span>}
      </div>
    </div>
  <Button
    onClick={handleSubmit}
    className='w-full bg-green-2 mt-4 text-green-1'
  >
      {loading? <Loader />: `Post Blog`}
  </Button>
  </form>
  )
}

export default CreateBlogPostPage
