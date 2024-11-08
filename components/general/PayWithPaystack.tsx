"use client"
import React from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from '../ui/use-toast';
import { placeOrder } from '@/lib/actions/order.actions';
import { useUser } from '@/hooks/useUser';

const PayWithPaystack = (
  {amount}: 
  {
    amount: number
  }
) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY as string;

  const {user} = useUser()



  const componentProps = {
    email: user?.emailAddress as string,
    amount: amount * 100,
    metadata: {
      name: user?.firstName + user?.lastName,
      phone: user?.phoneNumber,
      custom_fields: [],
    },
    currency: "GHS",
    publicKey,
    text: 'Pay Now',
    onSuccess: (response:any) => {
      toast({title: "Item purchased successfully"})
    },
    onClose: () => toast({title: "Purchase will be terminated"}),
  };

  return (

        <PaystackButton 
            className="w-full mx-auto rounded-lg h-[40px] text-sm font-medium text-green-1 mt-3 bg-green-2" 
            {...componentProps} 
        />
  );
};

export default PayWithPaystack;
