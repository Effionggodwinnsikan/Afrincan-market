import React, { useState } from "react";
import { Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

interface SignupProps {
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

export const Register: React.FC<SignupProps> = ({ open, onClose, onClick }) => {
  const [openOptions, setOpenOptions] = useState(false);

  function handlefirstName(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length >= 1) setOpenOptions(true);
    else if (e.target.value.length === 0) setOpenOptions(false);
  }

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
          <div className="flex flex-col border-0  rounded-xl p-4 absolute gap-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[31.25rem] z-10 w-full bg-white  modalContent modal__content  md:rounded-2xl ">
            <div className="relative h-full">
              <div className="flex justify-end items-center w-full z-10 bg-white ">
                <button
                  className="flex items-center justify-center bg-[#E4E4E4] p-1 rounded-[50%] font-bold text-[32px] border-none outline-none cursor-pointer"
                  onClick={onClose}
                >
                  <ClearIcon fontSize="inherit" />
                </button>
              </div>
            </div>
            <h2 className="text-2xl text-maintxt font-semibold">
              Create an account
            </h2>
            <div className="flex flex-col gap-4">
              <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <FormControl
                    sx={{ width: "100%", borderWidth: "2px" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="First-name">First name</InputLabel>
                    <OutlinedInput
                      id="First-name"
                      onChange={handlefirstName}
                      label="First name"
                      sx={{
                        paddingInlineStart: "2rem",
                        backgroundColor: "#fff",
                      }}
                    />
                  </FormControl>
                  <FormControl
                    sx={{ width: "100%", borderWidth: "2px" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="Last-name">Last name</InputLabel>
                    <OutlinedInput
                      id="Last-name"
                      // onChange={handlefirstName}
                      endAdornment={
                        <InputAdornment position="start">
                          {/* <FmdGoodOutlinedIcon className="absolute left-4 top-3.5 stroke-1 stroke-#202125 search-icon" /> */}
                        </InputAdornment>
                      }
                      label="Last name"
                      sx={{
                        backgroundColor: "#fff",
                      }}
                    />
                  </FormControl>
                </div>

                <FormControl
                  sx={{ width: "100%", borderWidth: "2px" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="Email">Email</InputLabel>
                  <OutlinedInput
                    id="Email"
                    type="email"
                    // onChange={handlefirstName}

                    label="Email"
                    sx={{
                      backgroundColor: "#fff",
                    }}
                  />
                </FormControl>

                {/* Passwords */}
                <FormControl
                  sx={{ width: "100%", borderWidth: "2px" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type="password"
                    // onChange={handlefirstName}
                    endAdornment={
                      <InputAdornment position="start">
                       
                      </InputAdornment>
                    }
                    label="Password"
                    sx={{
                      backgroundColor: "#fff",
                    }}
                  />
                </FormControl>
                <FormControl
                  sx={{ width: "100%", borderWidth: "2px" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="veridy-password">
                    Verify password
                  </InputLabel>
                  <OutlinedInput
                    id="verify-password"
                    type="password"
                    // onChange={handlefirstName}
                    endAdornment={
                      <InputAdornment position="start">
                      
                      </InputAdornment>
                    }
                    label="Verify password"
                    sx={{
                      backgroundColor: "#fff",
                    }}
                  />
                </FormControl>
               
                {openOptions && (
                  <>
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
                        Wolt can transfer my personal data that Wolt has
                        collected and processed to countries outside Azerbaijan.
                      </label>
                    </div>
                  </>
                )}

                {/* <CheckBox name="privacy-agreement">aaaa</CheckBox> */}
                {/* <Checkbox label={checkLabel} /> */}
                <Button
                  // className="bg-primaryBtn border-0 outline-0 text-white text-base font-semibold rounded-lg py-[0.625rem] px-2"
                  sx={{ width: "100%" }}
                  onClick={onClick}
                >
                  Next
                </Button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
