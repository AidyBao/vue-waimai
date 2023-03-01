<template>
  <div class="create-order">
    <navigation title="生成订单"/>
    <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
    <div class="content">
      <div v-for="(item, index) in store.state.orderList">
        <van-card
            :num="item.num"
            :price="item.price"
            desc="描述信息"
            :title="item.title"
            :thumb="item.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>¥{{ totalPrice }}</span>
      </div>
      <van-button type="primary" class="pay-btn" block color="#ffc400" @click="handleCreateOrder">生成订单</van-button>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import {showDialog, showToast} from "vant";
import {onMounted, reactive, toRefs} from "vue";
import { useStore } from "vuex";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "CreatOrder",
  components: {
    Navigation,
  },

  setup() {
    let store = useStore();
    let router = useRouter();
    let route = useRoute();
    const data = reactive({
      tel: '13888888888',
      name: 'jason',
      totalPrice: 0,
    })
    const onEdit = () => {
      showToast('edit')
    };

    const initPrice = () => {
      let price = 0
      if (store.state.orderList.length) {
        store.state.orderList.forEach((item) => {
          price += item.num * item.price
        })
        data.totalPrice = price
      }
    };
    /**初始化地址*/
    const initUser = () => {
      store.state.userAddress.forEach((item) => {
        if(item.isDefault) {
          data.name = item.name
          data.tel = item.tel
        }
      })
    };

    const handleCreateOrder = () => {
      showDialog({
        title:"提示",
        message:"恭喜，您的订单已完成！"
      }).then(() => {
        //结算后，购物车需要减少
        let newList = store.state.cartList.filter((item) => {
          return !route.query.list.includes(item.id + "")
        })
        store.commit('delete',newList)
        router.push('/order')
      })
    };

    onMounted(() =>{
      initPrice();
      initUser();
    });

    return {
      onEdit,
      ...toRefs(data),
      store,
      handleCreateOrder,
    }
  }
}
</script>

<style lang="less" scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>