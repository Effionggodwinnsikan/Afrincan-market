import React, { ReactNode } from "react";
import { Header,Footer} from "../components";

const RootLayout = ({ children }: { children: ReactNode }) => {
 
  return (
    <>
      <Header />
      
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
