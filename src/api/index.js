//此模块对api接口进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

//三级联动接口
export const reqCategory=()=>{
    //发请求
  return  requests({url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',method:'get'})

}

//获取首页轮播图的接口
export const reqGetBannerList=()=>mockRequests.get('/banner')
//获取floor数据的接口
export const reqGetFloorList=()=>mockRequests.get('/floor')
//获取搜索模块数据
export const reqGetSearchInfo=(params)=>requests({url:'/api/list',method:'post',data:params})