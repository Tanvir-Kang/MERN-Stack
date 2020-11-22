import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import image from '../../images/imports';
import Image from 'react-bootstrap/Image';
import { ImageRow } from '../../core/components/image/images';
import { IHttpService } from '../../core/httpService/types';


var list: string[] = [];

export const Gallery = (
  httpService: IHttpService
) => { 
  image.map((image, i) => {
    list[i] = image;
  });
  const data = httpService.getRequest('');
  return (
    <Container fluid>
      <ImageRow listOfImages={list}/>
    </Container>
  )
}