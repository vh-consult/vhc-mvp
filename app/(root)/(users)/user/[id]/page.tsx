"use client"
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import React from 'react'

const HomePage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();

  if (!isLoaded) return <Loader />;

  return (
    <main className='size-full bg-dark-2'>
      {id}
      {user?.fullName}
      {user?.id}
    </main>
  )
}

export default HomePage