import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  bluebg?: boolean;
  nobg?: boolean;
};

export const Button = ({ children, bluebg, nobg }: ButtonProps) => {
  return (
    <>
      {bluebg && (
        <button className="bg-blue-400 p-3 rounded-lg text-white flex items-center justify-center border-0 outline-0 font-bold">
          {children}
        </button>
      )}
      {nobg && (
        <button className="bg-white text-#8B8C8E  flex items-center justify-center border-0 outline-0 font-semibold">
          {children}
        </button>
      )}
    </>
  );
};
