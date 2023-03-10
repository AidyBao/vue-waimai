<template>
  <div class="register">
    <Navigation title="注册"/>
    <div class="img">买团</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="username"
            name="user"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="pass"
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
        >
          注册
        </van-button>

        <van-button
            round
            block
            type="primary"
            color="#ffc400"
            class="register"
            @click="toLogin"
        >
          去登陆
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import {reactive, toRefs} from "vue";
import { useRouter } from "vue-router";
import {showToast} from "vant";

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

    const onSubmit = (value) => {
      console.log(value,'onSubmit')
      if (localStorage.userInfo) {
        console.log('1')
        let userInfo = JSON.parse(localStorage.getItem("userInfo"))
        console.log(userInfo,value)
        if (userInfo["user"] === value["user"]) {
          showToast("该用户已经存在")
          return
        }else {
          register(value)
        }
      }else {
        register(value)
      }
    }
    const register = (value) => {
      console.log('submit', value);
      localStorage.setItem('userInfo', JSON.stringify(value))
      showToast("注册成功")
      router.push("/login")
    };

    const toLogin = () => {
      router.push("/login")
    };

    return {
      register,
      toLogin,
      onSubmit,
      ...toRefs(data),
    }
  }
}
</script>

<style lang="less" scoped>
.register {
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