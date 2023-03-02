//跨组件通讯
import { createStore } from 'vuex'

export default createStore({
    state: {
        cartList: [],//购物车数据
        isDelete: true, //点击编辑 确定底部展示
        edit: true, //编辑的状态
        orderList: [],//购物车数据
        //购物车数据
        userAddress: [
            {
                id: 1001,
                name: 'jason',
                tel: '15874859686',
                province: '广东省',
                city: '深圳市',
                county: '南山区',
                addressDetail: '深圳湾',
                isDefault: true,
                areaCode: '110101',
            },
            {
                id: 1002,
                name: 'allen',
                tel: '15874859685',
                province: '湖北省',
                city: '武汉市',
                county: '武昌区',
                addressDetail: '黄鹤楼',
                isDefault: false,
                areaCode: '110101',
            },
        ],
        disabledList : [
            {
                id: '3',
                name: '王五',
                tel: '1320000000',
                address: '浙江省杭州市滨江区江南大道 15 号',
            },
        ],
        orderListEnd:[],
    },
    mutations: {
        addCart(state,value) {
            state.cartList= value
        },
        changeDelete(state) {
            state.isDelete = !state.isDelete
        },
        delete(state,value) {
            state.cartList = value
        },
        edit(state,value) {
            if (value) {
                state.edit = true
            }else {
                state.edit = !state.edit
            }
        },
        pay(state,value) {
            state.orderList = value
        },
        orderListEnd(state,value) {
            state.orderListEnd = state.orderListEnd.concat(state.orderList)
        },
        addAddress(state, value) {
            state.userAddress.map((item) => {
                if (value.isDefault) {
                    item.isDefault = false
                }
            })
            state.userAddress.push(value)
        },
        editAddress(state, value) {
            state.userAddress = state.userAddress.map((item) => {
                if (value.isDefault) {
                    item.isDefault = false
                }
                return item.id === value.id ? value : item
            })
        },
        deleteAddress(state, value) {
            state.userAddress = state.userAddress.filter((item) => {
                return !(item.id === value.id)
            })
            if (value.isDefault) {
                state.userAddress[0].isDefault = true
            }
        },
    },
    actions: {

    },
})