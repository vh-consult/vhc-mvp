import  OrderCard from '@/components/pharmacy/OrderCard'
import React from 'react'

const results = [
  {
    buyer: {firstName: 'Samuel', lastname: 'Inkoom'},
    deliveryStatus: 'Not delivered',
    items: [
      {
        name: 'Serum',
        image: '/images/drug 0.jpg'
      },
      {
        name: 'Paracetamol',
        image: '/images/drug 6.jpg'
      }
    ]
  }
]



const CompanyOrdersPage = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        results.length > 0 ? results.map((order:any, index: number) => (
          <OrderCard 
            key={index}
            buyerName={order.buyer.firstName + ' ' + order.buyer.lastName}
            deliveryStatus={order.status}
            hasPaid={true}
            imageUrl={order.items[0].image}
            items={order.items}
          />
        )): (
          <span className="text-sm ">
            No orders
          </span>
        )
      }
      
    </div>
  )
}

export default CompanyOrdersPage
