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
      <DialogContent className='w-[400px] px-4 py-3 rounded-xl 
         bg-dark-1 text-green-1'>
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
              <div className="flex flex-between my-2">
                <span className="">
                  How many are you buying? 
                </span>
                <span>
                  <Input 
                    className="outline-none 
                    bg-dark-3 rounded-md w-[70px] h-[30px] 
                    p-1 text-sm font-medium focus-visible:ring-0"
                    type="number"
                    min={1}
                    max={numberOfStock}
                  />
                </span>
              </div>
              <Textarea 
                className="w-full h-[100px] p-2 
                rounded-lg bg-dark-3 outline-none text-sm" 
                placeholder="Anything we need to know before 
                we assign the doses?"
              />
            </div>
            <div>
                <Button  
                  className="w-full h-[35px] border border-green-2 
                  rounded-md my-2 text-sm text-green-2 font-medium"
                >
                  Add to cart
                </Button>
                <Button  
                  className='w-full h-[35px] bg-green-2 rounded-md 
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
