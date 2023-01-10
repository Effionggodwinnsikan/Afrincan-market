import Link from "next/link";
import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import { Login, Register } from "./modals";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchBar from "./SearchBar";
import { useRouter } from "next/router";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartModal from "./modals/cart";
import { Store } from "../context/store";
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { LogoutUser } from "../hooks/mutations";

const Header = () => {
  const router = useRouter();

  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { state, dispatch, totalItems } = useContext(Store);
  const { cart, user } = state;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { mutate, isError, error } = useMutation(LogoutUser, {
    onSuccess: () => {
      localStorage.removeItem("userInfo");
      enqueueSnackbar("Logged out successfully ", {
        variant: "success",
      });
      dispatch({
        type: "LOGOUT_USER",
      });

      // if (router.pathname === "/") router.push("/restaurants");
      // setOpen(!open);
    },
  });

  const handleTooltip = (e: any) => {
    e.preventDefault();
    setTooltip(!tooltip);
  };
  const handleLogin = () => setOpenLogin(!openLogin);
  const handleSignUp = () => setOpenSignUp(!openSignUp);
  const handleCart = () => setOpenCart(!openCart);

  function handleLogout() {
    const refresh = user.tokens.refresh;

    closeSnackbar();

    mutate({ refresh });

    if (isError) console.log(error);
  }

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
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                      <button
                        className="text-maintxt font-normal bg-[transparent] outline-0 border-0 text-left text-sm  px-4 py-2"
                        onClick={handleSignUp}
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

          {/* DESkTOP MENU */}

          {user && (
            <div className="hidden lg:flex gap-4 items-center">
              {router.pathname != "/" && (
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingCartIcon
                    sx={{ cursor: "pointer" }}
                    onClick={handleCart}
                  />
                </Badge>
              )}
              <div className="pointer-events-[initial] flex items-center  relative">
                <button
                  className="flex items-center py-[0.1875rem] pl-[0.15625rem] pr-[0.3125rem] bg-[#20212514] rounded-[1.25rem] h-[2.5rem] w-[4.5625rem] justify-between cursor-pointer border outline-0"
                  onClick={handleTooltip}
                >
                  <AccountCircleIcon className="text-[#20212533] border-white border-1 text-4xl rounded-full" />
                  {tooltip ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </button>

                {tooltip && (
                  <div className="flex flex-col gap absolute popover -bottom-[13.1rem] right-0 min-w-[15rem] rounded-lg">
                    <div className="flex flex-col relative p-[0.5rem] gap-3 z-20 bg-white  rounded-lg shadow">
                      <div className="absolute bg-white popover_overlay border-t-4 z-[-21]"></div>
                      <div className="flex flex-col">
                        <Link href="profile">
                          <div className="flex gap-3 items-center p-[0.5rem] hover:bg-[#F5F6F6] transition-[background] rounded-md">
                            <div className="flex items-center  bg-[#20212514] rounded-[100%]  border outline-0">
                              <AccountCircleIcon className="text-[#20212533] border-white border-1 text-4xl rounded-full" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm">Profile</span>
                              <p className="text-base font-semibold capitalize">
                                {user.username}
                              </p>
                            </div>
                          </div>
                        </Link>
                        <div className="flex flex-col ">
                          <Link
                            href="/"
                            className="text-maintxt font-normal   text-sm p-[0.5rem] hover:bg-[#F5F6F6] transition-[background] rounded-md"
                          >
                            Language: <span>English</span>
                          </Link>
                          <Link
                            href="/"
                            className="text-maintxt font-normal  text-sm p-[0.5rem] hover:bg-[#F5F6F6] transition-[background] rounded-md"
                          >
                            Support
                          </Link>
                        </div>

                        <hr className="border-b-1 m-0 my-2" />
                        <button
                          onClick={handleLogout}
                          className="flex justify-start text-maintxt font-normal bg-[transparent] outline-0 border-0 text-left text-sm p-[0.5rem] hover:bg-[#F5F6F6] transition-[background] rounded-md "
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* BUTTONS */}
          {!user && (
            <div className="hidden lg:flex gap-4 items-center">
              {router.pathname != "/" && (
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingCartIcon
                    sx={{ cursor: "pointer" }}
                    onClick={handleCart}
                  />
                </Badge>
              )}
              <Button variant="text" onClick={handleLogin}>
                Log in
              </Button>
              <Button variant="contained" onClick={handleSignUp}>
                Sign up
              </Button>
            </div>
          )}
        </div>
      </header>
      <Login open={openLogin} onClose={handleLogin} setOpen={setOpenLogin} />
      <Register open={openSignUp} onClose={handleSignUp} />
      <CartModal open={openCart} onClose={handleCart} setOpen={ setOpenCart} />
    </>
  );
};

export default Header;
