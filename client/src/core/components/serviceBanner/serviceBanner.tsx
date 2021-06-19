import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Styles'
import Button from 'react-bootstrap/esm/Button';
import  "../../appTheme/appTheme.css";

export interface ServiceItem {
  title: String,
  description: String
}

interface AllServices {
  listOfService: ServiceItem[]
}

export const ServiceBanner = (props: AllServices) => {
  
  return (
    <Container id="bootStrapOverride-background" fluid>
      <Row className='text-center' id="bootStrapOverride-text"><Col> <h1 className="display-4 text-center">Services</h1></Col></Row>
      <Row className='text-center' id="bootStrapOverride-text"><Col><p  className="lead">Automotive detailing dedicated to keeping your vehicle like new</p></Col></Row>
      <Row>
      {props.listOfService.map((item) => (
        <Col id="bootStrapOverride-text" style={styles.containerPadding}><Row><h3>{item.title}</h3></Row><Row>{item.description}</Row></Col>
      ))}
      </Row>
      <Row>
        <Button id="bootStrapOverride-redButton">View Services</Button>
      </Row>
   </Container>
  )

  
  
}