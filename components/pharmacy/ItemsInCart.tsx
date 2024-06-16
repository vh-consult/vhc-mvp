import React from 'react'
import List from './List'
import { BiTrash } from 'react-icons/bi'

const ItemsInCart = () => {
  return (
    <div className="w-full overflow-clip rounded-lg h-[325px] mb-3 bg-dark-1 py-3 px-2">
    <h2 className='text-xl font-semibold py-1 rounded-lg'>Items In Cart</h2>
    <div className="h-[90%] overflow-y-auto w-full">
    <List
      imageSrc='/images/drug 4.jpg'
      title='Face Serum'
      subtitle='Beauty & Cosmetics'
      descriptionBelowSubtitle='For treating pimpls and acnes'
      parts={[{data: '$27.50'},{data: '2'}]}
      icons={[{icon: <BiTrash/>, action: ()=>{}}]}
    />
    </div>
  </div>
  )
}

export default ItemsInCart
