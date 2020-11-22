import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import image from '../../images/imports';
import Image from 'react-bootstrap/Image';
import { ImageRow } from '../../core/components/image/images';


var list: string[] = [];

export const Gallery = () => { 
  image.map((image, i) => {
    list[i] = image;
  });
  return (
    <Container fluid>
      <ImageRow listOfImages={list}/>
    </Container>
  )
}