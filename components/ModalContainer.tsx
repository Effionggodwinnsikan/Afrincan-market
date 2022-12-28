import React, { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
}
const ModalContainer = ({ open, onClose, children }: ModalProps) => {
  return (
    <>
      {open && (
        <div className="flex fixed w-full h-full overflow-auto z-[100] top-0 left-0  items-center justify-center animate-modal">
          {children}
          {/* Backdrop */}
          <div
            className="absolute w-full h-full bg-[#1a1a1a66] inset-0"
            onClick={onClose}
          ></div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;
