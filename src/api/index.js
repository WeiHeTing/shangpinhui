//此模块对api接口进行统一管理
import requests from './request'

//三级联动接口
export const reqCategory=()=>{
    //发请求
  return  requests({url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',method:'get'})

}