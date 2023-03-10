<template>
  <div class="home">
    <!--主要内容组件-->
    <div class="content">
      <!-- navigation-->
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>AidyBao</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <!--主要的内容区域-->
      <div class="main">
        <div class="main-bg">
          <!--搜索-->
          <div class="search">
            <input type="text" />
            <div class="search-text">搜索</div>
          </div>
          <div class="sort">
            <div class="big-sort">
              <div v-for="(item, index) in homeData.big_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <!--<use xlink:href="#icon-tiandian"></use>-->
                  <use v-bind:xlink:href="`#`+item.icon"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
            <div class="small-sort">
              <div v-for="(item, index) in homeData.small_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use v-bind:xlink:href="`#`+item.icon"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <van-tabs v-model:active="active" class="van-tabs">
          <van-tab
              v-for="(item,index) in homeData.centent_nav_list"
              :title="item.tab"
              :key="index"
          >
            <nav-list :navList = "item.data"/>
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <!--tab组件-->
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import { onMounted, reactive, ref} from 'vue'
import NavList from "@/views/home/NavList.vue";
import { getApiHomeData } from "@/api/api";
import axios from "axios";

export default {
  components: {
    Footer,
    NavList,
  },
  setup() {
    const active = ref(0)
    let homeData = reactive({
      big_sort: [],
      small_sort: [],
      centent_nav_list: [],
    })

    const getHomeData = () => {
      getApiHomeData().then((res) => {
        console.log(res)
        const {code, data} = res.data
        if (code === 200) {
          homeData.small_sort = data.small_sort
          homeData.big_sort = data.big_sort
          homeData.centent_nav_list = data.centent_nav_list
        }
      })
      // axios.get("/home/getHomeData").then((res) => {
      //   console.log(res)
      //   const {code, data} = res.data
      //   if (code === 200) {
      //     homeData.small_sort = data.small_sort
      //     homeData.big_sort = data.big_sort
      //     homeData.centent_nav_list = data.centent_nav_list
      //   }
      // })
    }

    onMounted(() => {
      getHomeData();
    })

    return {
      homeData,
      active,
    }
  }
}
</script>

<style lang="less">
.home {
  //伸缩
  display: flex;
  //纵向
  flex-flow: column;
  height: 100%;
  font-size: 12px;
  .content {
    flex: 1;
    //上下滚动
    overflow-y: auto;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      //渐变颜色
      background-image: linear-gradient(#ffc400, #fff);
      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .location {
        span {
          margin: 0 5px;
        }
        font-size: 14px;
      }
    }
    .main {
      margin-top: -30px;
      .main-bg {
        background-image: linear-gradient(#fff,#f5f5f5);
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;
        .search {
          position: relative;
          input {
            width: 100%;
            border: 1px solid #ffc400;
            border-radius: 20px;
            height: 30px;
          }

          .search-text {
            position: absolute;
            background-color: #ffc400;
            right: -6px;
            top: 1px;
            border-radius: 16px;
            width: 60px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            text-align: center;
          }
        }
        .sort {
          padding: 20px 0;
          .big-sort {
            display: flex;
            div {
              flex: 1;
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              .icon {
                width: 40px;
                height: 40px;
                margin-bottom: 5px;
              }
            }
          }
          .small-sort {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            div {
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              width: 20%;
            }
            .icon {
              width: 30px;
              height: 30px;
              margin-bottom: 5px;
            }
          }
        }
      }
      .van-tabs {
        padding: 0 20px 10px;
        border-radius: 10px;
      }
    }
  }
}

//样式穿透
/deep/ .van-tabs__wrap {
  border-radius: 10px;
}


</style>