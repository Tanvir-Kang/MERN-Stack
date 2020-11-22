import React from 'react';
import axios from 'axios';
import { IHttpService } from './types';

export class httpService implements IHttpService {

  getRequest(url: string): any {
  console.log("called")
  axios.get(`${url}`).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  })
  }
}

