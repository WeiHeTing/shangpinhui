//对axios进行二次封装
import axios from "axios";
//引入进度条
//start:进度条开始，done：进度条结束
import nprogress from "nprogress";
//引入进度条的样式
import 'nprogress/nprogress.css'
//创建axios实例并进行配置
const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})
//请求拦截器
requests.interceptors.request.use(function (config) {
  //进度条开始动
  nprogress.start()
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
//响应拦截器
requests.interceptors.response.use(function (response) {
  //进度条结束
  nprogress.done()
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return error.message;
});

export default requests