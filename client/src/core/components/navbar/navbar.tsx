import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import styles from './Style';
import logo from '../../../images/BWD_NavLogo.png'

export const NavBar = () => {

  return (
    <>
      <Container fluid style={styles.NavContainer}>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
          
          <Navbar.Brand href="#home"><Image src={logo} fluid ></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#deets">Home</Nav.Link>
              <Nav.Link href="#deets">Services</Nav.Link>
              <Nav.Link href="#deets">Gallery</Nav.Link>
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link href="#deets">FAQ</Nav.Link>
              <Nav.Link href="#deets">Contact</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Dank memes </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </Container>


    </>
  );
}

