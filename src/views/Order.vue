<!--
 * @author: CQBCode
 * @create: 2021-07-15 14:22 PM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-17 14:34 PM
 * @desc: 
-->
//orderdata.slice((currentPage - 1) * pageSize, currentPage * pageSize)
<template>
  <div class="order">
    <div>
      <el-table :data="orderdata.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
        <el-table-column label="序号" type="index"> </el-table-column>
        <el-table-column label="订单id" prop="order_id"> </el-table-column>
        <el-table-column label="用户id" prop="user_id"> </el-table-column>
        <el-table-column label="用户名" prop="nick_name"> </el-table-column>
        <el-table-column label="地址" prop="address_info.detailed"> </el-table-column>
        <el-table-column label="电话" prop="address_info.phone"> </el-table-column>
        <el-table-column label="订单状态" prop="status"> </el-table-column>
        <el-table-column label="总格" prop="money"> </el-table-column>
        <el-table-column label="总数量" prop="numb"> </el-table-column>
        <el-table-column label="创建时间" prop="create_time"> </el-table-column>
        <el-table-column label="发货时间" prop="delivery_time"> </el-table-column>
        <el-table-column align="right">
          <!-- eslint-disable-next-line vue/no-unused-vars-->
          <template slot="header" slot-scope="scope">
            <span>
              操作
            </span>
            <!--<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />-->
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">订单详情</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">订单状态修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="block" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]" :pageSize="10" layout="total, sizes, prev, pager, next, jumper" :total="parseInt(tableData_length)">
      </el-pagination>
    </div>
    <div class="Details" v-show="detailsshow">
      <div class="spupublic1">
        <el-table :data="orderchild" style="width: 100%">
          <el-table-column label="序号" type="index"> </el-table-column>
          <el-table-column label="图片">
            <template slot-scope="scope">
              <img :src="scope.row.img" style="height: 50px" />
            </template>
          </el-table-column>
          <el-table-column label="商品id" prop="good_id"> </el-table-column>
          <el-table-column label="商品名" prop="good_name"> </el-table-column>
          <el-table-column label="价格" prop="price"> </el-table-column>
          <el-table-column label="数量" prop="num"> </el-table-column>
          <el-table-column label="sku" prop="sku"> </el-table-column>
        </el-table>
        <el-button type="primary" @click="skudata2">确定</el-button>
        <el-button type="primary" @click="skudata1">取消</el-button>
      </div>
    </div>
    <div class="Details" v-show="stateshow">
      <div class="spupublic1">
        <el-table :data="arr" style="width: 100%">
          <el-table-column label="序号" type="index"> </el-table-column>
          <el-table-column label="订单id" prop="order_id"> </el-table-column>
          <el-table-column label="用户id" prop="user_id"> </el-table-column>
          <el-table-column label="用户名" prop="nick_name"> </el-table-column>
          <el-table-column label="地址" prop="address_info.detailed"> </el-table-column>
          <el-table-column label="电话" prop="address_info.phone"> </el-table-column>
          <el-table-column label="价格" prop="money"> </el-table-column>
          <el-table-column label="总数量" prop="numb"> </el-table-column>
          <el-table-column label="创建时间" prop="create_time"> </el-table-column>
          <el-table-column label="发货时间" prop="delivery_time"> </el-table-column>
        </el-table>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" @click="state2(obj)">确定</el-button>
        <el-button type="primary" @click="state1">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderdata: [],
      detailsshow: false,
      orderchild: [],
      //state: {},
      stateshow: false,
      tableData_length: "",
      pageSize: 10,
      currentPage: 1,
      options: [
        {
          value: 2,
          label: "完成支付",
        },
        {
          value: 3,
          label: "未发货",
        },
        {
          value: 4,
          label: "已发货",
        },
        {
          value: 5,
          label: "已收货",
        },
        {
          value: 6,
          label: "退款",
        },
        {
          value: 7,
          label: "取消",
        },
      ],
      value: "",
      arr: [],
      obj: {},
    };
  },
  created() {
    this.data();
  },
  methods: {
    //数据
    data() {
      this.myaxios({
        url: "api/admin/OrderList",
        method: "post",
        //带参数(用post传的话，下面必须用data;用get传的话用params)
        data: {
          token: localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log(res.data);
        this.orderdata = res.data.data.data;
        this.tableData_length = this.orderdata.length;
        for (let i = 0; i < this.orderdata.length; i++) {
          if (this.orderdata[i].status == 1) {
            this.orderdata[i].status = "本地和微信订单生成未支付";
          }
          if (this.orderdata[i].status == 2) {
            this.orderdata[i].status = "完成支付";
          }
          if (this.orderdata[i].status == 3) {
            this.orderdata[i].status = "未发货";
          }
          if (this.orderdata[i].status == 4) {
            this.orderdata[i].status = "已发货";
          }
          if (this.orderdata[i].status == 5) {
            this.orderdata[i].status = "已收货";
          }
          if (this.orderdata[i].status == 6) {
            this.orderdata[i].status = "退款";
          }
          if (this.orderdata[i].status == 7) {
            this.orderdata[i].status = "取消";
          }
          let a = this.orderdata[i].create_time * 1000;
          this.orderdata[i].create_time = new Date(a).toLocaleString();
          let b = this.orderdata[i].delivery_time * 1000;
          this.orderdata[i].delivery_time = new Date(b).toLocaleString();
          let c = this.orderdata[i].childern;
          console.log(c);
          c = JSON.parse(JSON.stringify(c));
          let numb = 0;
          for (let j = 0; j < c.length; j++) {
            numb = numb + c[j].num;
          }
          this.orderdata[i].numb = numb;
        }
      });
    },
    state2(a) {
      //this.stateshow = false;
      console.log(a);
      console.log(this.value);
      if (this.value) {
        console.log(this.value);
        this.myaxios({
          url: "api/admin/OrderStatusChange",
          method: "post",
          //带参数(用post传的话，下面必须用data;用get传的话用params)
          data: {
            token: localStorage.getItem("token"),
            order_id: a.order_id,
            status: this.value,
          },
        }).then((res) => {
          console.log(res);
          this.$message({
            message: res.data.msg,
            type: "success",
          });
        });
      } else {
        this.$message({
          message: "请选择",
          type: "be defeated",
        });
      }
    },
    //订单状态里面的取消
    state1() {
      this.stateshow = false;
      this.data();
    },
    skudata2() {
      this.detailsshow = false;
    },
    skudata1() {
      this.detailsshow = false;
    },

    //详情
    handleEdit(a, b) {
      console.log(a, b);
      this.detailsshow = true;
      this.orderchild = b.childern;
    },
    //修改
    handleDelete(a, b) {
      let arr = [];
      arr.push(b);
      console.log(a, b);
      this.arr = arr;
      this.obj = b;
      this.stateshow = true;
    },
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
  },
};
</script>

<style lang="scss">
.order {
  overflow-y: auto;
  //height: 100vh;
  overflow-x: hidden;
}
.Details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #929292, $alpha: 0.5);
}
.spupublic1 {
  margin-left: 200px;
}
</style>