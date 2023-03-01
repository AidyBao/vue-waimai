<template>
  <div class="navigation">
    <van-icon name="arrow-left" class="icon" @click="toBack"/>
    <div>{{title}}</div>
    <div class="edit" v-if="edit" @click="handelEdit">
      {{ store.state.edit ? "编辑" : "完成" }}
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import {useStore} from "vuex";
import {showToast} from "vant";

export default {
  name: "Navigation",
  props: ["title","edit"],
  setup() {
    let router = useRouter()
    let store = useStore()
    const toBack = () => {
      router.back()
    };
    const handelEdit = () => {
      if (store.state.cartList.length){
        store.commit('edit')
        store.commit('changeDelete')
      }else {
        showToast("请添加商品")
      }
    };
    return {
      toBack,
      handelEdit,
      store,
    }
  }
}
</script>

<style lang="less" scoped>
.navigation {
  background-image: linear-gradient(#ffc400, #fff);
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  .edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
  }
  .icon {
    position: absolute;
    left: 10px;
  }
}
</style>