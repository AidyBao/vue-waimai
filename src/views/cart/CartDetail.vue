<template>
  <div class="cartDetail">
    <div class="content">
      <van-checkbox-group v-model="checked" @click="groupChange">
        <div v-for="(item, index) in store.state.cartList">
          <list-item
              :item="item"
              :handleChange="handleChange"
              :showCheckBox="true"
          />
        </div>
      </van-checkbox-group>
    </div>
    <van-submit-bar
        :price="allPrice"
        button-text="提交订单"
        @submit="onSubmit"
        class="submit-all"
        button-color="#ffc400"
        v-if="store.state.isDelete"
    >
      <van-checkbox
          v-model="submitChecked"
          checked-color="#ffc400"
          @click="choseAll"
      >
        全选
      </van-checkbox>
      <template #tip>
        你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
      </template>
    </van-submit-bar>
    <div class="buy" v-else>
      <div class="left">
        <van-checkbox
            v-model="submitChecked"
            checked-color="#ffc400"
            @click="choseAll"
        >
          全选
        </van-checkbox>
      </div>
      <div class="delete" @click="handleDelete">
        删除
      </div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, reactive, toRefs} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router"
import ListItem from "@/components/ListItem.vue";
import {showFailToast, showToast} from "vant";

export default {
  name: "CartDetail",
  props: ["changeShow"],
  components: {
    ListItem,
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const data = reactive({
      checked: [],
      submitChecked: true
    })


    const allPrice = computed(() => {
      let countList = updateData()
      let sum = 0
      countList.forEach(item => {
        sum += item.num * item.price
      })
      return sum*100
    })
    const handleChange = (value, detail) => {
      store.state.cartList.map((item)=>{
        if (item.id == detail.name) {
          item.num = value
        }
      })
    }

    const init = () => {
      data.checked = store.state.cartList.map(item=>item.id)
    }

    onMounted(() =>{
      init();
    })

    const onSubmit = () => {
      showToast('点击按钮')
      if(data.checked.length) {
        store.commit('pay',updateData())
        router.push({
          path: "/creatOrder",
          query: {
            list: data.checked,
          },
        })
      }else {
        showFailToast("请选择要结算的订单！")
      }
    };
    const onClickLink = () => {
      showToast('修改地址')
    };

    const groupChange = (result) => {
      if (result.length === store.state.cartList.length) {
        data.submitChecked = true
      }else {
        data.submitChecked = false
      }
      data.checked = result
    }
    const choseAll = () => {
      console.log('choseAll')
      if (data.checked.length !== store.state.cartList.length) {
        init()
      }else {
        data.checked = []
      }
    }

    const updateData = (type) => {
      return store.state.cartList.filter(item => {
        return type === 'delete' ? !data.checked.includes(item.id) : data.checked.includes(item.id)
      })
    }
    
    const handleDelete = () => {
      if (data.checked.length) {
        store.commit('delete', updateData('delete'))
        data.checked = []
        //购物车没有数据的时候
        if(!store.state.cartList.length) {
          props.changeShow()
          store.commit('edit','delete')
        }
      }else {
        showFailToast("请选择删除的商品")
      }
    }

    return {
      ...toRefs(data),
      store,
      handleChange,
      onSubmit,
      onClickLink,
      choseAll,
      groupChange,
      allPrice,
      handleDelete,
    }
  }
}
</script>

<style lang="less" scoped>
.cartDetail {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;
  .submit-all {
    position: fixed;
    bottom: 48px;
  }

  .buy {
    position: fixed;
    bottom: 48px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
    }
    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>