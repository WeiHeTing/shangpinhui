//引入mockjs模块
import Mock from "mockjs";
//引入json数据格式
import banner from './banner.json'
import floor from './floor.json'

//首页大轮播图数据
Mock.mock('/mock/banner',{code:200,data:banner})
//floor数据
Mock.mock('/mock/floor',{code:200,data:floor})