<!--
 * @author: CQBCode
 * @create: 2021-07-08 15:32 PM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-19 09:17 AM
 * @desc: 用户列表
//-->tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
<template>
  <div class="userlist">
    <el-table :data="table_data" style="width: 100%">
      <!-- height="auto" -->
      <!--<el-table-column label="序号" type="checkbox">
        <input type="checkbox" name="" id="">
      </el-table-column>-->
      <el-table-column label="序号" type="index"> </el-table-column>
      <el-table-column label="ID" prop="user_id"> </el-table-column>
      <el-table-column prop="nick_name" label="用户昵称"> </el-table-column>
      <el-table-column prop="real_name" label="实名认证"> </el-table-column>
      <el-table-column prop="user_account" label="账号"> </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column prop="email" label="email"> </el-table-column>
      <el-table-column prop="credit" label="credit"> </el-table-column>
      <el-table-column prop="last_login_time" label="最近登录">
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间"> </el-table-column>
      <el-table-column align="right">
        <!--eslint-disable-next-line vue/no-unused-vars-->
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <!--</template>-->
        <!-- eslint-disable-next-line vue/no-unused-vars-->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >禁用</el-button
          >
          <!--<el-button size=" mini" @click="handleEdit(scope.$index, scope.row)">禁用</el-button>-->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="block"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 50, 100]"
      :pageSize="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parseInt(tableData_length)"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      search: "",
      currentPage4: 1,
      pageSize: 10,
      tableData_length: "",
      currentPage: 1,
    };
  },
  created() {
    this.myaxios({
      url: "api/admin/userList",
      method: "post",
      //带参数(用post传的话，下面必须用data;用get传的话用params)
      data: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
      this.tableData = res.data.data.data;
      console.log(this.tableData);

      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].real_name == null) {
          this.tableData[i].real_name = "无";
        }
        if (this.tableData[i].user_account == null) {
          this.tableData[i].user_account = "无";
        }
        if (this.tableData[i].phone == null) {
          this.tableData[i].phone = "无";
        }
        if (this.tableData[i].email == null) {
          this.tableData[i].email = "无";
        }
        if (this.tableData[i].sex == 3) {
          this.tableData[i].sex = "保密";
        } else if (this.tableData[i].sex == 0) {
          this.tableData[i].sex = "男";
        } else {
          this.tableData[i].sex = "女";
        }
        //创建时间
        let a = this.tableData[i].create_time * 1000;
        this.tableData[i].create_time = new Date(a).toLocaleString();
        //);
        //最近登录
        let b = this.tableData[i].last_login_time * 1000;
        this.tableData[i].last_login_time = new Date(b).toLocaleString();
      }
      console.log(this.tableData);
      console.log(this.tableData);
      this.tableData_length = this.tableData.length;
    });
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    table_data() {
      let search = this.search;
      if (search) {
        let list = this.tableData.filter(
          (data) =>
            !search ||
            data.nick_name.toLowerCase().includes(search.toLowerCase())
        );
        let fenye = list.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
        // 获取查询的结果，把数组长度赋值给 分页组件中的total
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return list, fenye;
      } else {
        let list = this.tableData.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
        return list;
      }
    },
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
    //计算时间
    time(t) {
      let a = new Date(t);
      console.log(a.getFullYear());
      let curDate = new Date().getTime();
      let s = curDate - t;
      let newTime = new Date(s);
      let year = newTime.getFullYear();
      let month = newTime.getMonth() + 1;
      let day = newTime.getDate();
      let hour = newTime.getHours();
      let minutes = newTime.getMinutes();
      let seconds = newTime.getSeconds();
      //console.log(newTime);
      console.log(year, month, day, hour, minutes, seconds);
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    //禁用用户
    handleEdit(index, row) {
      console.log(index, row.nick_name);
      this.$alert(`将此用户${row.nick_name}禁用吗?`, "禁用", {
        confirmButtonText: "确定",
        callback: (action) => {
          //console.log(row.user_id);
          if (action == "confirm") {
            this.myaxios({
              url: "api/admin/userAccountBan",
              method: "post",
              //带参数(用post传的话，下面必须用data;用get传的话用params)
              data: {
                token: localStorage.getItem("token"),
                id: row.user_id,
              },
            }).then((res) => {
              console.log(res);
              location.reload();
              this.$message({
                type: "info",
                message: `action: ${res.data.msg}`,
              });
            });
          }
        },
      });
    },
    //删除用户
    handleDelete(index, row) {
      console.log(index, row);
      this.$alert(`将此用户${row.nick_name}删除吗?`, "删除", {
        confirmButtonText: "确定",
        callback: (action) => {
          console.log(action);
          if (action == "confirm") {
            console.log(row.user_id);
            this.myaxios({
              url: "api/admin/userAccountDelete",
              method: "post",
              //带参数(用post传的话，下面必须用data;用get传的话用params)
              data: {
                token: localStorage.getItem("token"),
                id: row.user_id,
              },
            }).then((res) => {
              console.log(res);
              location.reload();
              this.$message({
                type: "info",
                message: `action: ${res.data.msg}`,
              });
            });
          }
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.userlist {
}
.block {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
</style>
