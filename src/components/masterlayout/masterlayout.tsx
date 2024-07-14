import React, { ReactNode } from "react";
import Navbar from "../header/header";
import Footer from "../footer/footer";


interface Props {
  children: ReactNode;
  showFooter?: boolean;
}

const MasterLayout: React.FC<Props> = ({ children, showFooter = true }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {showFooter && <Footer/>}
    </div>
  );
};

export default MasterLayout;
