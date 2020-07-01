import { AxiosResponse } from 'axios';
import http from '../core/http';

export default {
  register: (data: object) => {
    const url = "/api/register";
    return http.post(url, data, { headers: {'Content-Type':'application/x-www-form-urlencoded'}}).then((resp: AxiosResponse) => {
      return resp.data;
    });
  }
};