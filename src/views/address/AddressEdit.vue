<template>
  <navigation title="编辑地址"/>
  <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
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
import {useRouter} from "vue-router";
import {showToast} from "vant";
import {reactive, toRefs} from "vue";
export default {
  name: "addressEdit",
  components: {
    Navigation,
  },
  setup() {
    let store = useStore()
    let router = useRouter()
    const data = reactive({
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
    const onSave = () => {
      showToast('save');
    }
    const onDelete = () => {
      showToast('delete');
    }
    const onChangeDetail = (val) => {

    };

    return {
      onSave,
      onDelete,
      onChangeDetail,
      ...toRefs(data),
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