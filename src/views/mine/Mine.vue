<template>
  <div class="mine">
    <!--主要内容组件-->
    <div class="content">
      mine
    </div>

    <!--tab组件-->
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  }
}
</script>

<style lang="less">
.mine {
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