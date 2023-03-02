<template>
  <div class="login">
    <Navigation title="登陆"/>
    <div class="img">买团</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button
            round
            block
            type="primary"
            color="#ffc400"
            native-type="submit"
            @click="onSubmit"
        >
          登陆
        </van-button>

        <van-button
            round
            block
            type="primary"
            color="#ffc400"
            class="register"
            @click="toRegister"
        >
          去注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import {reactive, toRefs} from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: {
    Navigation,
  },
  setup() {
    const router = useRouter()
    const data = reactive({
      username : "",
      password : "",
    })
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    const toRegister = (values) => {
      router.push("/register")
    };

    return {
      onSubmit,
      toRegister,
      ...toRefs(data),
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>