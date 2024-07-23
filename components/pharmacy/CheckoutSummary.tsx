import React from 'react'

interface CheckoutSummaryParams {
    subtotalPrice: number,
    shippingFee: number,
    tax: number,
    totalCost: number,
}

const CheckoutSummary = ({subtotalPrice, shippingFee, tax, totalCost}: CheckoutSummaryParams) => {
  return (
    <div className='bg-dark-1 w-[50%] h-[200px] rounded-lg p-2'>
      <h2 className='text-xl font-semibold'>
        Checkout Summary
      </h2>
      <div className="w-full flex flex-col flex-center gap-y-2 h-[60%] border-b border-sky-1">
        <p className='w-full flex flex-between'>
            Subtotal <b>{subtotalPrice}</b>
        </p>
        <p className='w-full flex flex-between'>
            Shipping <b>{shippingFee}</b>
        </p>
        <p className='w-full flex flex-between'>
            Tax <b>{tax}</b>
        </p>
      </div>
      <p className='w-full py-2 flex flex-between'>
            Total ($) <b>{totalCost}</b>
      </p>
    </div>
  )
}

export default CheckoutSummary
