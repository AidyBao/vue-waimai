<template>
  <div class="footer">
    <div class="item">
      <router-link to="/home" class="nav-item" active-class="nav-color">
        <van-icon name="wap-home-o" size="30px"/>
        首页
      </router-link>
    </div>
    <div class="item">
      <router-link to="/cart" class="nav-item" active-class="nav-color">
        <van-icon name="shopping-cart-o" size="30px"/>
        购物车
      </router-link>
    </div>
    <div class="item">
      <router-link to="/order" class="nav-item" active-class="nav-color">
        <van-icon name="coupon-o" size="30px"/>
        订单
      </router-link>
    </div>
    <div class="item">
      <router-link to="/mine" class="nav-item" active-class="nav-color">
        <van-icon name="manager-o" size="30px"/>
        我的
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  background: white;
  border-top: 0.5px solid #eee;
  height: 54px;
  font-size: 12px;
  .item {
    flex: 1;
    .nav-item {
      display: flex;
      flex-flow: column;
      align-items: center;
    }

    .nav-color {
      color:#ffc400;
    }
  }
}
</style>