
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
import { showToast } from "vant";

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/cart',
            component: Cart,
            meta: {
                isAuth: true,
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                isAuth: true,
            }
        },
        {
            path: '/mine',
            component: Mine,
            meta: {
                isAuth: true,
            }
        },
        {
            path: '/store',
            component: Store
        },
        {
            path: '/creatOrder',
            component: CreatOrder,
            meta: {
                isAuth: true,
            }
        },
        {
            path: '/address',
            component: Address,
            meta: {
                isAuth: true,
            }
        },
        {
            path: '/addressEdit',
            component: AddressEdit,
            meta: {
                isAuth: true,
            }
        },
        {
            path: '/userInfoEdit',
            component: UserInfoEdit,
            meta: {
                isAuth: true,
            }
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

router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        //登陆后储存标识
        if(localStorage.isLogin === 'login') {
            next()
        }else {
            next('/login')
            showToast("请先去登陆")
        }
    }else {
        next()
    }
})

export default router