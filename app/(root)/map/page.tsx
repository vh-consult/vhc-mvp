"use client"

import dynamic from 'next/dynamic'
import React from 'react'

const DynamicMapComponent = dynamic(()=> import('@/components/map/MapComponent'), {ssr: false})

const MapPage = () => {
  return (
    <div>
        <DynamicMapComponent/>      
    </div>
)

}

export default MapPage
