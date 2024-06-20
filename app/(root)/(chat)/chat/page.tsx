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


import React from 'react'

const page = () => {
  return (
    <div>
      chat page
    </div>
  )
}

export default page
