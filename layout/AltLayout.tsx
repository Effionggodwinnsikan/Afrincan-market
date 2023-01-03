import React, { ReactNode } from "react";
import { Footer, AltHeader } from "../components";

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
