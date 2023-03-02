
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Cart from "@/views/cart/Cart.vue";
import Mine from "@/views/mine/Mine.vue";
import Order from "@/views/order/Order.vue";
import Store from "@/views/store/Store.vue";
import CreatOrder from "@/views/creatOrder/CreatOrder.vue";
import Address from "@/views/address/Address.vue";
import AddressEdit from "@/views/address/AddressEdit.vue";
import UserInfoEdit from "@/views/userInfoEdit/UserInfoEdit.vue";
import Login from "@/views/login/Login.vue";
import Register from "@/views/register/Register.vue";
const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/store',
            component: Store
        },
        {
            path: '/creatOrder',
            component: CreatOrder
        },
        {
            path: '/address',
            component: Address,
        },
        {
            path: '/addressEdit',
            component: AddressEdit,
        },
        {
            path: '/userInfoEdit',
            component: UserInfoEdit,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
    ]
})

export default router