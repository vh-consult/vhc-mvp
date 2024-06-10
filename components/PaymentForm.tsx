import React from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';

type PaymentFormProps = {
    amount: number;
}

const paymentMethods = [
    {
        label: 'MTN Mobile Money',
        imageSrc: '/assets/images/drug 4.jpg'

    },
    {
        label: 'AT Money',
        imageSrc: '/assets/images/drug 4.jpg'

    },
    {
        label: 'Telecel Cash',
        imageSrc: '/assets/images/drug 4.jpg'

    },
    {
        label: 'Debit Card',
        imageSrc: '/assets/images/drug 4.jpg'
    },
]

const PaymentForm = ({
    amount,
}: PaymentFormProps) => {
  return (
    <div className='p-3 rounded-lg border w-[325px] bg-white'>
        <h2 className='w-full text-lg font-medium mb-2'>Select Your Preferred Payment Method</h2>
        {
            paymentMethods.map((method, index) => {
                return(
                    <div key={index} className='flex justify-between mb-1'>
                        <div className='flex items-center'>
                            <Input 
                                type='radio'
                                value={method.label}
                                name='paymentMethod'
                                className='w-4 h-4 mr-2 rounded-full border'
                            />
                            <label htmlFor={method.label}>
                                {method.label}
                            </label>
                        </div>
                        <Image 
                            alt='' 
                            width={45}
                            height={45}
                            src={method.imageSrc} 
                            className='w-[45px] h-[24px] object-cover'
                        />
                    </div>
                )
            })
        }
        <div className='w-full mt-4'>
            <Input 
                type='text' 
                className='w-full border mb-2' 
                placeholder='Enter phone number'
            />
        </div>
        <div className='w-full flex flex-row 
        items-center py-1 justify-between'>
            <span className='font-medium 
            text-sm opacity-75'>
                Amount
            </span>
            <span className='font-medium text-sm'>
                ${amount}.00
            </span>
        </div>
        <Button 
            className={`bg-blue-1 w-full h-[35px] rounded-md text-sm 
            font-medium text-white hover:shadow-md hover:opacity-90`}>
                Pay now!
        </Button>
    </div>
  )
}

export default PaymentForm