/* 对axios进行二次封装 */
import Axios from 'axios'
/* 
1. 配置通用的基础路径和超时
2. 显示请求进度条
  显示进度条: 请求拦截器回调
  结束进度条: 响应拦截器回调
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
5. 每个请求自动携带userTempId的请求头: 在请求拦截器中实现
6. 如果当前有token, 自动携带token的请求头

*/
import Nprogress from './../../node_modules/nprogress/nprogress'
import './../../node_modules/nprogress/nprogress.css'

const service=Axios.create({
    baseURL:'/api',  //会给每一个路由加上/api
    timeout:5000
})

//2.请求拦截
service.interceptors.request.use(config=>{
    console.log(config);
    //显示请求进度条
    Nprogress.start();

    //加token
    config.headers.token="111111111";

    /* if(config.method==='post'){
        config.data=qs.stringify(config.data)
    } */

    return config;
})

//响应拦截
service.interceptors.response.use(res=>{
    //结束进度条
    Nprogress.done();


    return res.data
},err=>{
    return Promise.reject(err);
})

export default service;
