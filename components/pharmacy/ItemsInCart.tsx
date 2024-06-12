import React from 'react'
import CartItem from './CartItem'

const ItemsInCart = () => {
  return (
    <div className="w-full overflow-clip rounded-lg h-[325px] mb-3 bg-dark-3 py-3 px-2">
    <h2 className='text-xl font-semibold py-1 rounded-lg'>Items In Cart</h2>
    <div className="h-[90%] overflow-y-auto w-full">
      <CartItem/>
      <CartItem/>
      {/* <CartItem/> */}
    </div>
  </div>
  )
}

export default ItemsInCart
