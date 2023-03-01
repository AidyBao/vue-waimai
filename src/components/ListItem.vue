<template>
  <div className="content-item">
    <div className="left">
      <van-checkbox :name="item.id" v-if="showCheckBox" checked-color="#ffc400"/>
      <img :src="item.pic">
      <div className="text">
        <div className="title">{{ item.title }}</div>
        <van-icon name="add-o" v-if="item.add" @click="handleAdd(item.id)"/>
        <van-stepper
            v-else
            :v-model="item.num"
            @change="handelChange"
            :name="item.id"
        />
      </div>
    </div>
    <div className="price">
      ¥{{ item.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodListItem",
  props: ["item", "handleAdd", "handelChange","showCheckBox"]
}
</script>

<style lang="less" scoped>
.content-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .price {
    font-size: 16px;
    font-weight: 600;
  }

  .left {
    display: flex;
    align-items: center;
    flex: 1;

    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }

    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;

      .title {
        font-size: 16px;
      }

      .van-icon {
        color: red;
        font-size: 20px;
        position: absolute;
        right: 4px;
        bottom: 4px;
      }
    }
  }
}
</style>