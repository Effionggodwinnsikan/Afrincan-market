import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  bluebg?: boolean;
  nobg?: boolean;
  onClick? : (e:any)=> void
};

export const Button = ({ children, bluebg, nobg, onClick }: ButtonProps) => {
  return (
    <>
      {bluebg && (
        <button
          className="bg-primaryBtn p-3 rounded-lg text-white flex items-center justify-center border-0 outline-0 font-bold"
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {nobg && (
        <button
          className="bg-0 text-#8B8C8E  flex items-center justify-center border-0 outline-0 font-semibold onClick={onClick}"
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};
