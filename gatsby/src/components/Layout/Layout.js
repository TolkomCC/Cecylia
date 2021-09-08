import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer"

const Layout = ({ children, myPage}) => {
  return (
    <>
      <Nav />
      <div style={{height:"auto"}}>{children}</div>
      <Footer pageActive={myPage}/>
    </>
  );
};

export default Layout;
