import React from 'react';
import Axios from 'axios';
import { IHttpService } from './types';

export class httpService implements IHttpService {

  public getRequest = (url: string) => {
    Axios.get(url).then((res) => {
      console.log(res)
      return res;
    }).catch((err) => {
      console.log(err)
      return err;
    })
 } 
}

