
// import { AxiosInstance } from 'axios';
export default {
  resgiter: (obj: object) => {
    const url = "/api/register";
    return this.$http.post(url, obj).then((resp: any) => {
      return resp.body;
    });
  }
};