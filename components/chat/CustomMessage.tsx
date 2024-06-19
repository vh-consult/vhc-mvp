import { Avatar, useMessageContext } from "stream-chat-react";

function formatDate(date: Date | string): string {
    if (typeof date === 'string') {
      return date;
    }
    return `${date.toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })}`;
  }

export const CustomMessage = () =>{
    const { message } = useMessageContext();
    return (
    <div
        className='flex relative space-x-2 p-2 rounded-md transition-colors ease-in-out duration-200 hover:bg-gray-100'
    >
        <Avatar image={message.user?.image} size={40} shape='rounded' />
        <div>
        <div className='space-x-2'>
            <span className='font-semibold text-sm text-black'>
            {message.user?.name}
            </span>
            {message.updated_at && (
            <span className='text-xs text-gray-600'>
                {formatDate(message.updated_at)}
            </span>
            )}
        </div>
        <p className='text-sm text-gray-700'>{message.text}</p>
        </div>
    </div>
    )
}