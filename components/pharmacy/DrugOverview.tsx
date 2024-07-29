import React, { ChangeEvent } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Dialog, 
  DialogContent
} from "@/components/ui/dialog"
import PayWithPaystack from '../general/PayWithPaystack';

interface DrugProps {
  _id: string;
  name: string;
  price: number;
  category?: string;
  description?: string;
  batchID?: string;
  caution?: string;
  image: string; 
  quantity: number;
  expiryDate?: Date;
  producer?: string; 
}

interface ShopDrugOverviewProps {

  shopId: string;
  drug: DrugProps;
  onClose: () => void;
  isOpen: boolean
}


const DrugOverview = async ({
  drug,
  shopId,
  isOpen,
  onClose
}: ShopDrugOverviewProps) => {
  const handleAddToCart = async (e: ChangeEvent) => {
    e.preventDefault()
    alert("nothing")
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-[400px] px-4 py-3 rounded-xl 
         bg-dark-1 text-green-1 border-none'>
          <form action="handleAddToCart">
            <div className="w-full flex justify-between">
              <div className="w-[70%]">
                <h3 className="text-xl font-medium">
                  Batch ID: {drug?.batchID}
                </h3>
                <div className="flex justify-between text-sm 
                opacity-75">
                  <span>
                    In stock - {drug?.quantity}
                  </span>
                  <span>
                    Expiry date: 
                    {drug?.expiryDate && new Date(drug?.expiryDate).toLocaleDateString()}
                  </span>
                </div>
                <p>
                  {drug?.
                    caution? (
                      <>
                        <p className="text-sm text-red-600 
                        font-medium">
                          {drug?.caution}
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
                  src={drug?.image} 
                  alt="" 
                  width={100}
                  height={105}
                  className="w-[100px] h-[105px] rounded-lg 
                  object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium">
                    {drug?.name}
                  </h4>
                  <p className="">
                    {drug?.producer}
                  </p>
                  <p className="text-sm">
                    {drug?.category}
                  </p>
                </div>
              </div>
              <span className="font-medium">
                {`$ ${drug?.price}.00`}
              </span>
            </div>
            <div className="mt-2">
              {
                drug?.description? (
                  <>
                    <h4 className="font-medium text-lg">
                      Description
                    </h4>
                    <p className="text-sm">{drug?.description}</p>
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
                    max={drug?.quantity}
                    name='orderQuantity'
                  />
                </span>
              </div>
              <Textarea 
                className="w-full h-[100px] p-2 
                rounded-lg bg-dark-3 outline-none text-sm" 
                placeholder="Anything we need to know before 
                we assign the doses?"
                name='notes'
              />
            </div>
            <div>
                <Button  
                  type='submit'
                  className="w-full h-[35px] border border-green-2 
                  rounded-md  text-sm text-green-2 font-medium"
                >
                  Add to cart
                </Button>
                <PayWithPaystack amount={drug?.price} items={[drug?._id]}/>
            </div>
          </form>
      </DialogContent>
    </Dialog>
  )
}

export default DrugOverview
