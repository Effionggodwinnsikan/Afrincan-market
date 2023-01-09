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
        <div className="fixed w-full h-screen overflow-hidden z-[100] top-0 left-0   animate-modal">
          <div className="w-full h-full relative flex items-center justify-center">
            {children}
          </div>

          {/* Backdrop */}
          <div
            className="fixed w-full h-screen bg-[#1a1a1a66] inset-0 overflow-hidden"
            onClick={onClose}
          ></div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;
