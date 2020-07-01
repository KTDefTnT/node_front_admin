import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import qs from 'qs';

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
    timeout: 50000 // 请求超时时间
  });
}

// axios 请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log('AxiosRequestConfig 封装', config.url);
  return config;
});

// axios 响应请求
service.interceptors.response.use((response: AxiosResponse) => {
  console.log('AxiosResponse 封装', response);
  return response;
});

const fetch = {
  post: (url: string, data: any, options = { headers: { 'Content-type': 'application/x-www-form-urlencoded' } }) => {
    return service({
      url,
      method: 'post',
      data: qs.stringify(data),
      ...options
    });
  },
  get: (url: string, options = {}) => {
    return service({
      url,
      ...options
    });
  }
}
export default fetch;