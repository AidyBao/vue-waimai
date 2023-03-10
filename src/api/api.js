/**
 * 整个项目api的管理
 *
 */
import request from "./request.js";
import axios from "axios";

/**home组件
 * 首页数据
 * */
export  const getApiHomeData = (param) => {
    return axios.request({
        url:'/home/getHomeData',
        method: 'get',
        data: param,
        mock: false
    })
}

export  const getApiStoreData = (param) => {
    return axios.request({
        url:'/getStoreData',
        method: 'get',
        data: param,
        mock: false
    })
}
