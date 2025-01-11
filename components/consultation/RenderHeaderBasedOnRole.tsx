"use client"
import React from 'react'
import Header from '../user/Header';
import Cookies from "js-cookie"

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
    const user = JSON.parse(Cookies.get("user") || '{}');
    return (
    <Header
        navigations={
            user.role === "Patient" ? consultationHeaderLinks.patient: consultationHeaderLinks.doctor
    }
  />
  )
}

export default RenderHeaderBasedOnRole
