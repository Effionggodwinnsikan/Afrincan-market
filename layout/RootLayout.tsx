import React, { ReactNode } from "react";
import { Header } from "../components";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootLayout;
