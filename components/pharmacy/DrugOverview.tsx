// "use client"
// import React, { useState } from 'react'
// import { Button } from '../ui/button'
// import Image from 'next/image';
// import { Input } from '../ui/input';
// import { Textarea } from '../ui/textarea';
// import {
//   Dialog, 
//   DialogContent
// } from "@/components/ui/dialog"
// import PayWithPaystack from '../general/PayWithPaystack';
// import { addToCart, OrderData, placeOrder } from '@/lib/actions/order.actions';
// import { useUser } from '@clerk/nextjs';
// import { toast } from '../ui/use-toast';


// interface DrugProps {
//   _id: string;
//   name: string;
//   price: number;
//   category?: string;
//   description?: string;
//   batchID?: string;
//   caution?: string;
//   image: string; 
//   quantity: number;
//   expiryDate?: Date;
//   producer?: string; 
// }


// interface ShopDrugOverviewProps {
//   shopId: string;
//   drug: DrugProps;
//   onClose: () => void;
//   isOpen: boolean
// }

// const DrugOverview = ({
//   drug,
//   shopId,
//   isOpen,
//   onClose
// }: ShopDrugOverviewProps) => {
//   const {user} = useUser()
//   const initialFieldValues = {
//     note: '',
//     quantity: 1,
//     amount: drug?.price,
//     shop: shopId,
//     item: drug._id,
//     buyer: user?.id as string
//   }
//   const [values, setValues] = useState<OrderData>(initialFieldValues)
//   values.amount = drug?.price * values.quantity
//   const createOrder =  async () => {
//     try {
//       const newOrder = await placeOrder(user?.id!, values)
//       console.log(newOrder)
      
//     } catch (error) {
//       toast({title: "Order placement not successful"})
//     }
//   }
//   const handleCartAddition = async () => {
//     const event = await addToCart(user?.id!, drug?._id)
//     toast({title: 'Item added to cart'})
//   }
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className='w-[400px] px-4 py-3 rounded-xl 
//          bg-dark-1 text-green-1 border-none'>
//             <div className="w-full flex justify-between">
//               <div className="w-[70%]">
//                 <h3 className="text-xl font-medium">
//                   Batch ID: {drug?.batchID}
//                 </h3>
//                 <div className="flex justify-between text-sm 
//                 opacity-75">
//                   <span>
//                     In stock - {drug?.quantity}
//                   </span>
//                   <span>
//                     Expiry date: 
//                     {drug?.expiryDate && new Date(drug?.expiryDate).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <p>
//                   {drug?.
//                     caution? (
//                       <>
//                         <p className="text-sm text-red-600 
//                         font-medium">
//                           {drug?.caution}
//                         </p>
//                       </>
//                     ) : null
//                   }
//                 </p>
//               </div>
//             </div>
//             <div className="flex mt-4 items-center 
//             justify-between">
//               <div className="flex items-center">
//                 <Image 
//                   src={drug?.image} 
//                   alt="" 
//                   width={100}
//                   height={105}
//                   className="w-[100px] h-[105px] rounded-lg 
//                   object-cover"
//                 />
//                 <div className="ml-4">
//                   <h4 className="text-lg font-medium">
//                     {drug?.name}
//                   </h4>
//                   <p className="">
//                     {drug?.producer}
//                   </p>
//                   <p className="text-sm">
//                     {drug?.category}
//                   </p>
//                 </div>
//               </div>
//               <span className="font-medium">
//                 {`$ ${drug?.price}.00`}
//               </span>
//             </div>
//             <div className="mt-2">
//               {
//                 drug?.description? (
//                   <>
//                     <h4 className="font-medium text-lg">
//                       Description
//                     </h4>
//                     <p className="text-sm">{drug?.description}</p>
//                   </>
//               ) : null
//               }
//             </div>
//             <div className="my-5">
//               <h2 className="text-lg font-medium">
//                 Order Section
//               </h2>
//               <div className="flex flex-between my-2">
//                 <span className="">
//                   How many are you buying? 
//                 </span>
//                 <span>
//                   <Input 
//                     className="outline-none 
//                     bg-dark-3 rounded-md w-[70px] h-[30px] 
//                     p-1 text-sm font-medium focus-visible:ring-0"
//                     type="number"
//                     min={1}
//                     max={drug?.quantity}
//                     defaultValue={1}
//                     onChange={(e) => setValues({...values, quantity: parseInt(e.target.value)})}
//                   />
//                 </span>
//               </div>
//               <Textarea 
//                 className="w-full h-[100px] p-2 
//                 rounded-lg bg-dark-3 outline-none text-sm" 
//                 placeholder="Anything we need to know before 
//                 we assign the doses?"
//                 onChange={(e) => setValues({...values, note: e.target.value})}
//               />
//             </div>
//             <div>
//                 <Button  
//                   className="w-full h-[35px] border border-green-2 
//                   rounded-md  text-sm text-green-2 font-medium"
//                   onClick={handleCartAddition}
//                 >
//                   Add to cart
//                 </Button>
//                 <div className="">

//                 </div>
//                 <PayWithPaystack amount={values.amount}/>
//             </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default DrugOverview

"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Dialog, 
  DialogContent
} from "@/components/ui/dialog"
import PayWithPaystack from '../general/PayWithPaystack';
import { addToCart, OrderData, placeOrder } from '@/lib/actions/order.actions';
import { useUser } from '@clerk/nextjs';
import { toast } from '../ui/use-toast';

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

const DrugOverview = ({
  drug,
  shopId,
  isOpen,
  onClose
}: ShopDrugOverviewProps) => {
  const { user } = useUser()
  const initialFieldValues = {
    note: '',
    quantity: 1,
    amount: drug?.price,
    shop: shopId,
    item: drug._id,
    buyer: user?.id as string
  }
  const [values, setValues] = useState<OrderData>(initialFieldValues)
  const [isOrderCreated, setIsOrderCreated] = useState(false)

  values.amount = drug?.price * values.quantity

  const createOrder = async () => {
    try {
      const newOrder = await placeOrder(user?.id!, values)
      console.log(newOrder)
      setIsOrderCreated(true)
      toast({title: "Order placed successfully"})
    } catch (error) {
      toast({title: "Order placement not successful"})
    }
  }

  const handleCartAddition = async () => {
    const event = await addToCart(user?.id!, drug?._id)
    toast({title: 'Item added to cart'})
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-[400px] px-4 py-3 rounded-xl 
         bg-dark-1 text-green-1 border-none'>
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
              {drug?.caution ? (
                <p className="text-sm text-red-600 
                font-medium">
                  {drug?.caution}
                </p>
              ) : null}
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
          {drug?.description ? (
            <>
              <h4 className="font-medium text-lg">
                Description
              </h4>
              <p className="text-sm">{drug?.description}</p>
            </>
          ) : null}
        </div>
        <div className="my-3">
          <h2 className="text-lg font-medium">
            Order Section
          </h2>
          <div className="flex flex-between my-2">
            <span className="">
              How many are you buying? 
            </span>
            <span>
              <Input 
                className="border-none 
                bg-dark-3 rounded-md w-[150px] h-[35px] 
                p-1 text-sm font-medium focus-visible:ring-0"
                type="number"
                min={1}
                max={drug?.quantity}
                defaultValue={1}
                onChange={(e) => setValues({...values, quantity: parseInt(e.target.value)})}
              />
            </span>
          </div>
          <Textarea 
            className="w-full h-[100px] p-2 
            rounded-lg bg-dark-3 border-none text-sm" 
            placeholder="Anything we need to know before 
            we assign the doses?"
            onChange={(e) => setValues({...values, note: e.target.value})}
          />
        </div>
        <div>
          <Button  
            className="w-full h-[35px] border border-green-2 
            rounded-md  text-sm text-green-2 font-medium"
            onClick={handleCartAddition}
          >
            Add to cart
          </Button>
          <div className="">
            {isOrderCreated === false? (
            <Button
              className="w-full h-[35px] bg-green-2 
              rounded-md  text-sm text-green-1 font-medium"
              onClick={createOrder}
            >
              Create Order
            </Button>) :(
              <div className="">
              <PayWithPaystack amount={values.amount}/>
            </div>
          )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DrugOverview
