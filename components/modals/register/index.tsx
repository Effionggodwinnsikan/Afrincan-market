import React from "react";
import { Modal } from "@mui/material";
import Link from "next/link";
import { TextInput } from "../../generalComponents/input";
import { countries } from "../../../data/countries";
import { Select } from "../../generalComponents";

interface SignupProps {
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

export const Register: React.FC<SignupProps> = ({ open, onClose, onClick }) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="flex flex-col border-0  rounded-xl p-4 absolute gap-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[31.25rem] w-full bg-white overflow-hidden shadow-[rgb(0 0 0 / 6%) 0px 0px 1rem 0px, rgb(0 0 0 / 12%) 0px 1rem 1rem 0px] md:rounded-2xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-maintxt font-semibold">
              Create an account or log in
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <form action="" className="flex flex-col gap-4">
              <Select
                options={countries}
                id="select-country"
                name="countries"
                label="Country"
                disabled
              />
              <div className="flex gap-4 items-center">
                <TextInput label="First name " type="text" />
                <TextInput label="Last name " type="text" />
              </div>
              <TextInput label="Referral code " type="text" />
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
