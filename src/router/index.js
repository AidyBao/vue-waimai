
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Cart from "@/views/cart/Cart.vue";
import Mine from "@/views/mine/Mine.vue";
import Order from "@/views/order/Order.vue";
import Store from "@/views/store/Store.vue";
import CreatOrder from "@/views/creatOrder/CreatOrder.vue";
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
    ]
})

export default router