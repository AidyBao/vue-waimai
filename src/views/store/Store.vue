<template>
  <div class="storeDetails">
    <navigation title="店铺"/>
    <div class="content">
      <div class="img"></div>
      <div class="foodSort">
        <div class="name">
          {{ title }}
          <img :src="img" class="store-img"/>
        </div>
        <van-tabs color="#ffc400">
          <van-tab
              v-for="(item,index) in storeData"
              :title="item.name"
              :key="index"
          >
            <food-list :index="index" :foodData="item.data"/>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" dot />
      <van-action-bar-icon
          icon="cart-o"
          text="购物车"
          :badge="store.state.cartList.length"
          @click="goCart"
      />
      <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
      <van-action-bar-button type="warning" text="加入购物车" @click="handlAddCart"/>
      <van-action-bar-button
          type="danger"
          text="立即购买"
          @click="goBuy"
      />
    </van-action-bar>
  </div>
</template>

<script>
import {onMounted, reactive, toRefs} from "vue";
import Navigation from "@/components/Navigation.vue";
import FoodList from "@/views/store/FoodList.vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {showToast} from "vant";
import axios from "axios";
import { getApiStoreData } from "@/api/api";
export default {
  name: "Store",
  components: {
    Navigation,
    FoodList,
  },
  setup() {
    let store = useStore()
    let router = useRouter()
    let storeData = reactive({
      title: "好吃酸菜鱼",
      img:'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      storeData: [],
    })

    const getStoreData = () => {
      getApiStoreData().then((res) => {
        const { code, data } = res.data
        if (code === 200) {
          storeData.storeData = data
        }
      })

      // axios.get('/getStoreData').then((res) => {
      //   console.log(res)
      //   const { code, data } = res.data
      //   if (code === 200) {
      //     storeData.storeData = data
      //   }
      // })
    }

    onMounted(() => {
      getStoreData()
    })

    const handlAddCart = (type) => {
      const newList = store.state.cartList || []
      storeData.storeData.forEach(item => {
        item.data.items?.forEach(item => {
          item.children?.forEach(item => {
            if (item.num > 0) {
              newList.push(item)
            }
          })
        })
      })
      if (newList.length === 0) {
        showToast("轻选择商品")
        return
      }
      store.commit('ADDCART', newList)
      type === "buy" ? goCart() : ""
    }
    const goCart = () => {
      router.push("/cart")
    }
    const goBuy = () => {
      handlAddCart('buy')
    }
    return {
      //展开运算，可以直接拿到属性的名字
      ...toRefs(storeData),
      handlAddCart,
      store,
      goCart,
      goBuy,
    }
  }

}
</script>

<style lang="less" scoped>
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url("@/assets/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodSort {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;
      .sort {
        margin-top: 10px;
      }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>