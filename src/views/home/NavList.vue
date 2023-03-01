<!--导航内容页面-->
<template>
  <div v-for="(item,index) in navList" :key="index">
    <nav-list-item :itemContent="item"/>
  </div>
</template>

<script>
import NavListItem from "@/views/home/NavListItem.vue";
export default {
  name: "NavList",
  props: ["navList"],
  components: {
    NavListItem,
  }
}
</script>

<style scoped>

</style>