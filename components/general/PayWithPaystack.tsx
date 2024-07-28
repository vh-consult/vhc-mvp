import React from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from '../ui/use-toast';
import { currentUser } from '@clerk/nextjs/server';

const PayWithPaystack = async (
  {amount}: 
  {
    amount: number,
  }
) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY as string;

  const user = await currentUser()

  const componentProps = {
    email: user?.emailAddresses[0] as any,
    amount,
    metadata: {
      name: user?.fullName,
      phone: user?.phoneNumbers[0],
      custom_fields: [

      ],
    },
    currency: "GHS",
    publicKey,
    text: 'Buy Now',
    onSuccess: (response:any) => {
      toast({title:`Your purchase was successful! Transaction reference: ${response.reference}`});
    },
    onClose: () => toast({title: "Don't you wanna purchase it again? :("}),
  };

  return (
    <PaystackButton 
        className="w-[96%] mx-auto rounded-lg h-[40px] text-sm font-medium mt-3 bg-green-2" 
        {...componentProps} 
    />
  );
};

export default PayWithPaystack;
