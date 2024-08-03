"use client"
import React from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from '../ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { placeOrder } from '@/lib/actions/order.actions';

const PayWithPaystack = (
  {data}: 
  {
    data: any
  }
) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY as string;

  const {user} = useUser()

  const createOrer = async (referenceNumber: string) => {
    try {
      const newOrder = await placeOrder(user?.id!, data.drug, data.shop, referenceNumber)
      toast({title: "Item purchased successfully"})
      
    } catch (error) {
      toast({title: "Order placement not successful"})
    }
  }

  const componentProps = {
    email: user?.emailAddresses[0].emailAddress as string,
    amount: data.amount,
    metadata: {
      name: user?.fullName,
      phone: user?.phoneNumbers[0].phoneNumber,
      custom_fields: [],
    },
    currency: "GHS",
    publicKey,
    text: 'Buy Now',
    onSuccess: async (response:any) => {
      await createOrer(response.reference)
    },
    onClose: () => toast({title: "Order will be terminated"}),
  };

  return (
    <PaystackButton 
        className="w-full mx-auto rounded-lg h-[40px] text-sm font-medium mt-3 bg-green-2" 
        {...componentProps} 
    />
  );
};

export default PayWithPaystack;
