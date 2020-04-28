// 关于 axios 统一处理
import axios from 'axios';
import swal from 'sweetalert';
import aop from './api';
import router from '../../router';

const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        case 401:
        break;
        case 403:
        break;
        case 404:
        break;
        default:
          console.log(other);
    }
};
// 请求超时时长
const instance = axios.create({timeout: 1000 * 60});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//响应拦截器
instance.interceptors.response.use(
    //请求成功
    res => {
        if (res.status === 200) {
            switch (res.data.code) {
                case 200:
                  console.log('成功');
                  break;
                case 400: // 特殊处理  比如 400 用户未登录跳转登录页
                  swal({
                      title: '',
                      text: res.data.msg,
                      icon: 'warning',
                      button: '确认',
                  }).then(() => {
                      // 调用退出接口
                      router.push('/login');
                  });
                  break;
                  default:
                   swal({
                       title: '',
                       text: res.data.msg,
                       icon: 'warning',
                       button: '确认',
                   })
            }
            return Promise.resolve(res.data);
        }
        return Promise.resolve(res.data);
    },
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出 但不在2XX范围
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 断网处理
            if (!window.navigator.onLine) {

            } else {
                return Promise.reject(error);
            }
        }
    }
)
export default instance;