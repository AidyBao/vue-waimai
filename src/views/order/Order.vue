<template>
  <div class="order">
    <navigation/>
    <!--主要内容组件-->
    <div class="content">
      <van-tabs v-model:active="active" color="#ffc400">
        <van-tab :title="item" v-for="(item, index) in navData">
          <div v-for="(result, index) in store.state.orderListEnd" v-if="item === '全部' && store.state.orderListEnd.length">
            <van-card
                :num = "result.num"
                :price = "result.price"
                desc = "描述信息"
                :title = "result.title"
                :thumb = "result.pic"
            >
            </van-card>
          </div>
          <div v-else>
            <empty/>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!--tab组件-->
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";
import {reactive, toRefs} from "vue";
import { useStore } from "vuex";
import Empty from "@/components/Empty.vue";
export default {
  components: {
    Footer,
    Navigation,
    Empty,
  },

  setup() {
    let store = useStore()
    const data = reactive({
      active: true,
      navData:["全部","交易完成","待付款","待发货","已发货"]
    })

    return {
      ...toRefs(data),
      store,
    }
  }
}
</script>

<style lang="less">
.order {
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