import OrderList from '@/components/pharmacy/OrderList'
import React from 'react'

const CompanyOrdersPage = ({params}:{params: {id: string}}) => {
  return (
    <div>
      <OrderList shopId={params.id}/>
    </div>
  )
}

export default CompanyOrdersPage
