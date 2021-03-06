import Vue from 'vue';
import { AxiosResponse } from 'axios';

export default {
  register: (obj: object) => {
    const url = "/api/register";
    console.log('this', Vue);
    return this.$http.post(url, obj).then((resp: AxiosResponse) => {
      return resp.data;
    });
  }
};