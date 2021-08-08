import React from "react";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Banner title="Né du changement,"/>
      <div style={{height:"200px"}}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
