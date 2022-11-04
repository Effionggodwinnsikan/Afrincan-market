import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
 
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { footerData } from "../data/footerData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const matches = useMediaQuery("(min-width:768px)");
  

  return (
    <div className='w-full  mx-auto bg-[#141414]'>

    <div className=" max-w-7xl   mx-auto  text-white w-full px-3 sm:px-5  pt-5 sm:pt-10 md-14 lg:px-20  md:pt-28 pb-5">
      <div className="flex justify-between flex-col gap-10  md:flex-row">
        <div className="space-y-3 w-fit">
          <h1 className="text-white font-bold lg:text-2xl text-lg capitalize">
            african Market
          </h1>
         
        </div>
        <div className="flex flex-col md:flex-row md:gap-24">
          {footerData.map(({ items, name }) => {
            if (matches) {
              return (
                <div className="" key={name}>
                  <h2 className="text-gray-300 text-sm md:text-base mb-7 capitalize font-semibold">
                    {name}
                  </h2>
                  <div className="flex-col flex gap-3">
                    {items?.map(({ link, title }) => (
                      <Link
                        href={link}
                        className="text-white text-sm capitalize font-medium hover:underline "
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <Accordion className="bg-[#141414]    shadow-none  text-white ">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        color="inherit"
                        className="text-white h-5 "
                      />
                    }
                    className="h-10 px-0"
                  >
                    <h2 className="text-gray-300 text-sm mb-7 capitalize font-semibold">
                      {name}
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails className="flex-col flex gap-3">
                    {items?.map(({ link, title }) => (
                      <Link
                        href={link}
                        className="text-white text-sm capitalize font-medium hover:underline "
                      >
                        {title}
                      </Link>
                    ))}
                  </AccordionDetails>
                </Accordion>
              );
            }
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between mt-24 text-xs md:text-sm capitalize [&_p]:cursor-pointer  ">
        <div className="flex gap-5">
          <p>nigeria </p>
          <p> english</p>
          <p>accessability</p>
        </div>
        <div className="flex gap-5">
          <p>accessability statement</p>
          <p>terms and condition</p>
          <p>privacy policy</p>
        </div>
      </div>
      </div>
    </div>
      
  );
};

export default Footer;
