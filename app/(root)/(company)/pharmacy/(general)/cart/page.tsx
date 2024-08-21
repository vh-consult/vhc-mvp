import PayWithPaystack from '@/components/general/PayWithPaystack'
import CheckoutSummary from '@/components/pharmacy/CheckoutSummary'
import DeliveryInfoCard from '@/components/pharmacy/DeliveryInfoCard'
import ItemsInCart from '@/components/pharmacy/ItemsInCart'
import ShippingForm from '@/components/pharmacy/ShippingForm'
import { fetchItemsInCart } from '@/lib/actions/order.actions'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const CartPage = async () => {
  const user = await currentUser()
  const cartItems = await fetchItemsInCart(user?.id as string)
  return (
    <div className='py-3 px-10 flex justify-between'>
      <div className="w-[67%] flex flex-col flex-between">
        <ItemsInCart items={cartItems}/>
        <div className="w-full flex flex-between gap-4">
          <CheckoutSummary
            shippingFee={3}
            subtotalPrice={2}
            tax={3}
            totalCost={12}
          />
          <DeliveryInfoCard/>
        </div>
      </div>
      <div className=" w-[30%]">
        {/* <PayWithPaystack amount={12}/> */}
        <ShippingForm/>
      </div>
    </div>
  )
}

export default CartPage
