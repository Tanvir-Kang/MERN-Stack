import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from './Styles'

interface Props {
  imageList: string[];
}

export const CarouselSlider = (props: Props) => {

  return (
    <Container style={styles.containerPadding}>
      <Row className='text-center'>
        <Carousel>

          <Carousel.Item>
            <Image
              className="d-block"
              src={props.imageList[0]}
              alt="First slide"
              width='1200'
              height='auto'
              fluid
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block"
              src={props.imageList[1]}
              alt="Third slide"
              width='1200'
              height='auto'
              fluid
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block fluid"
              src={props.imageList[2]}
              alt="Third slide"
              width='1200'
              height='auto'
              fluid
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  )
};
