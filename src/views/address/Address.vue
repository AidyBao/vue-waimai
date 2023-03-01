<template>
  <navigation title="地址管理"/>
  <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
  />
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import {onMounted, reactive, toRefs} from "vue";
import {showToast} from "vant";
import { useStore } from "vuex";
import { useRouter } from "vue-router"
export default {
  name: "Address",
  components: {
    Navigation,
  },
  setup() {
    let store = useStore()
    let router = useRouter()
    const data = reactive({
      chosenAddressId: 1,
      list: [],
      disabledList : [],
    })


    onMounted(() => {
      init()
    })

    const init = () => {
      data.list = store.state.userAddress.map((item) => {
        return {
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: item.isDefault,
        }
      })
      data.disabledList = store.state.disabledList
    }

    const onAdd = () => {
      showToast('新增地址')
      router.push('addressEdit')
    };
    const onEdit = (item, index) => {
      showToast('编辑地址:' + index);
      router.push('addressEdit')
    }

    return {
      ...toRefs(data),
      onAdd,
      onEdit,
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
/deep/ .van-radio__icon {
  display: none;
}
</style>