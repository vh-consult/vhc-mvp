"use client"
import React from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from '../ui/use-toast';

import { useUserStore } from '@/stores/user-store';

const PayWithPaystack = (
  {amount}: 
  {
    amount: number
  }
) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY as string;

  const {user} = useUserStore()



  const componentProps = {
    email: user?.email as string,
    amount: amount * 100,
    metadata: {
      name: user?.firstName as string + user?.lastName,
      // phone: user?.,
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
            className="w-full mx-auto rounded-lg h-[40px] text-sm font-medium text-secondary mt-3 bg-accent" 
            {...componentProps} 
        />
  );
};

export default PayWithPaystack;
