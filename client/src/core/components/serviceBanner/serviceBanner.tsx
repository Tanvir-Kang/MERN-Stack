import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Styles'
import Button from 'react-bootstrap/esm/Button';

export interface serviceItem {
  title: String,
  description: String
}

interface allServices {
  listOfService: serviceItem[]
}

export const ServiceBanner = (props: allServices) => {
  
  return (
    <Container>
      <Row className='text-center'><Col> <h1 className="display-4 text-center">Services</h1></Col></Row>
      <Row className='text-center' ><Col><p  className="lead">Automotive detailing dedicated to keeping your vehicle like new</p></Col></Row>
      <Row>
      {props.listOfService.map((item) => (
        <Col style={styles.containerPadding}><Row><h3>{item.title}</h3></Row><Row>{item.description}</Row></Col>
      ))}
      </Row>
      <Row>
        <Button variant="dark">View Services</Button>
      </Row>
   </Container>
  )

  
  
}