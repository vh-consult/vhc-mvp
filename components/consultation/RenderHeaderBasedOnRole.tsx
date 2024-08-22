import React from 'react'
import Header from '../user/Header';
import useDBUser from '@/hooks/useDBUser';

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
            route: `/consultation/`,
            label: 'Recordings',
        },
        {
            route: `/consultation/history`,
            label: 'Past Sessions',
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
            role === "Patient" ? consultationHeaderLinks.patient
    }
  />
  )
}

export default RenderHeaderBasedOnRole
