import Vue from 'vue';
import qs from 'qs';
import { AxiosResponse } from 'axios';

export default {
  register: (data: object) => {
    const url = "/api/register";
    // console.log('xx', obj);
    return Vue.axios.post(url, qs.stringify(data), { headers: {'Content-Type':'application/x-www-form-urlencoded'}}).then((resp: AxiosResponse) => {
      return resp.data;
    });
  }
};