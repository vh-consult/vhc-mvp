import React from 'react'
import { Dialog, DialogContent } from '../ui/dialog';
import Image from 'next/image';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

interface BookingDetailsProps {
    problemStatement: string;
    scheduledAt: Date;
    clientName: string;
    clientImage: string;
    clientGender: string;
    clientAge: number;
    bookingType: string; 
    link: string;
    isAccepted: boolean;
    open: boolean;
    onClose: () => void
}

const BookingDetails = ({
    problemStatement, scheduledAt, clientName, bookingType, isAccepted,
    link, clientAge, clientGender, clientImage, open, onClose
}:BookingDetailsProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
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
            <span className="">{bookingType}</span>
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

export default BookingDetails
