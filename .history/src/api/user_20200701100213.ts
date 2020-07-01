import Vue from 'vue';
import { AxiosResponse } from 'axios';

export default {
  register: (obj: object) => {
    const url = "/api/register";
    console.log('xx', obj);
    return Vue.axios.post(url, obj, { headers: {'Content-Type':'application/x-www-form-urlencoded'}}).then((resp: AxiosResponse) => {
      return resp.data;
    });
  }
};