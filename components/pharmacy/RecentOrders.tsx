import Image from 'next/image';
import React from 'react'

type RecentOrderCardProps = {
    orderedBy: string;
    hasPaid: boolean;
    orderedDate: Date;
    drugImage: string
}

const RecentOrderCard = ({orderedBy, hasPaid, orderedDate, drugImage}: RecentOrderCardProps) => {
    return(
        <div className="w-full flex  p-3 hover:bg-green-50">
            <span className="w-[40px] h-[40px] rounded-md bg-yellow-50 text-yellow-1 font-bold border mr-2 flex flex-center">
            {orderedBy.slice(0,1)}
            </span>
            <div className="">
                <h3 className="text-xl font-medium">{orderedBy}</h3>
                <p className="text-sm">
                    <span className="mr-4">Ordered on: {new Date(orderedDate).toLocaleDateString()}</span>
                </p>
                <p className="flex items-center">
                    <span className={`w-[10px] h-[10px] mr-1 block rounded-full ${hasPaid? 'bg-green-500': 'bg-red-500'}`}>
                        
                    </span>
                        {hasPaid? 'Paid': 'Not Paid'}
                </p>
            </div>
        </div>
    )
}

const RecentOrders = ({orders}: {orders: Array<any>}) => {
  return (
    <div className='flex flex-col gap-2'> 
      {
        orders.length > 0 ? orders.map((order,index)=>(
            <RecentOrderCard 
                key={index}
                orderedBy={order.name}
                orderedDate={order.createdAt}
                drugImage={order.drugs[0].image}
                hasPaid={order.paymentStatus === "Paid"? true : false}
            />
        )): (
            <span className="text-sm">No recent orders</span>
          )
      }
    </div>
  )
}

export default RecentOrders
