import CheckoutSummary from '@/components/pharmacy/CheckoutSummary'
import DeliveryInfoCard from '@/components/pharmacy/DeliveryInfoCard'
import ItemsInCart from '@/components/pharmacy/ItemsInCart'
import React from 'react'

const CartPage = () => {
  return (
    <div className='pt-20 px-10'>
      <div className="w-[60%] flex flex-col flex-between">
        <ItemsInCart/>
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
    </div>
  )
}

export default CartPage
