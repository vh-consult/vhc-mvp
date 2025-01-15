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
      gap-3 border-none bg-white px-6 py-5 text-dark">
        <div className="flex flex-col gap-2">
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
                    cn("text-3xl font-bold mt-[-10px]"
                    )
                }
            >
                {title}
            </h1>

            { children }
            <SubmitButton 
                className='bg-accent text-secondary focus-visible:ring-0 focus-visible:ring-offset-0'
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
