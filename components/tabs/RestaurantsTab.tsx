import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react'


const Restaurantstab = ({ children }: { children: ReactNode }) => {
    const router = useRouter ()
  return (
    <>
      <div className="fixed z-50 left-0 bottom-0 bg-[#fff] md:relative  flex w-full border-t-2 md:border-t-0 md:border-b border-[#F4F4F4] justify-center ">
        <Link
          href="/restaurants"
          className={
            router.pathname == "/restaurants"
              ? "border-t-2 md:border-t-0 md:border-b border-primary"
              : ""
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
              ? "border-t-2 md:border-t-0 md:border-b border-primary"
              : ""
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
      {children}
    </>
  );
}

export default Restaurantstab