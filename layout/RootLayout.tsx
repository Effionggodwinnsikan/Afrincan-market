import React, { ReactNode, useState } from "react";
import { Header,Footer, CreateAccount, Register } from "../components";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [openSignUp, setOpenSignUp] = useState(true)
  return (
    <>
      <Header />
      {/* <CreateAccount open={ openSignUp} /> */}
      <Register open={ openSignUp} />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
