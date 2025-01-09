"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { MdReply } from 'react-icons/md'
import {
  Dialog, 
  DialogContent
} from "@/components/ui/dialog"
import { Textarea } from '../ui/textarea'
import { BiSend } from 'react-icons/bi'
import { Input } from '../ui/input'
import { sendResponse } from '@/lib/actions/general.actions'
import { toast } from '../ui/use-toast'

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  sender: string;
  message: string;
  time: Date;
  // handleClick?: () => void;
}

const MessageModal = ({
  imageUrl, sender, message, time, isOpen, onClose
}: MessageModalProps) => {
  const [showInputField ,setShowInputField] = useState<boolean>(false)
  const [response, setResponse] = useState<string>('')

  const sendReply = async (postId: string) => {
    await sendResponse(postId, response)
    setShowInputField(false)
    toast({title: 'Response sent successfully'})
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="flex w-full max-w-[520px] flex-col 
    gap-4 border-none bg-white px-6 py-9 text-dark">
      <div className="flex flex-row w-full items-center">
        <Image 
          src={imageUrl}
          alt="sender_image"
          width={60}
          height={60}
          className='rounded-full object-cover mr-4'
        />
        <div className="flex flex-col ">
          <span className="text-lg font-medium">{sender}</span>
          <div className="flex text-sm flex-row flex-between">
            <span className='mr-6'>{time.toLocaleDateString()}</span>
            <span className=''>{time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
      <span className="w-full h-[2px] bg-gray-400 mt-2"></span>
      <p className='my-2'>
        {message}
      </p>
      <div className="flex flex-row">
        {
          showInputField ? (
            <div className='w-full relative '>
              <Textarea 
                placeholder='Type your reply here...'
                className='w-full h-14 border-2 border-gray-400 pr-8'
                onChange={(e) => setResponse(e.target.value)}
              />
              <span 
                className="h-full w-8 flex flex-center bg-gray-400  absolute bottom-0 right-0"
                onClick={() => sendReply('')}
              >
                <BiSend/>
              </span>
            </div>
          ) :
          (<Button 
          className='w-[100px] h-[40px] rounded-full 
          border-2 border-secondary mr-6 '
          onClick={()=> setShowInputField(true)}
        >
          Reply <MdReply className='ml-2'/> 
        </Button>)
        }
      </div>
    </DialogContent>
  </Dialog>
  )
}

export default MessageModal
