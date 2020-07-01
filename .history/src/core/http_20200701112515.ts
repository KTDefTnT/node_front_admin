import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

console.log('axios拦截器啦啦啦啦啦');
// 创建 axios 实例
let service: AxiosInstance | any;
if (process.env.NODE_ENV === 'development') {
  service = axios.create({
    baseURL: "/api", // api 的 base_url
    timeout: 50000, // 请求超时时间
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  });
} else {
  service = axios.create({
    baseURL: "/api", // api 的 base_url
    timeout: 50000, // 请求超时时间
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  });
}

// axios 请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log('url', config.url);
});

// axios 响应请求
service.interceptors.response.use((resp: AxiosResponse) => {
  console.log('xxx响应', resp);
});

const fetch = {
  post: (url: string, data: any, options = { headers: { 'Content-type': 'application/x-www-form-urlencoded' } }) => {
    return service({
      url,
      method: 'post',
      data: data,
      ...options
    });
  },
  get: (url: string, options = {}) => {
    return service({
      url,
      method: 'get',
      ...options
    });
  }
}
export default fetch;