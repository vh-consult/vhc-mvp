"use client" 
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
  useChatContext,
} from 'stream-chat-react';
import { ChannelFilters, ChannelOptions, ChannelSort, StreamChat } from 'stream-chat';
import "stream-chat-react/dist/css/index.css"
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { StreamChatClient } from '@stream-io/node-sdk';
import { tokenProvider } from '@/lib/actions/stream.actions';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


function CustomChannelPreview (props: any | undefined) {
  const {channel, setActiveChannel} = props
  const {messages} = channel.state
  const lastMessage = messages[messages.length - 1]

  return (
    <Button onClick={()=> setActiveChannel(channel)} className='m-[12px]'>
      <div>{channel.data.name || 'unnamed channel'}</div>
      <div className="text-sm">{lastMessage}</div>
    </Button>
  )
}

const ChatPage = () => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  
  const {isLoaded, user} = useUser()
  const chatClient = new StreamChat(apiKey!)
  
  
  
  if(!isLoaded || !user) return;
  if(!apiKey) throw new Error('Stream key not found')
    
    chatClient.setUser(
      {
        id: user?.id,
        name: user?.fullName || user?.id,
        image: user?.imageUrl
      }, tokenProvider
    )
    
    
    const sort: ChannelSort = { last_message_at: -1 };
    const filters: ChannelFilters = {
      type: 'messaging',
      members: { $in: [user?.id!] },
    };
    
    const channel = chatClient.channel("messaging", "V-Healthcare", {
      image: "/images/doc-1.jpg",
      name: "Dr Ries Monroe"
    })
  return(
    <Chat client={chatClient} theme='messaging light'>
      <ChannelList Preview={CustomChannelPreview}/>
      <Channel >
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
  )
}

export default ChatPage

