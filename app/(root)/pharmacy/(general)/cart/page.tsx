import CartItem from '@/components/pharmacy/CartItem'
import CheckoutSummary from '@/components/pharmacy/CheckoutSummary'
import DeliveryInfoCard from '@/components/pharmacy/DeliveryInfoCard'
import React from 'react'

const CartPage = () => {
  return (
    <div className='pt-20'>
      <div className="">
        <h2>Items In Cart</h2>
        <CartItem/>
      </div>
      <div className="flex gap-4">
        <CheckoutSummary
          shippingFee={3}
          subtotalPrice={2}
          tax={3}
          totalCost={12}
        />
        <DeliveryInfoCard/>
      </div>
    </div>
  )
}

export default CartPage
