
//axios网络请求封装
import axios from "axios";
import {ElMessage} from "element-plus";

const NETWORK_ERROR = '网络请求异常，请稍后'
const baseUrl = ''
class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {},
        }
        return config
    }

    interceptors(instance) {
// 添加请求拦截器
        instance.interceptors.request.use((config) => {
                // 在发送请求之前做些什么
                // const headers = req.headers;
                // if (!headers.authorization) headers.authorization = 'Bearer' + 'token';
                console.log(config,'config')
                return config;
            },function (error) {
                // 对请求错误做些什么
                console.log(error,'error')
                return Promise.reject(error);
            }
        )

// 添加响应拦截器
        instance.interceptors.response.use((res) => {
            console.log(res,'response')
            const { code, data, msg } = res.data
            if (code == 200 || code == 20000) {
                return data
            }else {
                ElMessage.error(msg || NETWORK_ERROR)
                return Promise.reject(msg || NETWORK_ERROR)
            }
        })
    }

    request(options) {
        const instance = axios.create()
        options = { ...this.getInsideConfig(), ...options }
        this.interceptors(instance)
        return instance(options)
    }
}
export  default new HttpRequest(baseUrl)