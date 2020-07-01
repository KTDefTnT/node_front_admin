import { AxiosResponse } from 'axios';
import http from '../core/http';

export default {
  register: (data: object) => {
    return http.post('/register', data).then((resp: AxiosResponse) => {
      return resp.data;
    });
  }
};