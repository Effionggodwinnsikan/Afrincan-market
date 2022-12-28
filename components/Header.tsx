import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Login, Register } from "./modals";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchBar from "./SearchBar";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  const handleTooltip = (e: any) => {
    e.preventDefault();
    setTooltip(!tooltip);
  };
  const closeLogin = () => setOpenLogin(!openLogin);
  const closeSignUp = () => setOpenSignUp(!openSignUp);

  return (
    <>
      <header
        className={
          router.pathname === "/"
            ? "px-4 py-3 md:px-10 xl:px-0"
            : "  px-4 py-3 md:px-10 max-w-[1600px] w-full m-auto bg-white sticky left-0 top-0 border-b border-[#2021251f] border-solid z-20"
        }
      >
        <div
          className={
            router.pathname === "/"
              ? "flex items-center justify-between w-full max-w-6.5xl  mx-auto my-0 gap-3"
              : "flex items-center justify-between gap-3  max-w-[1600px] w-full m-auto"
          }
        >
          <Link href={"/"}>
            <p className="text-black font-bold text-xl">African Market</p>
          </Link>

          {/* Searh bar */}
          {router.pathname !== "/" && <SearchBar />}

          {/* MOBILE MENU */}
          <div className="pointer-events-[initial] flex items-center lg:hidden relative">
            <button
              className="flex items-center py-[0.1875rem] pl-[0.15625rem] pr-[0.3125rem] bg-[#20212514] rounded-[1.25rem] h-[2.5rem] w-[4.5625rem] justify-between cursor-pointer border outline-0"
              onClick={handleTooltip}
            >
              <AccountCircleIcon className="text-[#20212533] border-white border-1 text-4xl rounded-full" />
              {tooltip ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </button>

            {tooltip && (
              <div className="flex flex-col gap absolute popover -bottom-[10.75rem] right-0 min-w-[13.75rem]">
                <div className="flex flex-col relative p-[0.5rem] gap-1 z-20 bg-white  ">
                  <div className="absolute bg-white popover_overlay  z-[-21]"></div>
                  <div className="flex flex-col">
                    <div className="flex flex-col ">
                      <button
                        className="text-maintxt font-normal bg-[transparent] outline-0 border-0 text-left text-sm px-4 py-2"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenLogin(!openLogin);
                        }}
                      >
                        Login
                      </button>
                      <button
                        className="text-maintxt font-normal bg-[transparent] outline-0 border-0 text-left text-sm  px-4 py-2"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenSignUp(!openSignUp);
                        }}
                      >
                        Sign up
                      </button>
                    </div>
                    <hr className="border-b-1 m-0" />
                    <div className="flex flex-col ">
                      <button className="text-maintxt font-normal bg-[transparent] outline-0 border-0 text-left text-sm  px-4 py-2">
                        Language: <span>English</span>
                      </button>
                      <button className="text-maintxt font-normal bg-[transparent] outline-0 border-0 text-left text-sm  px-4 py-2">
                        Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* BUTTONS */}
          <div className="hidden lg:flex gap-4 items-center">
            <Button
              variant="text"
              onClick={() => {
                setOpenLogin(!openLogin);
              }}
            >
              Log in
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setOpenSignUp(!openSignUp);
              }}
            >
              Sign up
            </Button>
          </div>
        </div>
      </header>
      <Login open={openLogin} onClose={closeLogin} />
      <Register open={openSignUp} onClose={closeSignUp} />
    </>
  );
};

export default Header;
