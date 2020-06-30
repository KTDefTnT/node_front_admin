import Vue from 'vue';
import { AxiosResponse } from 'axios';

export default {
  register: (obj: object) => {
    const url = "/api/register";
    return Vue.axios.post(url, obj).then((res: AxiosResponse) => {
      return res.data;
    });
  }
};