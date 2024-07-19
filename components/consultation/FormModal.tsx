import React, { ReactNode } from 'react'

import {
    Dialog, 
    DialogContent
} from "@/components/ui/dialog"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import SubmitButton from '../general/SubmitButton';

interface FormModalProps {
    isOpen: boolean;
    onClose: () => void;
    buttonText?: string;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonIcon?: string;
    image?: string;
}

const FormModal = ({
    isOpen, onClose, buttonText, title, image, 
    className, children, handleClick, buttonIcon
}: FormModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col 
      gap-6 border-none bg-dark-1 px-6 py-9 text-green-1">
        <div className="flex flex-col gap-6">
            {
                image && (
                    <div className='flex justify-center'>
                        <Image
                            alt='image'
                            src={image}
                            width={72}
                            height={72}
                        />
                    </div>
                )
            }
            <h1 
                className={
                    cn("text-3xl font-bold leading-[42px]", 
                    className)
                }
            >
                {title}
            </h1>

            { children }
            <SubmitButton 
                className='bg-green-2 focus-visible:ring-0 focus-visible:ring-offset-0'
                buttonText={buttonText!}
                buttonIcon={buttonIcon}
                handleClick={handleClick}
            />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default FormModal
