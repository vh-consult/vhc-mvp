"use client"
import React from 'react'
import List from '../general/List'
import { BiTrash } from 'react-icons/bi'

const ItemsInCart = ({items}:{items:any[]}) => {
  return (
    <div className="w-full overflow-clip rounded-lg h-[325px] mb-3 bg-white py-3 px-2">
    <h2 className='text-xl font-semibold py-1 rounded-lg'>Items In Cart</h2>
    <div className="text-sm opacity-50 grid grid-cols-5 text-center ">
      <span className="col-span-2 ml-[-70px]">Drug</span>
      <span className="ml-[-30px]">Price</span>
      <span className="ml-[30px]">Quantity</span>
      <span className="w-8"></span>
    </div>
    <div className="h-[90%] overflow-y-auto w-full">
      {
        items.length > 0 ? ( items.map((item, index)=> (
          <List
            key={index}
            imageSrc={item.image}
            title={item.name}
            subtitle={item.catalog}
            descriptionBelowSubtitle={item.description}
            parts={[{data: item.price},{data: item.quantity}]}
            icons={[{icon: <BiTrash/>, action: ()=>{}}]}
          />
        ))
        ): (<span>No items in cart</span>)
      }
    </div>
  </div>
  )
}

export default ItemsInCart
