import Vue from 'vue';

export default {
  resgiter: (obj: object) => {
    const url = "/api/register";
    return this.axios.post(url, obj).then((res: any) => {
      return res.data;
    });
  }
};