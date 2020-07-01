import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { Notification } from 'element-ui';
import qs from 'qs';

// 创建 axios 实例
let service: AxiosInstance | any;
if (process.env.NODE_ENV === 'development') {
  service = axios.create({
    baseURL: "/api", // api 的 base_url
    timeout: 50000 // 请求超时时间
  });
} else {
  service = axios.create({
    baseURL: "/api", // api 的 base_url
    timeout: 50000 // 请求超时时间
  });
}

// axios 请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  // // 设置X-Requested-With = XMLHttpRequest 用于后端判断是是否ajax请求
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  return config;
},(error: Error) => {
  // do something with request error
  console.log(error); // for debug
  return Promise.reject(error);
});

// axios 响应请求
service.interceptors.response.use((response: AxiosResponse) => {
  // 请求500
  if (response.status === 413) {
    Notification({
      title: '提示',
      message: 'Request Entity Too Large',
      type: 'warning',
      duration: 5000
    });
    return;
  }
  return response;
}, (error: Error) => {
  Notification({
    message: error.message,
    type: "error",
    title: "接口服务故障",
    duration: 5 * 1000
  });
  return Promise.reject(error);
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