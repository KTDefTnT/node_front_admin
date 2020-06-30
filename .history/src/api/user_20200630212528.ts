import Vue from 'vue';

export default {
  register: (obj: object) => {
    const url = "/api/register";
    return Vue.axios.post(url, obj).then((res: any) => {
      return res.data;
    });
  }
};