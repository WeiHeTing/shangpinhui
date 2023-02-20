//引入路由插件
import VueRouter from "vue-router";
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//配置路由
export default new VueRouter({
    routes:[
      {
        path:'/Home',
        component:Home,
        meta:{show:true}
      },
      {
        name:'search',
        path:'/Search/:keyword?',
        component:Search,
        meta:{show:true}
      },
      {
        path:'/Login',
        component:Login,
        meta:{show:false}
      },
      {
        path:'/Register',
        component:Register,
        meta:{show:false}
      },
      {
        path:'*',
        redirect:'/home'
      }
    ]
})
