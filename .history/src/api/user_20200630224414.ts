import Vue from 'vue';
import { AxiosResponse } from 'axios';

export default {
  register: (obj: object) => {
    const url = "/api/register";
    return Vue.axios.post(url, obj, { headers: { 'Content-type': 'application/x-www-form-urlencoded' } }).then((resp: AxiosResponse) => {
      return resp.data;
    });
  }
};