<template>
  <Navigation title="账号管理"/>
  <div>
    <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
    <van-field v-model="sign" label="个性签名" placeholder="请输入个性签名" disabled/>
    <van-field v-model="pass" label="密码" placeholder="请输入密码" />
  </div>
  <van-button
      type="primary"
      color="#ffc400"
      round
      block
      class="save-btn"
      @click="save"
  >
    保存
  </van-button>
  <van-button
      type="primary"
      color="#ffc400"
      round
      block
      class="save-btn"
      @click="logout"
  >
    退出登陆
  </van-button>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import {reactive, toRefs} from "vue";
import {showToast} from "vant";
import { useRouter } from "vue-router";
export default {
  name: "UserInfoEdit",
  components: {
    Navigation,
  },
  setup() {
    const router = useRouter()
    const data = reactive({
      name:"",
      sign:"罔罔尘环随风散，悠悠因果皆随缘",
      pass:"",
    })
    const save = () => {
      if(data.name && data.pass) {
        let userInfo = JSON.parse(localStorage.userInfo)
        let newUserInfo = {
          user: data.name || userInfo.name,
          pass: data.pass || userInfo.pass,
        }
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo))
        showToast("修改成功")
        router.push("/mine")
      }else {
        showToast("请输入内容")
      }
    }
    const logout = () => {
      localStorage.removeItem('isLogin')
      showToast("退出成功")
      router.push("/login")
    }

    return {
      ...toRefs(data),
      save,
      logout,
    }
  }
}
</script>

<style lang="less" scoped>
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>