import React, { ReactNode } from "react";
import { Header } from "../components";
import Footer from "../components/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default RootLayout;
