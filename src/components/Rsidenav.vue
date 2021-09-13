<!--
 * @author: Kate-sy
 * @create: 2021-07-06 18:19 PM
 * @license: MIT
 * @lastAuthor: Kate-sy
 * @lastEditTime: 2021-07-19 09:32 AM
 * @desc: 首页左侧导航
-->
<template>
  <div class="rsidenav">
    <div class="relogo">
      <svg
        t="1625568700141"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2067"
        width="30"
        height="30"
      >
        <path
          d="M512 954.2656c-251.71968 0-455.79264-204.07296-455.79264-455.79264S260.28032 42.69056 512 42.69056 967.79264 246.76352 967.79264 498.4832 763.71968 954.2656 512 954.2656z m96.32768-243.08736c114.24768 0 206.92992-101.888 206.92992-227.55328 0-125.6448-92.672-227.5328-206.92992-227.5328H470.31296v455.08608h138.01472z m-372.62336 0c91.46368 0 165.60128-71.92576 165.60128-160.6144V256.09216h-55.18336v294.44096c0 59.15648-49.408 107.1104-110.3872 107.1104h-27.58656v53.54496h27.58656-0.03072z m0 0"
          fill="#CB0507"
          p-id="2068"
        ></path>
        <path
          d="M608.32768 309.62688h-82.83136V657.6128h82.80064c83.83488 0 151.77728-77.90592 151.77728-173.98784s-67.9424-173.98784-151.77728-173.98784h0.03072z m0 0"
          fill="#CB0507"
          p-id="2069"
        ></path>
      </svg>
      京东商城管理系统
    </div>
    <div
      class="resideitem"
      :key="item.classify"
      v-for="item in sidata"
      @click="card($event, item.path)"
    >
      {{ item.classify }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Rsidenav",
  data() {
    return {
      sidata: [
        {
          classify: "商品管理",
          path: "/Goodsmanage",
        },
        {
          classify: "商品新增",
          path: "/Putgoods",
        },
        // {
        //   classify: "商品下架",
        //   path: "",
        // },
        {
          classify: "用户列表",
          path: "/Uselists",
        },
        {
          classify: "Banner图管理",
          path: "/Bannerimg",
        },
        {
          classify: "商品分类",
          path: "/Goodscategory",
        },
        // {
        //   classify: "商品评价",
        //   path: "",
        // },
        {
          classify: "订单管理",
          path: "/Order",
        },
        // {
        //   classify: "商品评论",
        //   path: "",
        // },
        // {
        //   classify: "优惠券",
        //   path: "",
        // },
        // {
        //   classify: "关于我们",
        //   path: "",
        // },
      ],
    };
  },
  methods: {
    //点击每个选项卡
    card(e, path) {
      console.log(path);
      this.$router.push(`${path}`).catch(() => {});
      this.$get(".resideitem").forEach((ele) => {
        ele.style.cssText = "background-color: #304156;color:#bfcbd9";
      });
      e.target.style.cssText = "background-color:#2D3D51;color: #1890ff;";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/public";
.rsidenav {
  height: 100%;
  width: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  .relogo {
    @include flex(center, center);
    @include font(16px, #fff);
    position: fixed;
    width: 200px;
    background-color: #304156;
    svg {
      margin-right: 8px;
    }
    padding: 10px 0px;
    margin-bottom: 5px;
  }
  .resideitem {
    padding: 20px 0px 12px 15px;
    display: flex;
    align-items: center;
    @include font(15px, #bfcbd9);
    &:hover {
      background-color: #2d3d51 !important;
      cursor: pointer;
    }
  }
}
.rsidenav .resideitem:nth-child(2) {
  padding-top: 68px;
  background-color: #2d3d51;
  color: #1890ff;
}
</style>
