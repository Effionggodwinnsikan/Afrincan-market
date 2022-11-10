import { Modal } from "@mui/material";
import Link from "next/link";
import React from "react";
import { TextInput } from "../../generalComponents/input";

interface SignupProps {
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

export const CreateAccount: React.FC<SignupProps> = ({
  open,
  onClose,
  onClick,
}) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="flex flex-col border-0  rounded-xl p-4 absolute gap-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[31.25rem] w-full bg-white overflow-hidden shadow-[rgb(0 0 0 / 6%) 0px 0px 1rem 0px, rgb(0 0 0 / 12%) 0px 1rem 1rem 0px] md:rounded-2xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-maintxt font-semibold">
              Create an account or log in
            </h2>
            <p className="text-maintxt font-normal">
              Log in below or create a new Wolt account.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <form action="" className="flex flex-col gap-4">
              <TextInput label="Email " type="email" />
              <button
                className="bg-primaryBtn border-0 outline-0 text-white text-base font-semibold rounded-lg py-[0.625rem] px-2"
                onClick={onClick}
              >
                Next
              </button>
            </form>
            <p className=" text-xs">
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
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
