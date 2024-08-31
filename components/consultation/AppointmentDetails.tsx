import React from 'react'
import { Dialog, DialogContent } from '../ui/dialog';
import Image from 'next/image';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

interface AppointmentDetailsProps {
    problemStatement: string;
    scheduledAt: Date;
    clientName: string;
    clientImage: string;
    clientGender: string;
    clientAge: number;
    appointmentType: string; 
    link: string;
    isAccepted: boolean;
    isOpen: boolean;
    onClose: () => void
}

const AppointmentDetails = ({
    problemStatement, scheduledAt, clientName, appointmentType, isAccepted,
    link, clientAge, clientGender, clientImage, isOpen, onClose
}:AppointmentDetailsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div className="flex">
            <Image src={clientImage} alt='' width={50} height={50}/>
            <div className="">
                <h1 className="text-xl">
                    {clientName}
                </h1>
                <p className="flex">
                    <span className="">{clientGender}</span>
                    <span className="">{clientAge}</span>
                </p>
            </div>
        </div>
        <div className="">
            <Label>Date of Appointment</Label>
            <span className="">{new Date(scheduledAt).toDateString()}</span>
        </div>
        <div className="">
            <Label>Type of Appointment</Label>
            <span className="">{appointmentType}</span>
        </div>
        <div className="">
            <Label>Problem Statement</Label>
            <span className="">{problemStatement}</span>
        </div>
        <div className="">
            {
                isAccepted ? (
                    <div className="">
                        <Button className=''>Message</Button>
                        <Button className=''>Reschedule</Button>
                    </div>
                ): (
                    <div className="">
                        <Button className=''>Accept</Button>
                        <Button className=''>Decline</Button>
                    </div>
                )
            }
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AppointmentDetails
