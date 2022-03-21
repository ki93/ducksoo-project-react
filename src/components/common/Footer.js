import React from "react";
import "./Footer.css";

//사용할 요소에 대한 컴포넌트를 react-bootstrap에서 import합니다
import Navbar from "react-bootstrap/Navbar";
const Footer = () => {

    return (
        <div>
  <Navbar bg="dark" variant="dark" fixed="bottom" >
      <Navbar.Brand className="footerText">
          <div className="footerText">
          Copyright 2022. HN Inc all rights reserved.
          </div>
     </Navbar.Brand>
  </Navbar>
        </div>
    );
};

export default Footer;
