<!--
 * @author: Kate-sy
 * @create: 2021-07-08 16:12 PM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-20 19:19 PM
 * @desc: 
-->
<template>
  <div class="wrap">
    <!-- 增-->
    <div class="addelbtn">
      <button class="addbtn addbtns" @click="addbanner">
        <svg t="1625629455963" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1871" width="13" height="13">
          <path d="M533.333333 490.666667h281.6c12.8 0 21.333333 8.533333 21.333334 21.333333s-8.533333 21.333333-21.333334 21.333333h-281.6v281.6c0 12.8-8.533333 21.333333-21.333333 21.333334s-21.333333-8.533333-21.333333-21.333334v-281.6H209.066667c-12.8 0-21.333333-8.533333-21.333334-21.333333s8.533333-21.333333 21.333334-21.333333h281.6V209.066667c0-12.8 8.533333-21.333333 21.333333-21.333334s21.333333 8.533333 21.333333 21.333334v281.6z" p-id="1872" fill="#46a6ff"></path>
        </svg>新增
      </button>
    </div>

    <!-- 商品列表 -->
    <div class="goodsitem_wraps">
      <el-table :data=" renderdata.slice((currentPage - 1) * pageSize, currentPage * pageSize)" row-key="good_type_id" border style="width: 100%" class="table" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column label="序号" width="100" type="index">
        </el-table-column>
        <el-table-column prop="type_name" label="分类名称" width="350">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间"> </el-table-column>
        <el-table-column prop="update_time" label="更新时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
            <el-button size="mini" @click="handleEdit1(scope.row)">新增</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 修改分类信息 -->
    <div class="resetgoods" v-show="resgoods">
      <div class="resetgoods-wrap">
        <div class="restop">
          <span>{{ repagedata }}</span>
          <svg t="1625649587946" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1900" width="20" height="20" @click="loceremsg">
            <path d="M560.264533 512L512 463.735467l248.9344-248.9344 48.264533 48.264533L560.264533 512l248.9344 248.9344-48.264533 48.264533L512 560.264533l-248.9344 248.9344-48.264533-48.264533L463.735467 512 512 560.264533l-248.9344 248.9344-48.264533-48.264533L463.735467 512 214.801067 263.0656l48.264533-48.264533L512 463.735467l248.9344-248.9344 48.264533 48.264533z" p-id="1901" fill="#515151"></path>
          </svg>
        </div>
        分类名称
        <el-input v-model="repdata.type_name" placeholder="请输入分类名称" class="int"></el-input>
        父级id(0表示一级分类)
        <el-input v-model="repdata.parent_id" class="int"></el-input>
        分类id(有id是修改)
        <el-input v-model="repdata.good_type_id" placeholder="请输入内容" class="int"></el-input>
        <div><button v-show="!newshow" @click="sub">提交</button></div>
        <div><button v-show="newshow" @click="subss">提交</button></div>
      </div>
    </div>
    <div class="resetgoods" v-show='newly'>
      <div class="resetgoods-wrap">
        分类名称
        <el-input v-model="name" placeholder="请输入分类名称" class="int"></el-input>
        <div><button class="add" @click="add">提交</button><button @click="cancel">取消</button></div>
      </div>
    </div>
    <!--//分页-->
    <el-pagination class="block" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]" :pageSize="10" layout="total, sizes, prev, pager, next, jumper" :total="parseInt(tableData_length)">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex2: "1",
      //渲染分类的数据
      renderdata: [],
      resgoods: false,
      repagedata: "修改分类",
      repdata: [],
      tableData_length: "",
      pageSize: 10,
      currentPage: 1,
      listdata: [],
      newly: false,
      name: "",
      nameid: "",
      newshow: false,
    };
  },
  methods: {
    //每页几条
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      console.log(`每页 ${val} 条`);
    },
    //当前分页
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    //修改信息
    sub() {
      if (this.repagedata == "修改分类") {
        this.myaxios({
          url: "api/admin/addGoodType",
          method: "post",
          data: {
            token: localStorage.getItem("token"),
            name: this.repdata.type_name,
            pid: this.repdata.parent_id,
            id: this.repdata.good_type_id,
          },
        }).then((res) => {
          if (res.data.code == "2000") {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            this.repdata = [];
            this.resgoods = false;
          } else {
            this.$message({
              message: "修改失败",
              type: "error",
            });
          }
        });
      } else {
        console.log(45);
      }
    },
    //封装商品分类列表api
    getgoodsclass() {
      //this.myaxios({
      //  url: "api/admin/goodsTypeList",
      //  method: "post",
      //  data: {
      //    token: localStorage.getItem("token"),
      //  },
      //}).then((res) => {
      //  this.renderdata = res.data.data;
      //  this.tableData_length = this.renderdata.length;
      //  console.log(this.renderdata);
      //  let than = this;
      //  for (let i = 0; this.renderdata.length; i++) {
      //    console.log(than.renderdata[i].create_time);
      //    let a = than.renderdata[i].create_time * 1000;
      //    than.renderdata[i].create_time = new Date(a).toLocaleString();
      //  }
      //});
      this.myaxios({
        url: "api/admin/goodsTypeList",
        method: "post",
        data: {
          token: localStorage.getItem("token"),
        },
      }).then((res) => {
        let arr = [];
        for (let i = 0; i < res.data.data.length; i++) {
          let a = res.data.data[i].create_time * 1000;
          res.data.data[i].create_time = new Date(a).toLocaleString();
          let b = res.data.data[i].update_time * 1000;
          res.data.data[i].update_time = new Date(b).toLocaleString();
          if (res.data.data[i].parent_id == 0) {
            arr.push(res.data.data[i]);
          }
        }
        this.renderdata = arr;
        //二级
        this.tableData_length = this.renderdata.length;
        for (let i = 0; i < this.renderdata.length; i++) {
          let a = [];
          for (let j = 0; j < res.data.data.length; j++) {
            if (res.data.data[j].parent_id == this.renderdata[i].good_type_id) {
              //console.log(j);
              a.push(res.data.data[j]);
              //this.listdata.push(arr);
            }
          }
          this.renderdata[i].children = a;
        }
        //三级
        for (let z = 0; z < this.renderdata.length; z++) {
          for (let i = 0; i < this.renderdata[z].children.length; i++) {
            let a = [];
            for (let j = 0; j < res.data.data.length; j++) {
              if (
                res.data.data[j].parent_id ==
                this.renderdata[z].children[i].good_type_id
              ) {
                //console.log(j);
                a.push(res.data.data[j]);
              }
            }
            this.renderdata[z].children[i].children = a;
          }
        }
        console.log(this.renderdata);
      });
    },
    //新增分类
    addbanner() {
      this.repagedata = "新增分类";
      this.newshow = true;
      this.repdata = [];
      this.resgoods = true;
    },
    //新增
    subss() {
      this.myaxios({
        url: "api/admin/addGoodType",
        method: "post",
        data: {
          token: localStorage.getItem("token"),
          name: this.repdata.type_name,
        },
      }).then((res) => {
        if (res.data.code == "2000") {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.repdata = [];
          this.resgoods = false;
          this.getgoodsclass();
        } else {
          this.$message({
            message: "修改失败",
            type: "error",
          });
        }
      });
    },
    //修改
    handleEdit(data) {
      this.repdata = data;
      this.resgoods = true;
      this.repagedata = "修改分类";
    },
    //handleEdit1
    handleEdit1(data) {
      console.log(data);
      this.nameid = data.good_type_id;
      this.newly = true;
    },
    //删除
    handleDelete(data) {
      console.log(data.good_type_id);
      this.myaxios({
        url: "api/admin/deleteGoodtype",
        method: "post",
        data: {
          token: localStorage.getItem("token"),
          id: data.good_type_id,
        },
      }).then((res) => {
        console.log(res);
        this.getgoodsclass();
        this.$message({
          message: res.data.msg,
          type: "success",
        });
      });
    },
    add() {
      console.log(this.nameid);
      if (this.name !== "") {
        this.myaxios({
          url: "api/admin/addGoodType",
          method: "post",
          data: {
            token: localStorage.getItem("token"),
            pid: this.nameid,
            name: this.name,
          },
        }).then((res) => {
          console.log(res);
          this.getgoodsclass();
          this.newly = false;
          this.$message({
            message: res.data.msg,
            type: "success",
          });
        });
      } else {
        this.$message({
          message: "请修改",
          type: "defaet",
        });
      }
    },
    cancel() {
      this.newly = false;
    },
    loceremsg() {
      this.resgoods = false;
      this.newshow = false;
    },
  },
  created() {
    this.myaxios({
      url: "api/admin/goodsTypeList",
      method: "post",
      data: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => {
      let arr = [];
      for (let i = 0; i < res.data.data.length; i++) {
        let a = res.data.data[i].create_time * 1000;
        res.data.data[i].create_time = new Date(a).toLocaleString();
        let b = res.data.data[i].update_time * 1000;
        res.data.data[i].update_time = new Date(b).toLocaleString();
        if (res.data.data[i].parent_id == 0) {
          arr.push(res.data.data[i]);
        }
      }
      this.renderdata = arr;
      //二级
      this.tableData_length = this.renderdata.length;
      for (let i = 0; i < this.renderdata.length; i++) {
        let a = [];
        for (let j = 0; j < res.data.data.length; j++) {
          if (res.data.data[j].parent_id == this.renderdata[i].good_type_id) {
            //console.log(j);
            a.push(res.data.data[j]);
            //this.listdata.push(arr);
          }
        }
        this.renderdata[i].children = a;
      }
      //三级
      for (let z = 0; z < this.renderdata.length; z++) {
        for (let i = 0; i < this.renderdata[z].children.length; i++) {
          let a = [];
          for (let j = 0; j < res.data.data.length; j++) {
            if (
              res.data.data[j].parent_id ==
              this.renderdata[z].children[i].good_type_id
            ) {
              //console.log(j);
              a.push(res.data.data[j]);
            }
          }
          this.renderdata[z].children[i].children = a;
        }
      }
      console.log(this.renderdata);
    });
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
.wrap {
  //width: calc(100% - 240px);
  //overflow-y: hidden;
  position: relative;
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
      .int {
        margin: 10px 15px;
      }
      div {
        button {
          margin: auto;
          width: 80px;
          border: none;
          height: 25px;
          background-color: #46a6ff;
          color: #fff;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>