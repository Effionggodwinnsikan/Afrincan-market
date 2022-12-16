import React, { ReactNode} from "react";
import { Header,Footer} from "../components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { animateScroll as Scroll } from 'react-scroll'

const RootLayout = ({ children }: { children: ReactNode }) => {

  
 
  return (
    <>
      <Header />
      
      {children}
      <div className="flex justify-center p-3 items-center bg-white rounded-[100%] fixed bottom-10 right-4 border border-primary z-100 cursor-pointer " onClick={()=> Scroll.scrollToTop()}>
        <KeyboardArrowUpIcon/>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
