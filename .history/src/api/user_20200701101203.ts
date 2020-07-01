import Vue from 'vue';
import { AxiosResponse } from 'axios';

export default {
  register: (obj: object) => {
    const url = "/api/register";
    console.log('Vue', Vue);
    return Vue.$http.post(url, obj).then((resp: AxiosResponse) => {
      return resp.data;
    });
  }
};