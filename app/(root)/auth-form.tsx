"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface IFormModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  buttonText: string;
}

const FormModal = ({
  isOpen,
  onClose,
  children,
  title,
}: IFormModal) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle className="capitalize text-2xl font-bold">{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
