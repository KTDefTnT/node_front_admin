import { AxiosResponse } from 'axios';
import http from '../core/http';

export default {
  register: (data: object) => {
    const url = "/api/register";
    return http.post(url, data).then((resp: AxiosResponse) => {
      return resp.data;
    });
  }
};