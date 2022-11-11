import React, { ReactNode, useState } from "react";
import { Header,Footer,  Register, Login } from "../components";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [openSignUp, setOpenSignUp] = useState(true)
  return (
    <>
      <Header />
      {/* <Login open={ openSignUp} /> */}
      <Register open={ openSignUp} />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
