"use client"
import React from 'react'
import Header from '../user/Header';
import useDBUser from '@/hooks/useUser';

const consultationHeaderLinks = {
    patient: [
        {
            route: `/consultation/home`,
            label: 'Home',
        },
        {
            route: `/consultation/upcoming`,
            label: 'Upcoming',
        },
        {
            route: `/consultation/recordings`,
            label: 'Recordings',
        },
    ],
    doctor: [
        {
            route: `/consultation/home`,
            label: 'Home',
        },
        {
            route: `/consultation/upcoming`,
            label: 'Upcoming',
        },
        {
            route: `/consultation/history`,
            label: 'Past Sessions',
        },
    ]
};

const RenderHeaderBasedOnRole = () => {
    const {role} = useDBUser()
  return (
    <Header
        navigations={
            role === "Patient" ? consultationHeaderLinks.patient: consultationHeaderLinks.doctor
    }
  />
  )
}

export default RenderHeaderBasedOnRole
