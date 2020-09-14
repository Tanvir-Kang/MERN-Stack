import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';


export interface ICardProps {
  title: string,
  subtitle: string,
  text: string,
}

interface ICard {
  services: ICardProps[]
}

export const CardItem = (props: ICard) => {
  return (
    
    <Container>
      <Row>
      {props.services.map((item) => (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
        <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.subtitle}</Card.Subtitle>
            {item.text.split('\n').map((itemText, i) => (
              <Card.Text>{itemText}</Card.Text>
            ))}
            
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      ))}
        </Row>
      </Container>
  )
}