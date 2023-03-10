
import Mock from 'mockjs'
import homeApi from "@/api/mockData/homeApi";
import storeApi from "@/api/mockData/storeApi";

/**获取首页数据*/
Mock.mock('/home/getHomeData', 'get', homeApi.getHomeData)

/**获取store数据*/
Mock.mock('/getStoreData', 'get', storeApi.getStoreData)