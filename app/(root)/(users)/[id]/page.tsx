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
    <main>{user?.fullName}</main>
  )
}

export default HomePage