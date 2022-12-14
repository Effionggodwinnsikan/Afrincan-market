import React, { ReactNode, useEffect } from "react";
import { Header,Footer} from "../components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const RootLayout = ({ children }: { children: ReactNode }) => {

  useEffect(() => {
  //  window.scrollY()
  }, [])
  
 
  return (
    <>
      <Header />
      
      {children}
      <div className="flex justify-center p-3 items-center bg-white rounded-[100%] fixed bottom-10 right-4 border border-primary z-100">
        <KeyboardArrowUpIcon/>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
