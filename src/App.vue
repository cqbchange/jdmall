<!--
 * @author: Kate-sy
 * @create: 2021-07-06 16:54 PM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-17 16:50 PM
 * @desc: 
-->
<template>
  <div id="app">
    <!-- v-show="rsidenav" -->
    <div id="nav">
      <Rsidenav />
    </div>
    <div class="cright">
      <router-view />
    </div>
  </div>
</template>
<script>
import Rsidenav from "@/components/Rsidenav.vue";
export default {
  components: {
    Rsidenav,
  },
  data() {
    return {
      rsidenav: false,
      //sku数据格式
      sku: [
        //每个商品的sku数据
        {
          品牌: "小米",
          重量: "285g",
          goods: [
            {
              颜色: "红色",
              内存: "128g",
              尺寸: "5.6英寸",
            },
            {
              颜色: "黑色",
              内存: "64g",
              尺寸: "5.6英寸",
            },
          ],
        },
      ],
    };
  },
  watch: {
    // $route(to) {
    //   if (to.path == "/") {
    //     this.rsidenav = false;
    //   } else {
    //     this.rsidenav = true;
    //   }
    // },
  },
  mounted() {
    console.log(this.sku);
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/public";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  #nav {
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    width: 200px;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: -10;
    //min-height: 850px;
    //height: 100vh;
    background-color: #304156;
  }
  .cright {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: calc(100% - 200px);
    overflow-y: auto;
    overflow-x: hidden;
  }
}
::-webkit-scrollbar {
  width: 2px;
  background-color: #181c32;
}
::-webkit-scrollbar-thumb {
  background-color: #929292;
  border-radius: 4px;
}
</style>
