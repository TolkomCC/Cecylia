import React from "react";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Banner title="Né du changement,"/>
      <div>{children}</div>
    </>
  );
};

export default Layout;
