// import React from 'react'
// import ReactDatePicker from 'react-datepicker'
// import { Textarea } from '../ui/textarea'
// import { Label } from '../ui/label'

// const ScheduleMeeting = () => {
//   return (
//     <div>
//                 <div className="flex flex-col gap-2.5">
//             <Label className="text-base font-normal leading-[22.4px] text-green-1">
//               Add a description
//             </Label>
//             <Textarea
//               className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
//               onChange={(e) =>
//                 setValues({ ...values, description: e.target.value })
//               }
//             />
//           </div>
//           <div className="flex w-full flex-col gap-2.5">
//             <Label className="text-base font-normal leading-[22.4px] text-green-1">
//               Select Date and Time
//             </Label>
//             <ReactDatePicker
//               selected={values.dateTime}
//               onChange={(date) => setValues({ ...values, dateTime: date! })}
//               showTimeSelect
//               timeFormat="HH:mm"
//               timeIntervals={15}
//               timeCaption="time"
//               dateFormat="MMMM d, yyyy h:mm aa"
//               className="w-full rounded bg-dark-3 p-2 focus:outline-none"
//             />
//           </div>
//           <div className="">

//           </div>
//     </div>
//   )
// }

// export default ScheduleMeeting
