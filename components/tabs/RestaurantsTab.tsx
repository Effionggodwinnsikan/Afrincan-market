import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react'


const Restaurantstab = ({ children }: { children: ReactNode }) => {
    const router = useRouter ()
  return (
    <>
      <div className="fixed z-10  md:z-1 md:mt-10 left-0 bottom-0 bg-[#fff] md:relative  flex w-full   justify-center ">
        <div className="flex center bg-gray-300  rounded-lg w-max-content border-t-2 md:border-t-0 md:border-b border-[#F4F4F4] border-solid ">
          <Link
            href="/restaurants"
            className={
              router.pathname == "/restaurants"
                ? "bg-white shadow-md rounded-md w-full"
                : "hover:bg-gray-400 transition-all rounded-md"
            }
          >
            <Button
              variant="text"
              size="large"
              sx={{
                fontSize: "1.125rem",
                fontWeight: "700",
              }}
            >
              Restaurants
            </Button>
          </Link>
          <Link
            href="/stores"
            className={
              router.pathname == "/stores"
                ? "bg-white shadow-md px-5 rounded-md w-full"
                : " px-5 hover:bg-gray-400 transition-all rounded-md"
            }
          >
            <Button
              variant="text"
              size="large"
              sx={{
                fontSize: "1.125rem",
                fontWeight: "700",
              }}
            >
              Stores
            </Button>
          </Link>
        </div>
      </div>
      {children}
    </>
  );
}

export default Restaurantstab