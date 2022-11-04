import Link from "next/link";
import React from "react";
import { Button } from "../buttons";

export const Header = () => {
  return (
    <header className="flex  justify-center  px-4 py-3 md:px-10 xl:px-0">
      <div className="flex items-center justify-between w-full max-w-6.5xl  mx-auto my-0">
        <Link href={"/"}>
          <p className="text-black font-bold text-xl italic">Wolt</p>
        </Link>

        {/* MOBILE MENU */}

        {/* BUTTONS */}
        <div className="hidden md:flex gap-4 items-center">
          <Button nobg>Log in</Button>
          <Button bluebg>Sign up</Button>
        </div>
      </div>
    </header>
  );
};
