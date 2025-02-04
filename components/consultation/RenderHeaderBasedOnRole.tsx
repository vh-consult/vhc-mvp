"use client"
import React from 'react'
import Header from '../user/Header';
import Cookies from "js-cookie"
import { useUserStore } from '@/stores/user-store';

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
  const {user} = useUserStore()
    return (
    <Header
        navigations={
            user?.type === "Patient" ? consultationHeaderLinks.patient: consultationHeaderLinks.doctor
    }
  />
  )
}

export default RenderHeaderBasedOnRole
