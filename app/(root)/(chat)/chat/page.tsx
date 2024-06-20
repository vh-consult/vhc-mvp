// "use client";

// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Channel, Chat } from "stream-chat-react";
// import { Textarea } from "@/components/ui/textarea";
// import Messages from "@/components/chat/Messages";
// import { DevToken, StreamChat } from "stream-chat";
// import { generateUsername } from "unique-username-generator";

// const page = () => {
//     const [channel, setChannel] = useState<any>();
//     const [chatClient, setChatClient] = useState<any>();
//     const [text, setText] = useState<string>('')
//     const watchChannel = () => {
//         const channel = chatClient.channel("messaging", "livestreaming_chat", {
//         name: "Live Streaming Chat",
//         });
//         channel.watch().then(() => setChannel(channel));
//     };
//     const loadChatClient = async () => {
//         const newChatClient = new StreamChat(
//         process.env.NEXT_PUBLIC_STREAM_API_KEY as string,
//         {
//             enableWSFallback: true,
//         }
//         );
//         if (newChatClient.user) await newChatClient.disconnectUser();
//         const localUser = localStorage.getItem("local_user");
//         if (!localUser) localStorage.setItem("local_user", generateUsername());
//         const id = localStorage.getItem("local_user");
//         const userToConnect = { id };
//         await newChatClient.connectUser(userToConnect as any, DevToken(userToConnect.id as string));
//         setChatClient(newChatClient);
//     };
//     useEffect(() => {
//         loadChatClient();
//     }, []);
//     useEffect(() => {
//         if (chatClient) watchChannel();
//     }, [chatClient]);
//     return (
//         <div className="flex max-w-[300px] flex-col gap-y-3 p-5">
//             <div className="flex w-[300px] flex-col gap-y-3">
//                 <span className="border-b border-gray-100 font-semibold">Chat</span>
//                 {channel && (
//                     <Chat client={chatClient}>
//                         <Channel channel={channel}>
//                             <Messages />
//                         </Channel>
//                     </Chat>
//                 )}
//                 <Textarea
//                     onChange={(e)=>setText(e.target.value)}
//                     name="message_text"
//                     placeholder="Message..."
//                     className="min-h-[100px] w-full"
//                 />
//                 <Button 
//                     className=""
//                     onClick={() => {
//                         if (channel) {
//                         channel.sendMessage({
//                             text: text ,
//                         });
//                         setText('');
//                         }
//                     }}
//                 >
//                     Send Message →
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default page
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


function CustomChannelHeader (){
  const { channel} = useChatContext()

  const {data} = channel

  return(
    <header 
      className='h-[40px] bg-dark-1 mb-5 rounded-lg p-2.5 flex items-center' >
        {
          data.image && (
            <Image className='w-5 h-5 rounded-full mr-2.5' width={20} height={20} src={data.image} alt=""/>
          )
        }
        {data.name}
    </header>
  )
}


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

const page = () => {
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
    <Chat client={chatClient} theme='messaging dark'>
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

export default page

