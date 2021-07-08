import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer id="bootStrapOverride-footer">
      <Container fluid>
        <Row className='text-center'>
          <Col>
            <h2>Connect</h2>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <AiFillFacebook id="bootStrapOverride-socials" style={{ fontSize: '40px' }}></AiFillFacebook>
            <AiFillInstagram id="bootStrapOverride-socials" style={{ fontSize: '40px' }}></AiFillInstagram>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <hr id="bootStrapOverride-footer-hr" />
            <h4>Contact</h4>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <p>Matt Gelies</p>
            <p>(604)-360-9813</p>
            <hr id="bootStrapOverride-footer-hr" />
          </Col>
           
        </Row>
        <Row className='text-center'>
          <Col>
          <h5>&copy; SUPREME SHINE AUTO DETAILING</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}