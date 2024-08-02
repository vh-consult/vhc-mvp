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
        <div className="">
            <Image 
                src={drugImage}
                alt='drugImage'
                width={30}
                height={30}
                className='object-cover rounded-sm'
            />
            <div className="">
                <h3 className="">{orderedBy}</h3>
                <p className="">
                    <span className="">{new Date(orderedDate).toLocaleDateString()}</span>
                    <span className="">{new Date(orderedDate).toLocaleDateString()}</span>
                </p>
                <p className="">
                    <span className={`w-5 h-5 rounded-full ${hasPaid? 'bg-green-500': 'bg-red-500'}`}>
                        {hasPaid? 'Paid': 'Not Paid'}
                    </span>
                </p>
            </div>
        </div>
    )
}

const RecentOrders = ({orders}: {orders: Array<any>}) => {
  return (
    <div> 
      {
        orders.map((order,index)=>(
            <RecentOrderCard 
                key={index}
                orderedBy={order.name}
                orderedDate={order.createdAt}
                drugImage={order.drugs[0].image}
                hasPaid={order.paymentStatus === "Paid"? true : false}
            />
        ))
      }
    </div>
  )
}

export default RecentOrders
