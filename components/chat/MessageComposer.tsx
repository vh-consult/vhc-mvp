"use client"
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { SendButton, useChatContext } from "stream-chat-react";

export default function MessageComposer(): JSX.Element {
    const [plusMenuOpen, setPlusMenuOpen] = useState(false);
    const { channel } = useChatContext();
    const [message, setMessage] = useState('');
    return (
      <div className='flex mx-6 my-6 px-4 py-1 bg-composer-gray items-center justify-center space-x-4 rounded-md text-gray-600 relative'>
        <button onClick={() => setPlusMenuOpen((menuOpen) => !menuOpen)}>
          <PlusCircle className='w-8 h-8 hover:text-gray-800' />
        </button>
        <input
          className='border-transparent bg-transparent outline-none text-sm font-semibold m-0 text-gray-normal'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #${channel?.data?.name || 'general'}`}
        />
        <SendButton
          sendMessage={() => {
            channel?.sendMessage({ text: message });
            setMessage('');
          }}
        />
      </div>
    );
  }