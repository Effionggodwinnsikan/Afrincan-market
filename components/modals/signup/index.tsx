import React from "react";
import { Modal } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
// import Link from "next/link";
import { TextInput } from "../../generalComponents/input";
import { countries } from "../../../data/countries";
import { CheckBox, Select } from "../../generalComponents";
import Link from "next/link";


interface SignupProps {
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
}
// shadow-[rgb(0 0 0 / 6%) 0px 0px 1rem 0px, rgb(0 0 0 / 12%) 0px 1rem 1rem 0px]

export const Register: React.FC<SignupProps> = ({ open, onClose, onClick }) => {

  // const checkLabel = `aaaa ${<Link href="/"><span classname="text-primaryBtn  font-semibold">aaaaa</span> aaa</Link>}`
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="flex flex-col border-0  rounded-xl p-4 absolute gap-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[31.25rem] z-10 w-full bg-white  modal__content max-h-[min(50rem, 100vh - 24px)] md:rounded-2xl ">
          <div className="flex flex-col justify-center gap-4 relative">
            <div className="flex justify-end items-center relative h-[30px] w-full z-10 bg-white">
              <button
                className="flex items-center justify-center bg-[#E4E4E4] p-1 rounded-[50%] font-bold text-[32px] border-none outline-none cursor-pointer"
                onClick={onClose}
              >
                <ClearIcon fontSize="inherit" />
              </button>
              </div>
            <h2 className="text-2xl text-maintxt font-semibold">
              Create an account or log in
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <TextInput label="First name " type="text" />
                <TextInput label="Last name " type="text" />
              </div>
              <TextInput label="Email " type="email" />

              <TextInput label="password " type="password" />
              <TextInput label="Verify password " type="password" />
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="border-primaryBtn border-2 outline-none w-[1.5rem] h-[1.5rem]"
                />
                <label htmlFor="">
                  I've read and agree with the User Terms of Service. I
                  understand that my personal data will be processed in
                  accordance with Wolt’s Privacy Statement.
                  <br />{" "}
                  <Link href="/">
                    <span className="text-primaryBtn"> Read More</span>
                  </Link>
                </label>
              </div>
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="border-primaryBtn border-2 outline-none w-[1.5rem] h-[1.5rem]"
                />
                <label htmlFor="">
                  Wolt can transfer my personal data that Wolt has collected and
                  processed to countries outside Azerbaijan.
                </label>
              </div>

              {/* <CheckBox name="privacy-agreement">aaaa</CheckBox> */}
              {/* <Checkbox label={checkLabel} /> */}
              <button
                className="bg-primaryBtn border-0 outline-0 text-white text-base font-semibold rounded-lg py-[0.625rem] px-2"
                onClick={onClick}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
