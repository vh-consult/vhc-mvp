import React from 'react'
import { Button } from '../ui/button'
import { CgClose } from 'react-icons/cg'
import Image from 'next/image';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Dialog, 
  DialogContent
} from "@/components/ui/dialog"

interface ShopDrugOverviewProps {
  name: string;
  price: number;
  category?: string;
  description?: string;
  batchID?: string;
  caution?: string;
  imageSrc: string; 
  numberOfStock: number;
  expiryDate?: Date;
  producer?: string;
  onClose: () => void;
  isOpen: boolean
}

const DrugOverview = ({
  name, 
  price, 
  category,
  description,
  batchID,
  caution,
  imageSrc,
  expiryDate,
  numberOfStock,
  producer,
  isOpen,
  onClose
}: ShopDrugOverviewProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-[400px] px-4 py-3 rounded-xl border 
        border-gray-200'>
            <div className="w-full flex justify-between">
              <div className="w-[70%]">
                <h3 className="text-xl font-medium">
                  Batch ID: {batchID}
                </h3>
                <div className="flex justify-between text-sm 
                opacity-75">
                  <span>
                    In stock - {numberOfStock}
                  </span>
                  <span>
                    Expiry date: 
                    {expiryDate && new Date(expiryDate).toLocaleDateString()}
                  </span>
                </div>
                <p>
                  {
                    caution? (
                      <>
                        <p className="text-sm text-red-600 
                        font-medium">
                          {caution}
                        </p>
                      </>
                    ) : null
                  }
                </p>
              </div>
              <CgClose className="w-6 h-6 
              hover:text-red-600"/>
            </div>
            <div className="flex mt-4 items-center 
            justify-between">
              <div className="flex items-center">
                <Image 
                  src={imageSrc} 
                  alt="" 
                  width={100}
                  height={105}
                  className="w-[100px] h-[105px] rounded-lg 
                  object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium">
                    {name}
                  </h4>
                  <p className="">
                    {producer}
                  </p>
                  <p className="text-sm">
                    {category}
                  </p>
                </div>
              </div>
              <span className="font-medium">
                {`$ ${price}.00`}
              </span>
            </div>
            <div className="mt-2">
              {
                description? (
                  <>
                    <h4 className="font-medium text-lg">
                      Description
                    </h4>
                    <p className="text-sm">{description}</p>
                  </>
              ) : null
              }
            </div>
            <div className="my-5">
              <h2 className="text-lg font-medium">
                Order Section
              </h2>
              <div className="flex items-center my-2">
                <span className="mr-6">
                  How many are you buying? 
                </span>
                <span>
                  <Input 
                    className="border outline-none 
                    border-gray-200 rounded-md w-[70px] h-[30px] 
                    p-1 text-sm font-medium"
                    type="number"
                    min={1}
                    max={numberOfStock}
                  />
                </span>
              </div>
              <Textarea 
                className="w-full border h-[100px] p-2 
                rounded-lg border-gray-200 outline-none text-sm" 
                placeholder="Anything we need to know before 
                we assign the doses?"
              />
            </div>
            <div>
                <Button  
                  className="w-full h-[35px] border border-blue 
                  rounded-md my-2 text-sm text-blue font-medium"
                >
                  Add to cart
                </Button>
                <Button  
                  className='w-full h-[35px] bg-blue rounded-md 
                  text-white font-medium text-sm'
                >
                  Buy Now
                </Button>
            </div>
      </DialogContent>
    </Dialog>
  )
}

export default DrugOverview
