import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Styles'

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
      <Row>
      {props.listOfService.map((item) => (
        <Col style={styles.containerPadding}><Row><h3>{item.title}</h3></Row><Row>{item.description}</Row></Col>
      ))}
        </Row>
   </Container>
  )

  
  
}