import React, { ReactNode } from "react";
import { Header, Footer, AltHeader } from "../components";

const AltLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AltHeader />

      {children}
      <Footer />
    </>
  );
};

export default AltLayout;
