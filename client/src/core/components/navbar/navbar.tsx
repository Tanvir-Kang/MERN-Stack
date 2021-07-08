import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import styles from './Style'
import logo from '../../../images/logo.jpg';

export const NavBar = () => {

  return (
    <>
      <Container fluid style={styles.NavContainer}>
        <Navbar collapseOnSelect expand="lg" id="bootStrapOverride-navbar" sticky='top'>
          <Navbar.Brand href="#home"><Image src={logo} fluid ></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="bootStrapOverride-navbar-toggle"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" id="bootStrapOverride-navbar-text">
              <Nav.Link id="bootStrapOverride-navbar-text" href="/">Home</Nav.Link>
              <Nav.Link id="bootStrapOverride-navbar-text" href="/services">Services</Nav.Link>
              <Nav.Link id="bootStrapOverride-navbar-text" href="/gallery">Gallery</Nav.Link>
              <Nav.Link id="bootStrapOverride-navbar-text" href="/about">About</Nav.Link>
              <Nav.Link id="bootStrapOverride-navbar-text" href="/faq">FAQ</Nav.Link>
              <Nav.Link id="bootStrapOverride-navbar-text" href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

