import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className='text-center'>
          <Col>
            <h2>Connect</h2>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <AiFillFacebook style={{ fontSize: '40px' }}></AiFillFacebook>
            <AiFillInstagram style={{ fontSize: '40px' }}></AiFillInstagram>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <hr />
            <h4>Contact</h4>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <p>Tanvir Kang</p>
            <p>778-245-8367</p>
            <p>tanvir.kang1@gmail.com</p>
            <p>Surrey, BC</p>
            <hr />
          </Col>
           
        </Row>
        <Row className='text-center'>
          <Col>
          <h5>&copy; Blue Whale Detail</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}