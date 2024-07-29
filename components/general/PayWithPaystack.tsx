"use client"
import React from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from '../ui/use-toast';
import { useUser } from '@clerk/nextjs';

const PayWithPaystack = async (
  {amount, items}: 
  {
    amount: number,
    items: string[] | string
  }
) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY as string;

  const {user} = useUser()
  console.log(user)
  const componentProps = {
    email: user?.emailAddresses[0].emailAddress as string,
    amount,
    items,
    metadata: {
      name: user?.fullName,
      phone: user?.phoneNumbers[0].phoneNumber,
      custom_fields: [

      ],
    },
    currency: "GHS",
    publicKey,
    text: 'Buy Now',
    onSuccess: (response:any) => {
      const createOrderPurchase = async () => {
        // const createTransaction = await 
      }
      toast({title:`Your purchase was successful! Transaction reference: ${response.reference}`});
    },
    onClose: () => toast({title: "Order will be terminated"}),
  };

  return (
    <PaystackButton 
        className="w-[96%] mx-auto rounded-lg h-[40px] text-sm font-medium mt-3 bg-green-2" 
        {...componentProps} 
    />
  );
};

export default PayWithPaystack;
