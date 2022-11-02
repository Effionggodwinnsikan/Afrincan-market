import React, { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
