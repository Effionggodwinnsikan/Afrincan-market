import React, { ReactNode, useState } from "react";
import { Header,Footer, CreateAccount } from "../components";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [openSignUp, setOpenSignUp] = useState(true)
  return (
    <>
      <Header />
      <CreateAccount open={ openSignUp} />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
