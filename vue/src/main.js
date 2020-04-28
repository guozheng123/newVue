// npm install lib-flexible --save   rem布局
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 时间转换
import moment from 'moment'
import 'lib-flexible'

Vue.config.productionTip = false;

(() => {
  // vue原型增加方法
  // =====================================
  Vue.prototype.$copy = obj => {
    return JSON.parse(JSON.stringify(obj));
  };
  // =====================================
  Vue.prototype.$moment = moment;
  // ============  全局过滤器  ===============
  Vue.filter('Time', value => {
    return moment(value).format('YYYY-MM-DD hh:mm:ss');
  });
})();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
