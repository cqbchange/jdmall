<!--
 * @author: Kate-sy
 * @create: 2021-07-08 11:41 AM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-17 14:30 PM
 * @desc: 
-->
<template>
  <div class="banner-wrap">
    <!-- 查询banner -->
    <div class="top">
      <div class="goodsquery">
        <div class="goodsq_left">
          banner标题
          <input type="text" placeholder="请输入banner标题" v-model="serintda" />
          <button class="search" @click="search">
            <svg t="1625628476046" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2398" width="14" height="14">
              <path d="M959.52557 843.97588 783.748171 702.726879c35.867906-58.81964 56.906058-127.674844 56.906058-201.608717 0-214.430744-173.829024-388.262838-388.260791-388.262838S64.132646 286.687418 64.132646 501.118162s173.829024 388.262838 388.260791 388.262838c122.906238 0 232.272088-57.267285 303.416428-146.394185l173.10964 139.091872L959.52557 843.97588zM452.393437 840.48743c-187.126888 0-339.367221-152.240333-339.367221-339.368244s152.240333-339.368244 339.367221-339.368244 339.367221 152.240333 339.367221 339.368244S639.520325 840.48743 452.393437 840.48743z" p-id="2399" fill="#ffffff"></path>
            </svg>
            查询
          </button>
          <button class="resetsearch">
            <svg t="1625628717376" class="icon" viewBox="0 0 1271 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2577" width="13" height="13">
              <path
                d="M871.97099 850.891158a425.966862 425.966862 0 0 1-254.114811 79.820585c-11.939526-0.157099-23.736234-1.085411-35.518662-2.013723-4.812943-0.457015-9.454505-1.228229-14.281729-1.999443-9.311688-1.228229-18.466276-2.31364-27.463766-4.284518-5.584156-0.928312-11.168312-2.613556-16.452552-3.856067-8.840391-1.999442-17.680781-4.013166-26.221255-6.626723-4.041729-1.542427-7.912078-2.856346-12.110907-4.612998-10.082901-3.241953-19.994421-6.783821-29.477489-10.782706-2.170823-0.928312-4.284519-1.856625-6.35537-2.613557-11.168312-5.241395-22.350907-10.625607-33.047922-16.338298-0.457015-0.314198-0.928312-0.457015-1.428173-0.771213a435.592748 435.592748 0 0 1-98.815286-75.493222c-0.457015-0.471297-0.928312-1.085411-1.428173-1.542427-8.99749-9.240279-17.680781-18.794756-25.907057-29.120446-1.713808-2.156541-3.256234-4.155983-5.127141-6.626723a445.761339 445.761339 0 0 1-94.944937-275.480279h105.356318l-127.378745-252.086806L0 491.748508h104.356597a536.064714 536.064714 0 0 0 92.57417 301.444463 22.565132 22.565132 0 0 0 1.98516 3.656122c5.969763 8.868954 12.853556 16.895286 19.166081 25.050154 2.55643 2.956318 4.684407 6.041172 7.240837 9.425941 9.368815 11.539637 19.73735 22.650823 29.991632 33.490656 1.142538 1.128257 1.98516 1.970879 2.856346 2.956318A522.611325 522.611325 0 0 0 375.609484 957.561395c1.128257 0.714086 2.127978 1.128257 3.399052 1.970878 12.353696 6.755258 25.135844 13.096346 37.903709 18.723348 3.270516 1.428173 6.398215 2.956318 9.511632 4.284518 11.082622 4.784379 22.436597 8.726137 33.804854 12.853557 5.398494 1.970879 10.65417 3.656123 16.181199 5.484184 9.997211 2.956318 20.165802 5.484184 30.534338 7.883515 6.812385 1.685244 13.481953 3.370488 20.437155 4.784379a60.397434 60.397434 0 0 0 8.369093 1.970879c9.797266 1.828061 19.451715 2.670683 29.106165 3.941757 3.556151 0.714086 7.140865 1.271074 10.511352 1.685244 17.466555 1.685244 34.790293 2.856346 52.256848 2.856346 106.056123 0 234.36318-33.933389 313.726751-108.84106 23.721953-22.522287 19.108954-53.370823 8.826109-64.710516-14.03894-15.709902-47.129707-21.751074-78.163906 0.599833z m294.303599-318.768201A533.951018 533.951018 0 0 0 1074.414505 231.535397c-0.856904-1.428173-1.428173-2.956318-2.127978-4.284518-7.526471-10.554198-15.19576-20.265774-23.007866-30.248703a33.590628 33.590628 0 0 1-2.556429-3.656123 524.739303 524.739303 0 0 0-195.088424-149.172664c-2.270795-0.842622-4.113138-1.970879-6.398215-2.856346-12.068061-5.070014-24.421757-9.440223-36.918271-13.79615-4.284519-1.428173-8.811827-3.099135-13.2106-4.513027-10.939805-3.370488-21.72251-6.041172-32.847977-8.726137-6.11258-1.428173-12.353696-2.956318-18.451995-4.284518-2.984881-0.571269-5.826946-1.428173-8.954644-2.113696-8.226276-1.428173-16.324017-2.113696-24.707392-3.241953-5.826946-0.714086-11.425384-1.542427-17.038103-2.113696-13.910404-1.428173-27.677992-1.970879-41.417015-2.113696-2.55643 0-4.970042-0.41417-7.526472-0.41417-0.428452 0-0.856904 0.142817-1.285356 0.142817a511.800056 511.800056 0 0 0-298.173947 96.116039c-29.47749 20.979861-25.52145 50.585886-12.339414 65.524575 9.368815 10.611325 37.960837 25.592859 61.140084 7.912078 73.279554-55.498801 162.26901-80.577517 251.78689-79.806304 12.853556 0.157099 25.707113 0.771213 38.160781 1.999442 3.88463 0.314198 7.59788 0.928312 11.425383 1.542427a303.715258 303.715258 0 0 1 30.72 4.927197c4.284519 0.771213 8.854672 1.999442 13.039219 2.856345 10.082901 2.31364 19.708787 4.62728 29.320391 7.697853a68.937908 68.937908 0 0 1 8.997489 3.22767c11.168312 3.698968 22.036709 7.555035 32.576625 12.168034 1.24251 0.314198 2.170823 1.228229 3.256234 1.542427a435.749847 435.749847 0 0 1 163.66862 125.10795 9.568759 9.568759 0 0 0 0.628396 0.928312 446.43258 446.43258 0 0 1 98.543933 280.407476H970.15788l133.648424 255.000278 166.967699-255.157378z m0 0"
                p-id="2578" fill="#333333"></path>
            </svg>重置
          </button>
        </div>
        <div class="goodsq_rieht">
          <img src="/img/pho.jpg" alt="" />
          <svg t="1625633752722" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5618" width="10" height="10">
            <path d="M511.96 766.27L67 257.73h890L511.96 766.27z" p-id="5619" fill="#707070"></path>
          </svg>
          <div class="exitdl" v-show="eixtdl">退出登录</div>
        </div>
      </div>
      <!-- 增、删-->
      <div class="addelbtn">
        <button class="addbtn addbtns" @click="addbanner">
          <svg t="1625629455963" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1871" width="13" height="13">
            <path d="M533.333333 490.666667h281.6c12.8 0 21.333333 8.533333 21.333334 21.333333s-8.533333 21.333333-21.333334 21.333333h-281.6v281.6c0 12.8-8.533333 21.333333-21.333333 21.333334s-21.333333-8.533333-21.333333-21.333334v-281.6H209.066667c-12.8 0-21.333333-8.533333-21.333334-21.333333s8.533333-21.333333 21.333334-21.333333h281.6V209.066667c0-12.8 8.533333-21.333333 21.333333-21.333334s21.333333 8.533333 21.333333 21.333334v281.6z" p-id="1872" fill="#46a6ff"></path>
          </svg>新增
        </button>
      </div>
    </div>
    <!-- banner列表 -->
    <div class="goodsitem_wraps">
      <el-table :data="renderdata" border style="width: 100%" height="680" class="table">
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column label="序号" width="100" type="index">
        </el-table-column>
        <el-table-column prop="banner_id" label="banner-id" width="140">
        </el-table-column>
        <el-table-column prop="title" label="banner标题" width="200">
        </el-table-column>
        <el-table-column prop="pic" label="图片地址" width="650">
        </el-table-column>
        <el-table-column prop="update_time" label="创建时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="nowpage" :page-sizes="[10, 20, 30, 50]" :page-size="nowsize" layout="total, sizes, prev, pager, next, jumper" :total="allcont">
      </el-pagination>
    </div>
    <!-- 新增banner -->
    <div class="resetgoods" v-show="resgoods">
      <div class="resetgoods-wrap">
        <div class="restop">
          <span>{{ repagedata }}</span>
          <svg t="1625649587946" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1900" width="20" height="20" @click="loceremsg">
            <path d="M560.264533 512L512 463.735467l248.9344-248.9344 48.264533 48.264533L560.264533 512l248.9344 248.9344-48.264533 48.264533L512 560.264533l-248.9344 248.9344-48.264533-48.264533L463.735467 512 512 560.264533l-248.9344 248.9344-48.264533-48.264533L463.735467 512 214.801067 263.0656l48.264533-48.264533L512 463.735467l248.9344-248.9344 48.264533 48.264533z" p-id="1901" fill="#515151"></path>
          </svg>
        </div>
        <div class="reitem">
          <div class="banti">
            banner标题
            <input type="text" placeholder="请输入banner标题" class="input" v-model="bannertitle" />
          </div>
          <div class="banpage">
            banner目标页面
            <input type="text" placeholder="请输入目标页面" class="input" v-model="bannerpage" />
          </div>
        </div>
        <div class="reitem">
          <div class="banid">
            banner-id
            <input type="text" v-model="bannerid" disabled="true" class="input" />
          </div>
        </div>
        <div class="pic">添加banner图</div>
        <el-upload name="img" class="upload-demo" action="http://api_devs.wanxikeji.cn/api/savePic" :file-list="fileList" list-type="picture" :on-success="upsuccess" :limit="upnum">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <button @click="subaddbanner">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resgoods: false,
      eixtdl: false,
      repagedata: "新增banner",
      //图片上传
      upnum: 1,
      imgurl: "",
      fileList: [],
      //当前页码
      nowpage: 1,
      //当前页条数
      nowsize: 10,
      //渲染页面数据
      renderdata: [],
      //数据总条数
      allcont: 0,
      //删除选中的数据
      delmordata: [],
      delbtndis: true,
      //banner标题
      bannertitle: "",
      //banner目标页面
      bannerpage: "",
      reitem: "",
      bannerid: "",
      //当前页数据
      nowpagedata: [],
      //搜索框数据
      serintda: "",
      //搜索到的数据
      seradata: [],
    };
  },
  methods: {
    //搜索当前页商品
    search() {
      this.seradata = [];
      this.nowpagedata.forEach((ele) => {
        if (ele.title.indexOf(this.serintda) != -1) {
          this.seradata.push(ele);
          this.renderdata = this.seradata;
        }
        if (this.serintda == "") {
          this.getbanner();
        }
      });
    },
    //编辑banner信息
    handleEdit(data) {
      this.bannerpage = data.url;
      this.bannertitle = data.title;
      this.resgoods = true;
      this.fileList = [{ name: data.title, url: data.pic }];
      this.bannerid = data.banner_id;
      this.repagedata = "修改banner信息";
    },
    //封装bannerpapi
    getbanner() {
      this.myaxios({
        url: "api/admin/bannerList",
        method: "post",
        data: {
          token: localStorage.getItem("token"),
          page: this.nowpage,
          size: this.nowsize,
        },
      }).then((res) => {
        this.allcont = res.data.data.count;
        res.data.data.data.forEach((ele) => {
          let a = ele.update_time * 1000;
          ele.update_time = new Date(a).toLocaleString();
          this.renderdata = res.data.data.data;
          this.nowpagedata = res.data.data.data;
        });
      });
    },
    //分页的方法
    handleSizeChange(val) {
      this.nowsize = val;
      this.getbanner();
    },
    handleCurrentChange(val) {
      this.nowpage = val;
      this.getbanner();
    },
    //关闭新增页面
    loceremsg() {
      this.resgoods = false;
    },
    //新增banner
    addbanner() {
      this.fileList = [];
      this.bannerid = "";
      this.bannertitle = "";
      this.bannerpage = "";
      this.resgoods = true;
      this.repagedata = "新增banner";
    },
    //删除单个banner
    handleDelete(data) {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h("p", null, [
          h("span", null, "是否删除此banner"),
          h("i", { style: "color: red" }),
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 200);
            }, 2000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.myaxios({
          url: "api/admin/bannerDelete",
          method: "post",
          data: {
            token: localStorage.getItem("token"),
            id: data.banner_id,
          },
        }).then((res) => {
          console.log(res);
          this.$message({
            type: "info",
            message: "删除成功 " + action,
          });
        });
      });
    },
    //提交上传banner图
    subaddbanner() {
      this.myaxios({
        url: "api/admin/bannerAddModify",
        method: "post",
        data: {
          token: localStorage.getItem("token"),
          title: this.bannertitle,
          url: this.bannerpage,
          pic: this.imgurl,
          id: this.bannerid,
        },
      }).then((res) => {
        if (this.repagedata == "修改banner信息") {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "上传成功",
            type: "success",
          });
        }
        this.bannerpage = "";
        this.bannertitle = "";
        this.fileList = [];
        console.log(res);
      });
    },
    //图片上传
    upsuccess(e) {
      this.imgurl = "http://api_devs.wanxikeji.cn/" + e.data;
      this.$message({
        message: "保存成功",
        type: "success",
      });
    },
  },
  mounted() {
    this.getbanner();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/public.scss";
.addbtns {
  width: 75px;
  @include flex(center, center);
  height: 26px;
  border: none;
  border-radius: 2px;
  margin-right: 12px;
  svg {
    margin-right: 5px;
  }
}
.banner-wrap {
  width: 100%;
  position: relative;
  .top {
    position: fixed;
    background-color: #fff;
    width: calc(100% - 220px);
    z-index: 100;
    &::after {
      content: "";
      width: calc(100% + 20px);
      height: 2px;
      position: absolute;
      background-color: #eee;
      display: block;
      top: 55px;
    }
    .goodsquery {
      padding: 15px;
      @include flex(space-between, center);
      @include font(15px, #333, bold);
      width: 100%;
      .goodsq_left {
        display: flex;
        align-items: center;
        input {
          margin-left: 10px;
          width: 190px;
          height: 29px;
          border: 1px solid rgb(218, 218, 218);
          border-radius: 4px;
          text-indent: 10px;
        }
        .search {
          margin-left: 50px;
          height: 27px;
          padding: 0px 15px;
          background-color: #1189fa;
          border: none;
          border-radius: 4px;
          @include font(13px, #fff);
          @include flex(none, center);
          svg {
            margin-right: 5px;
          }
          &:hover {
            cursor: pointer;
            background-color: #46a6ff;
          }
        }
        .resetsearch {
          @extend .search;
          background-color: #fff;
          color: #333;
          border: 1px solid rgb(218, 218, 218);
          &:hover {
            background-color: #e8f4ff;
            border: 1px solid #cae2f8;
            color: #46a6ff;
          }
          &:hover svg path {
            fill: #46a6ff;
          }
        }
      }
      .goodsq_rieht {
        height: 32px;
        width: 50px;
        margin-right: 20px;
        @include flex(space-between, flex-end);
        position: relative;
        img {
          width: 32px;
          height: 32px;
          border-radius: 7px;
        }
        .exitdl {
          &::after {
            content: "";
            display: block;
            width: 8px;
            height: 8px;
            top: -4px;
            z-index: 10;
            right: 22px;
            position: absolute;
            transform: rotate(45deg);
            background-color: #fff;
          }
          &::before {
            content: "";
            display: block;
            width: 8px;
            height: 8px;
            top: -4px;
            border: 1px solid rgb(194, 193, 193);
            z-index: -10;
            right: 21px;
            position: absolute;
            transform: rotate(45deg);
            background-color: #fff;
            // box-shadow: 0 0 5px rgb(194, 193, 193);
          }
          position: absolute;
          top: 52px;
          left: -40px;
          width: 100px;
          height: 38px;
          @include flex(center);
          @include font(15px, #333);
          background-color: #fff;
          box-shadow: 0 0 5px rgb(194, 193, 193);
        }
      }
    }
    .addelbtn {
      width: 100%;
      padding: 8px 15px;
      margin-top: 5px;
      background-color: #fff;
      @include flex(none, center);
      .addbtn {
        background-color: #e8f4ff;
        border: 1px solid #69aff1;
        color: #1890ff;
        &:hover {
          background-color: #1890ff;
          color: #fff;
        }
        &:hover svg path {
          fill: #fff;
        }
      }
      .amendbtn {
        background-color: #e7faf0;
        color: #71e2a3;
        border: 1px solid #aef5cf;
      }
      .delbtn {
        background-color: #ffeded;
        color: #ff9292;
        border: 1px solid #f7d4d4;
      }
    }
  }
  .goodsitem_wraps {
    padding-top: 110px;
    z-index: -10;
  }
  .resetgoods {
    position: absolute;
    top: 0;
    left: -200px;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.3);
    @include flex(center, center);
    .resetgoods-wrap {
      position: absolute;
      top: 50px;
      width: 600px;
      padding: 20px;
      border-radius: 4px;
      background-color: #fff;
      .restop {
        @include flex(space-between, center);
        @include font(18px, #515151);
        margin-bottom: 25px;
      }
      .reitem {
        @include flex(space-between, center);
        @include font(15px, #515151, bold);
        margin-bottom: 20px;
      }
      .pic {
        @include font(15px, #515151, bold);
        margin-bottom: 8px;
      }
      button {
        margin-top: 20px;
        width: 80px;
        border: none;
        height: 25px;
        background-color: #46a6ff;
        color: #fff;
        &:hover {
          cursor: pointer;
          background-color: #1c7cd6;
        }
      }
    }
  }
  .block {
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }
}
.input {
  height: 28px;
  text-indent: 10px;
  margin-left: 5px;
  border-radius: 2px;
  border: 1px solid rgb(204, 204, 204);
}
</style>