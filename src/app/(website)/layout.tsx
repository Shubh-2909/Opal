import React from "react";
import LandingPageNavbar from "./_components/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col py-10 px-10  xl:px-0 counter">
      <LandingPageNavbar />
      {children}
    </div>
  );
};
export default Layout;
