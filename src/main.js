import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
//全局注册mock不用时注册即可
require('./mock')

//全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios 

//利用router meta来为html的title设置数据
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title;//获取相应路由信息里面的title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
