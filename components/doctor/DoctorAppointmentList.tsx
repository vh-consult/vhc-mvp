"use client"
import React, { useEffect, useState } from 'react';
import { AppointmentDataType } from './DoctorDashboard';
import UpcomingConsultationCard from '../consultation/UpcomingConsultationCard';
import { fetchUpcoming } from '@/lib/actions/doctor.actions';
import Loader from '../general/Loader';

const DoctorAppointmentList = ({ clerkId }: { clerkId: string }) => {
    const [upcoming, setUpcoming] = useState<Array<AppointmentDataType>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getUpcomingAppointments = async () => {
            try {
                const upcomingAppointments = await fetchUpcoming(clerkId);
                setUpcoming(upcomingAppointments);
            } catch (error) {
                console.error("Error fetching upcoming appointments:", error);
            } finally {
                setLoading(false);
            }
        };

        getUpcomingAppointments();
    }, [clerkId]);

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {upcoming && upcoming.length > 0 ? (
                upcoming.map((appointment: AppointmentDataType, index: number) => (
                    <UpcomingConsultationCard
                        key={index}
                        appointment={appointment.channel!}
                        clientName={`${appointment.patient.firstName} ${appointment.patient.lastName}`}
                        problemStatement={appointment.problemStatement}
                        scheduledAt={new Date(appointment.date)}
                    />
                ))
            ) : (
                <span className="size-full flex flex-center">No upcoming appointments</span>
            )}
        </>
    );
};

export default DoctorAppointmentList;
