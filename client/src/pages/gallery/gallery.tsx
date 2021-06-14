import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import image from '../../images/imports';
import Image from 'react-bootstrap/Image';
import { ImageRow } from '../../core/components/image/images';
import { IHttpService, httpService } from '../../core/httpService';

var list: string[] = [];

export const Gallery = () => { 
  image.map((image, i) => {
    list[i] = image;
  });
  const data = new httpService();
  data.getRequest('https://postman-echo.com/get?foo1=bar1&foo2=bar2');
  return (
    <Container fluid>
      <ImageRow listOfImages={list}/>
    </Container>
  )
}