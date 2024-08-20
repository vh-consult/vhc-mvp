import React from 'react'

interface OngoingNotificationProps {
    startedAt: Date;
    patient: string;
    problemStatement: string;

}

const OngoingNotification = ({
    startedAt, patient, problemStatement
}: OngoingNotificationProps) => {
  return (
    <div>
      
    </div>
  )
}

export default OngoingNotification
