<template>
  <div class="food-list" v-if="index === 0">
    <van-tree-select
        v-model:main-active-index="activeIndex"
        height="88vw"
        :items="items"
        @click-nav="navClick"
    >
      <template #content>
        <div v-for="(item,index) in subItem" class="item-bg" :key="index">
          <list-item
              :item="item"
              :handleAdd="handleAdd"
              :handelChange="handelChange"
          />
        </div>
      </template>
    </van-tree-select>
  </div>

  <div v-else>
    {{ foodData.content }}
  </div>

</template>

<script>
import {reactive, toRefs} from "vue";
import FoodListItem from "@/views/store/FoodListItem.vue";
import ListItem from "@/components/ListItem.vue";
export default {
  name: "FoodList",
  components : {
    FoodListItem,
    ListItem,
  },
  props:["index","foodData"],
  setup(props) {
    let data = reactive({
      activeIndex: 0,
      items: [],
      subItem: [],
    })

    /**初始化数据*/
    const initData = () => {
      let newArray = []
      props.foodData?.items?.forEach((item,index) => {
        newArray.push({
          text:item.text
        })
        if (data.activeIndex === index) {
          data.subItem = item.children
        }
      })
      data.items = newArray
    }

    initData();

    const navClick = (i) => {
      data.activeIndex = i
      initData()
    }

    const handleAdd = (id) => {
      data.subItem.forEach((item, index) => {
        if (item.id === id){
          item.add = false;
          item.num += 1;
        }
      })
    }

    const handelChange = (value,detail) => {
      console.log('handelChange')
      data.subItem.forEach((item)=> {
        if (item.id === detail.name) {
          item.num = value
        }
      })
      console.log(data.subItem)
    }

    return {
      ...toRefs(data),
      navClick,
      handleAdd,
      handelChange,
    }
  }
}
</script>

<style lang="less" scoped>
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
}
/deep/ .van-tree-select__item--active {
  color: #ffc400;
}
/deep/ .van-sidebar-item--select::before {
  background-color: #ffc400;
}
</style>