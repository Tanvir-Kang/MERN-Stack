import React from 'react';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';

interface images  {
  listOfImages: string[]
}

export const ImageRow = (props: images) => {
  return (
    <Container fluid>
    <Row>
      {props.listOfImages.map((image, i) => (
        <Col>
        <Image width={100} height={100} src={image} />
        </Col>
      ))}
      </Row>
      </Container>
  )
}