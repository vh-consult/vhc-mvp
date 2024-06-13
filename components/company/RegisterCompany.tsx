import React from 'react'
import { Input } from '../ui/input';
import SubmitButton from '../SubmitButton';
import { 
  Select, SelectContent, 
  SelectItem, SelectTrigger, SelectValue 
} from '../ui/select';
import { currentUser } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/actions/user.actions';
import { Textarea } from '../ui/textarea';
import { CompanyProps, createCompany } from '@/lib/actions/company.actions';
import { toast } from '../ui/use-toast';
import { redirect } from 'next/navigation';

const RegisterCompany = async () => {
  let userRole
  let companyData:CompanyProps
  const handleSubmit = async (formData: FormData) => {
    "use server"
    const user = await currentUser();
    if (!user) {
      throw new Error('User not logged in')
    }
    const userFromDB: UserParams = await getUserById(user?.id as string)
    userRole = userFromDB.role


    if ( userRole === "patient" 
      || userRole === "doctor"
    ) {
      companyData = {
        name: formData.get("name") as string,
        location: formData.get("location") as string,
        image: formData.get("image") as string,
        type: formData.get("type") as "pharmacy" | "hospital"
        }
      } else if (userRole === "hospitalAdmin") {
        companyData = {
          name: formData.get("name") as string,
          location: formData.get("location") as string,
          image: formData.get("image") as string,
          type: "hospital"
          }
      }else if (userRole === "pharmacyAdmin") {
        companyData = {
          name: formData.get("name") as string,
          location: formData.get("location") as string,
          image: formData.get("image") as string,
          type: "pharmacy"
          }
      }
      const company = await createCompany(user?.id, companyData)
      toast({title: 'Company setup successful'})
      redirect(`/company/${company?.id}/home`)
    
  }
  return (
    <form
      action={handleSubmit}
      className='p-3 w-[500px] flex flex-col gap-5 h-[450px] bg-dark-1 text-sky-3'
    >
      <h1 className="text-2xl font-semibold">Company Registration Form</h1>
      <Input
        type='file'
        placeholder='Add image'
        name='image'
        className='border-sky-1 bg-dark-3 '
      />
      <Input
        type='text'
        placeholder='Add name'
        name='name'
        className='border-none bg-dark-3 text-sky-1'

      />
      <Input
        type='text'
        placeholder='Add location'
        name='location'
        className='border-none bg-dark-3 text-sky-1'

      />
      <Textarea
        placeholder='Add description'
        name='location'
        className='border-none bg-dark-3 text-sky-1'

      />
      {  userRole === "patient" || userRole === "doctor"?
        (<Select name="type">
        <SelectTrigger id="companyType">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper" className='bg-dark-3  text-sky-2'>
          <SelectItem  value="pharmacy">Pharmacy</SelectItem>
          <SelectItem value="hospital">Hospital</SelectItem>
        </SelectContent>
      </Select>) : ``
      }
      <SubmitButton
        className='bg-green-2 text-white w-full'
        buttonText='Create Company'
      />
    </form>
  )
}

export default RegisterCompany
