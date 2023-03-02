<template>
  <navigation :title="address"/>
  <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
  />

</template>

<script>
import Navigation from "@/components/Navigation.vue";
import {useStore} from "vuex";
import {useRouter,useRoute} from "vue-router";
import {showToast} from "vant";
import {computed, onMounted, reactive, toRefs} from "vue";

export default {
  name: "addressEdit",
  components: {
    Navigation,
  },
  setup() {
    let store = useStore()
    let router = useRouter()
    let route = useRoute()
    const data = reactive({
      addressInfo: {},
      areaList:{
        province_list: {
          110000: "广东省",
          120000: "浙江省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "天河区",
          110102: "海珠区",
          120102: "上城区",
          130102: "下城区",
        }
      }
    })

    const address = computed(() => {
        return route.query.type === 'add' ? "新增地址":"编辑地址"
    })


    const init = () => {
      store.state.userAddress.forEach((item)=> {
        if(item.id === Number(route.query.id)) {
          data.addressInfo = item
        }
      })
    }
    const onSave = (content) => {
      if (route.query.type === 'add') {
        store.commit('addAddress', content)
      }else {
        store.commit('editAddress', content)
      }
      showToast("保存成功")
      setTimeout(() => {
        router.back()
      },1000)
    }
    const onDelete = (content) => {
      store.commit('deleteAddress', content)
      showToast("删除成功")
      setTimeout(() => {
        router.back()
      },1000)
    }
    const onChangeDetail = (val) => {

    };

    onMounted(()=> {
      init();
    })

    return {
      onSave,
      onDelete,
      onChangeDetail,
      ...toRefs(data),
      address,
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
</style>