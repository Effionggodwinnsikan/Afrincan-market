import Link from "next/link";
import React,{useState} from "react";
import { Button } from "..";
import { Login, Register } from "../../modals";

export const Header = () => {
   const [openSignUp, setOpenSignUp] = useState(false)
   const [openLogin, setOpenLogin] = useState(false)

  const closeLogin = () => setOpenLogin(!openLogin)
  const closeSignUp = () => setOpenSignUp(!openSignUp)
  return (
    <>
      <header className="flex  justify-center  px-4 py-3 md:px-10 xl:px-0">
        <div className="flex items-center justify-between w-full max-w-6.5xl  mx-auto my-0">
          <Link href={"/"}>
            <p className="text-black font-bold text-xl italic">Wolt</p>
          </Link>

          {/* MOBILE MENU */}

          {/* BUTTONS */}
          <div className="hidden lg:flex gap-4 items-center">
            <Button
              nobg
              onClick={(e) => {
                e.preventDefault();
                setOpenLogin(!openLogin);
              }}
            >
              Log in
            </Button>
            <Button
              bluebg
              onClick={(e) => {
                e.preventDefault();
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
