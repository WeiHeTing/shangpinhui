import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
//引入路由
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import {reqCategory} from '@/api'
import store from './store';


reqCategory()

Vue.component(TypeNav.name,TypeNav)

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  router,
  store
}).$mount('#app')
