import { Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
// import Link from "next/link";
import React, { useState } from "react";
import { TextInput } from "../../generalComponents/input";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";

interface LoginProps {
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

export const Login: React.FC<LoginProps> = ({ open, onClose, onClick }) => {
  const [showPassword, setShowPassword] = useState(false);



  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="flex flex-col border-0  rounded-xl p-4 absolute gap-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[31.25rem] w-full bg-white overflow-hidden shadow-modalContent md:rounded-2xl">
            <div className="flex flex-col gap-4">
              <div className="flex justify-end items-center relative h-[30px] w-full z-10 bg-white">
                <button
                  className="flex items-center justify-center bg-[#E4E4E4] p-1 rounded-[50%] font-bold text-[32px] border-none outline-none cursor-pointer"
                  onClick={onClose}
                >
                  <ClearIcon fontSize="inherit" />
                </button>
              </div>
              <h2 className="text-2xl text-maintxt font-semibold">Log in to your account</h2>
            </div>
            <div className="flex flex-col gap-4">
              <form action="" className="flex flex-col gap-4">
                <TextInput label="Email " type="email" />
                <div className="flex flex-col gap-2 items-left">
                  <TextInput
                    label="Password "
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    className="border-none outline-none bg-none font-medium text-xs w-[max-content]"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? "Hide password" : "Show password"}
                  </button>
                </div>
                <Button
                  // className="bg-primaryBtn border-0 outline-0 text-white text-base font-semibold rounded-lg py-[0.625rem] px-2"
                  sx={{width:"100%"}}
                  onClick={onClick}
                >
                  Next
                </Button>
              </form>
              {/* <p className=" text-xs">
              Please visit
              <Link href="/">
                <span className="text-primaryBtn font-semibold px-[2.5px]">
                  Wolt Privacy Statement
                </span>
              </Link>
              to learn more about personal data processing at Wolt. You can
              access the local Privacy Statement related to your Wolt account
              after you have provided the country and language preferences
              applicable to you during registration. This site is protected by
              hCaptcha. The hCaptcha
              <Link href="/">
                <span className="text-primaryBtn font-semibold  px-[2.5px]">
                  Privacy Policy
                </span>
              </Link>
              and
              <Link href="/">
                <span className="text-primaryBtn font-semibold  px-[2.5px]">
                  Terms of Service
                </span>
              </Link>
              apply.
            </p> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
