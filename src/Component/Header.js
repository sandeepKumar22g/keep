import React from "react";
import {  Container, Navbar } from "react-bootstrap";
import logo from "../logo.svg"
const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>
              Keep App
            </Navbar.Brand>
          </Container>
        </Navbar>
    </>
  );
};

export default Header;
