import { Modal } from "@mui/material";
import React from "react";
import { TextInput } from "../../generalComponents/input";

interface SignupProps {
  open: boolean;
  onClose?: () => void;
}

export const CreateAccount:React.FC< SignupProps> = ({ open, onClose }) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="flex flex-col border-0  p-4 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[31.25rem] w-full bg-white overflow-hidden shadow-[rgb(0 0 0 / 6%) 0px 0px 1rem 0px, rgb(0 0 0 / 12%) 0px 1rem 1rem 0px] md-rounded-2xl">
          <TextInput label="Email "/>
        </div>
      </Modal>
    </>
  );
};
