import Vue from 'vue';

export default {
  resgiter: (obj: object) => {
    const url = "/api/register";
    return Vue.axios.post(url, obj).then((resp: any) => {
      return resp.body;
    });
  }
};