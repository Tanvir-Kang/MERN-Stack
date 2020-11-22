import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import styles from './Styles'
import Nav from 'react-bootstrap/Nav'

interface Props {
  jumbotronText : String
}

export const JumbotronBanner = (props: Props) => {
  return (
    <Jumbotron fluid style={styles.containerPadding}>
      <Container>
        <Row>
        <Col  xs={10} sm={10} md={10} lg={10} xl={10}>
        <h3>{props.jumbotronText}</h3>
        </Col>
          <Col>
            <Nav.Link href="/services"><Button variant="dark">View Gallery</Button></Nav.Link>
          
          </Col>
          </Row>
      </Container>
    </Jumbotron>
  )
}