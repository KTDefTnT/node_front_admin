import axios, { AxiosInstance } from 'axios';

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

export default service;