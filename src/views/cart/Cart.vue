<template>
  <div class="cart">
    <!--主要内容组件-->
    <navigation title="购物车" :edit="true"/>
    <cart-detail v-if="isShow" :changeShow="changeShow"/>
    <empty v-else/>
    <!--tab组件-->
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Empty from "@/components/Empty.vue";
import Navigation from "@/components/Navigation.vue";
import CartDetail from "@/views/cart/CartDetail.vue";
import {onMounted, ref} from "vue";
import  { useStore } from 'vuex'

export default {
  components: {
    Footer,
    Empty,
    Navigation,
    CartDetail,
  },

  setup() {
    const store = useStore()
    const isShow = ref(true)
    const init = () => {
      if (store.state.cartList.length === 0) {
        isShow.value = false
      }
    }

    onMounted(() => {
      init()
    })

    const changeShow = () => {
      isShow.value = false
    }

    return {
      isShow,
      changeShow,
    }
  }
}
</script>

<style lang="less">
.cart {
  //伸缩
  display: flex;
  //纵向
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}

</style>