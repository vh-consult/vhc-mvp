"use client"
import React, { useState, ChangeEvent } from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from '../ui/use-toast';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const PayWithPaystack = ({amount}: {amount: number}) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY as string;
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
      custom_fields: [
        {
          display_name: 'Name',
          variable_name: 'name',
          value: name,
        },
        {
          display_name: 'Phone',
          variable_name: 'phone',
          value: phone,
        },
      ],
    },
    currency: "GHS",
    publicKey,
    text: 'Buy Now',
    onSuccess: (response:any) => {
      toast({title:`Your purchase was successful! Transaction reference: ${response.reference}`});
      resetForm();
    },
    onClose: () => toast({title: "Don't you wanna purchase it again? :("}),
  };

  return (
    <div className="w-[350px] py-4 rounded-lg mb-4 bg-dark-1 flex flex-col flex-between">
    <div className="w-[90%]">
        <Input
            className="border-none bg-dark-3 my-2"
            placeholder="Name"
            type="text"
            id="name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
    </div>
    <div className="w-[90%]">
        <Input
            className="border-none bg-dark-3 my-2"
            placeholder="Email"
            type="text"
            id="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
    </div>
    <div className="w-[90%]">
        <Input
            className="border-none bg-dark-3 my-2"
            placeholder="Phone"
            type="text"
            id="phone"
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        />
    </div>
    <PaystackButton 
        className="w-[90%] rounded-lg h-[40px] text-sm font-medium mt-3 bg-green-2" 
        {...componentProps} 
    />
    </div>
  );
};

export default PayWithPaystack;
