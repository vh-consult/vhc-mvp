import React from 'react'

interface CheckoutSummaryParams {
    subtotalPrice: number,
    shippingFee: number,
    tax: number,
    totalCost: number,
}

const CheckoutSummary = ({subtotalPrice, shippingFee, tax, totalCost}: CheckoutSummaryParams) => {
  return (
    <div>
      <h2 className=''>
        Checkout Summary
      </h2>
      <div className="">
        <p>
            Subtotal <b>{subtotalPrice}</b>
        </p>
        <p>
            Shipping <b>{shippingFee}</b>
        </p>
        <p>
            Tax <b>{tax}</b>
        </p>
      </div>
      <p>
            Total ($) <b>{totalCost}</b>
    </p>
    </div>
  )
}

export default CheckoutSummary
