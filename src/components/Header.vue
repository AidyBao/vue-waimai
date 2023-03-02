<template>
  <div class="header">
    <div class="text">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
}
</script>

<style lang="less" scoped>
.header {
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
  align-content: center;
  padding: 20px 20px 20px 20px;
  //渐变颜色
  background-image: linear-gradient(#ffc400, #fff);
  .text {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
}
</style>