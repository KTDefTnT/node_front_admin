
// import { AxiosInstance } from 'axios';
export default {
  resgiter: (obj: object) => {
    const url = "/api/register";
    return (this as any).$http.post(url, obj).then((resp: any) => {
      return resp.body;
    });
  }
};