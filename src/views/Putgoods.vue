<!--
 * @author: Kate-sy
 * @create: 2021-07-07 10:55 AM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-10-08 16:29 PM
 * @desc: 商品上架
-->
<template>
  <div>
    <div class="formmenu">
      <div>
        <div class="checlla">
          <span> 选择商品类别:</span>
          <el-select filterable placeholder="请选择" v-model="value" @change="cheitem">
            <el-option v-for="item in options" :key="item.good_type_id" :label="item.type_name" :value="item.good_type_id">
            </el-option>
          </el-select>
        </div>
        <div class="checlla">
          <span>选择商品二级类别: </span>
          <el-select filterable placeholder="请选择" v-model="values">
            <el-option v-for="item in teooption" :key="item.good_type_id" :label="item.type_name" :value="item.good_type_id">
            </el-option>
          </el-select>
        </div>
        <form>
          <el-form :model="ruleForm" ref="ruleForm" label-width="200px" class="demo-ruleForm">
            <el-form-item label="商品名称:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="商品名称分类二级id:" prop="name">
              <el-input type="number" v-model="values" disabled></el-input>
            </el-form-item>
            <el-form-item label="商品名称分类一级id:" prop="name">
              <el-input type="number" v-model="value" disabled></el-input>
            </el-form-item>
            <el-form-item label="商品id:" prop="name">
              <el-input type="number" v-model.number="shopID"></el-input>
              <el-form-item label="商品id,有则修改,没有则添加" prop="name"></el-form-item>
            </el-form-item>
            <el-form-item label="价格:" prop="name">
              <el-input type="number" v-model="ruleForm.price"></el-input>
            </el-form-item>
            <el-form-item label="是否热卖:">
              <el-radio v-model="ruleForm.radio" label='0'>否</el-radio>
              <el-radio v-model="ruleForm.radio" label='1'>是</el-radio>
              <!--<el-input-number
              v-model="ruleForm.num"
              @change="handleChange"
              :min="0"
              :max="1"
              label="描述文字"
            ></el-input-number>-->
            </el-form-item>
          </el-form>
          <!-- 图片合集 -->
          <el-form label-width="200px">
            <el-form-item label="图片集合:">
              <el-upload class="avatar-uploder filepath" action="http://api_devs.wanxikeji.cn/api/savePic" :show-file-list="false" :on-success="uploadSuccessall" name="img">
                <i class="el-icon-plus avatar-uploader-icon">上传图片</i>
              </el-upload>
              <div>
                <div class="imgsdata" v-for="(item, key) in imgallurl" :key="key">
                  <!--{{ item }}-->
                  <div class="imgs">
                    <img :src="item" alt="">
                  </div>
                  <div class="btndel" @click="clickremoveimg(key)">X</div>
                </div>
              </div>
            </el-form-item>
          </el-form>
          <!--//封面图-->
          <el-form label-width="200px">
            <el-form-item label="封面图:">
              <div class="businesst">
                <label type="button" class="btn">
                  <el-upload class="avatar-uploder filepath" action="http://api_devs.wanxikeji.cn/api/savePic" :show-file-list="false" :on-success="uploadSuccess" name="img">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" width="100%" alt="" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </label>
              </div>
            </el-form-item>
          </el-form>
        </form>
      </div>
      <!--//sku-->
      <div class="skudatas">
        <div id="app">
          <div class="container" style="text-align: center">
            <span>sku:</span>
            <el-input v-model="titel" placeholder="请输入规格" style="width: 300px">
            </el-input>
            <el-button type="primary" @click="addTitle">添加规格</el-button>
            <div v-for="(item, index) in list" :key="index">
              <h4>
                {{ item.titel }}
                <el-button type="danger" @click="deleTitle(index)" icon="el-icon-delete" circle></el-button>
                <el-input v-model="item.value" placeholder="请输入规格值" style="width: 200px"></el-input>
                <el-button type="primary" @click="addValue(index)">添加值</el-button>
              </h4>
              <div style="display: flex; flex-warp: warp; justify-content: center">
                <div v-for="(item2, index2) in item.list" :key="index2">
                  <el-input v-model="item2.value" placeholder="请输入内容" style="width: 200px"></el-input>
                  <el-button type="danger" @click="deleteValue(index, index2)" icon="el-icon-delete" circle></el-button>
                </div>
              </div>
            </div>
            <h1>
              <el-button type="primary" @click="gennerateData">
                生成
              </el-button>
            </h1>
          </div>
        </div>
        <!-- spu -->
        <div class="container" style="text-align: center">
          <span>spu:</span>
          <el-input v-model="sputitel" placeholder="请输入规格" style="width: 300px">
          </el-input>
          <el-button type="primary" @click="addspuTitle">添加规格</el-button>
          <div v-for="(item, index) in spulist" :key="index">
            <h4>
              {{ item.spu }}
              <el-input v-model="item.val" placeholder="请输入规格值" style="width: 200px"></el-input>
              <el-button type="danger" @click="delespuTitle(index)" icon="el-icon-delete" circle></el-button>
            </h4>
          </div>
          <h1>
            <el-button type="primary" @click="spuData"> 生成 </el-button>
          </h1>
        </div>
      </div>
      <!--<Mysku ref="mysku"> </Mysku>-->
    </div>
    <div class="skudata" v-show="spushow">
      <div class="spupublic">
        <div v-for="(item, index) in spuitems" :key="index" class="spuitem">
          <div class="gspu" v-for="(itemss, key) in spuidata" :key="key">
            {{ itemss }}：{{ item[itemss] }}
          </div>
          库存：<el-input v-model="item.stock" type="number" placeholder="请输入库存" style="width: 200px"></el-input>
          价格：
          <el-input v-model="item.price" type="number" placeholder="请输入价格" style="width: 200px"></el-input>
        </div>
        <div class="spupublic1">
          <el-button type="primary" @click="skudata2">确定</el-button>
          <el-button type="primary" @click="skudata1">取消</el-button>
        </div>
      </div>
    </div>
    <div>商品详情</div>
    <!-- ruleForm.desc -->
    <div class="editor">
      <div id="editor" class="editorTitle"></div>
    </div>
    <input type="file" id="file" name="" @change="change" style="display: none" />
    <div class="tbtn">
      <el-button type="primary" @click="open2">商品上架</el-button>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
import axios from "axios";
export default {
  created() {
    //this.editor = new E(this.$refs.div);
    this.myaxios({
      url: "api/admin/goodsTypeList",
      method: "post",
      //带参数(用post传的话，下面必须用data;用get传的话用params)
      data: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => {
      res.data.data.forEach((ele) => {
        if (ele.parent_id == 0) {
          this.options.push(ele);
        } else {
          this.allclassdata.push(ele);
        }
      });
    });
  },
  data() {
    return {
      vHtml: "",
      editor: "",
      editorhtml: "",
      //一级分类
      options: [],
      //二级分类
      teooption: [],
      //所有分类列表
      allclassdata: [],
      value: "",
      values: "",
      ruleForm: {
        name: "",
        desc: "",
        radio: "0",
        price: "",
      },
      shopID: "",
      num: 1,
      dialogImageUrl: "",
      fileList: "",
      imageUrl: "",
      imgsrc: "",
      //富文本内容
      imgallurl: [],
      imgallurlstr: "",
      titel: "", //规格名称
      list: [], //表中生成前的数据
      tableTitle: [], //表头
      tableContent: [], //生成后表中的数据
      delectFlag: false,
      sputitel: "",
      spulist: [],
      spushow: false,
      spuitems: [],
      spuidata: [], //sku建
      richtext: false,
    };
  },
  mounted() {
    let then = this;
    this.editor = new E("editor");
    this.editor.onchange = function () {
      then.editorhtml = this.$txt.html();
      console.log(this.$txt.html());
    };
    this.editor.config.uploadImgUrl =
      "http://api_devss.wanxikeji.cn/api/savePic";

    // 配置全屏功能按钮是否展示
    this.editor.create(); // 创建富文本实例
    this.list = [
      {
        new: false,
        sort: 0,
        titel: "颜色",
        list: [{ value: "红色" }, { value: "蓝色" }],
      },
      {
        new: false,
        sort: 1,
        titel: "尺码",
        list: [{ value: "x" }, { value: "l" }],
      },
      {
        new: false,
        sort: 2,
        titel: "大小",
        list: [{ value: "小" }, { value: "中" }],
      },
    ];
  },
  methods: {
    //测试2分支newcqb============================
    ce(){
     let arr=[]
     for(let i=0;i<12;i++){
       arr.push(i)
     }
    },
    //====================================
    change(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("img", file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      let than = this;
      // 文件上传接口
      axios
        .post("http://api_devs.wanxikeji.cn/api/savePic", formData, config)
        .then((res) => {
          this.editor.$txt.append(
            `<img src="http://api_devs.wanxikeji.cn/${res.data.data}" class="images" />`
          );
          than.editorhtml = than.editor.$txt.html()//这是富文本;
        });
    },

    skudata1() {
      this.spushow = false;
      let obj = {
        specList: [],
        skuList: [],
      };

    },
    skudata2() {
      let objspe = {};

      this.spushow = false;
      let arr = [];
      for (let j = 0; j < this.spuitems.length; j++) {
        let objs = {};
        let as = [];
        for (let i = 0; i < this.spuidata.length; i++) {
          let m = this.spuidata[i];
          as.push(this.spuitems[j][m]);
          objs.specs = as;
          console.log(this.spuitems[j][m]);
        }
        as.push(this.spuitems[j].stock);
        as.push(this.spuitems[j].price);
        arr.push(objs);
      }
      //==========
      console.log(arr);
      //=========
      let arrspu = [];
      for (let i = 0; i < this.spuidata.length; i++) {
        let objss = {};
        let arrss = [];
        objss.titel = this.spuidata[i];
        for (let j = 0; j < this.spuitems.length; j++) {
          let m = this.spuidata[i];
          arrss.push(this.spuitems[j][m]);
        }
        let s = Array.from(new Set(arrss));
        objss.list = s;
        //console.log(arrss);
        arrspu.push(objss);
      }
      //======
      console.log(arrspu);
      let obj = {
        specList: [],
        skuList: [],
      };
      obj.skuList = arr;
      obj.specList = arrspu;
      console.log(obj);
      this.ruleForm.sku = JSON.stringify(obj);
    },
    cheitem() {
      this.teooption = [];
      let a = this;
      this.teooption = this.allclassdata.filter(function (val) {
        return val.parent_id == a.value;
      });
    },
    //热卖
    handleChange(value) {
      console.log(value);
    },
    //删除图片
    clickremoveimg(key) {
      this.imgallurl.splice(key, 1);
      console.log(this.imgallurl);
    },
    //图片合集
    uploadSuccessall(response, file) {
      console.log(response, file);
      this.dialogImageUrl = "http://api_devs.wanxikeji.cn/" + response.data;
      this.imgallurl.push(this.dialogImageUrl);
    },
    //封面图片
    uploadSuccess(response) {
      this.imageUrl = "http://api_devs.wanxikeji.cn/" + response.data;
    },
    // 删除规格
    deleTitle(index) {
      const title = this.list[index].title;
      const tempList = JSON.parse(JSON.stringify(this.list)); //删之前先保存一份用于后面判断
      this.list.splice(index, 1);
      //删除完让sort重新获取值  不然后面添加规格排序会乱
      this.list.forEach((item, index) => {
        item.sort = index;
      });
      if (!this.tableContent.length) {
        return false;
      }
      // 如果当前删除的规格里面没有值就不用在this.tableContent中删除数据
      if (!tempList[index].list.length) return false;
      // 如果删除的是最后一个规格，则清空所有数据
      if (this.tableContent[0][1].type != "规格") {
        this.tableContent = [];
        this.tableTitle = [];
        return false;
      }
      // 删除表中整列的数据
      this.deleteRowData(title);
      // 递归去重
      for (let i = 0; i < this.tableContent.length; i++) {
        for (let j = i + 1; j < this.tableContent.length; j++) {
          this.recursionJudgeValue(i, j, 0, true);
          if (this.delectFlag) {
            this.tableContent.splice(j, 1);
            j--;
          }
        }
      }
      // 重新生成表头
      this.handleTableHead();
    },
    //删除规格值
    deleteValue(index, index2) {
      if (!this.tableContent.length) {
        this.list[index].list.splice(index2, 1);
        return false;
      }
      const length = this.list[index].list.length;
      const value = this.list[index].list[index2].value;
      const titel = this.list[index].titel;
      this.list[index].list.splice(index2, 1);
      if (length > 1) {
        //如果有多个值就删除this.tableContent中所有带有这个值的哪一行 content:
        for (let i = 0; i < this.tableContent.length; i++) {
          value: for (let j = 0; j < this.tableContent[i].length; j++) {
            if (this.tableContent[i][j].value == value) {
              this.tableContent.splice(i, 1);
              i--;
              break value;
            }
          }
        }
      } else {
        this.list[index].new = true;
        this.deleteRowData(titel);
        if (
          this.tableContent.length === 1 &&
          this.tableContent[0][0].type != "规格"
        ) {
          this.tableContent = [];

          this.tableTitle = [];
          return false;
        }
      }
    },
    // 递归去重
    recursionJudgeValue(i, j, count, flag) {
      let tempFlag =
        this.tableContent[i][count].value == this.tableContent[j][count].value;
      let tempCount = count;
      const flag2 = flag && tempFlag;
      if (tempCount < this.list.length) {
        tempCount++;
        this.recursionJudgeValue(i, j, tempCount, flag2);
      } else {
        this.delectFlag = flag2;
      }
    },
    //添加规格
    addTitle() {
      if (!this.titel) {
        return this.$message.warning("请填写规格在添加");
      }
      this.list.push({
        titel: this.titel, //规格
        list: [], //规格值
        sort: this.list.length,
        new: this.tableContent.length ? true : false, //用于判断是否新规格
      });
      //console.log();
    },
    //添加规格值
    addValue(index) {
      if (!this.list[index].value) {
        return this.$message.warning("请填写规格值在添加");
      }
      this.list[index].list.push({
        value: this.list[index].value, //规格值
        new: this.tableContent.length ? true : false, //用于判断是否新规格值
      });
      this.list[index].value = "";
    },
    //生成数据
    gennerateData() {
      if (!this.list.length) return false;
      const arr = [];
      const listData = this.list.filter((item) => item.list.length); //去掉没有值的规格
      console.log(listData);
      let as = [];
      listData.forEach((item) => {
        const tempList = [];
        as.push(item.titel);
        item.list.forEach((item2) => {
          let obj = {};
          obj[item.titel] = item2.value;
          tempList.push(obj);
        });
        console.log(tempList);
        //console.log(item);
        arr.push(tempList);
      });
      this.spuidata = as;
      console.log(as);
      const data = this.cartesianProductOf(...arr);
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        data[i] = Object.assign({}, ...data[i]);
      }
      for (let i = 0; i < data.length; i++) {
        data[i].price = 0;
        data[i].stock = 0;
      }
      this.spuitems = [...data];
      console.log(this.spuitems[0], this.spuidata);
      //this.ruleForm.sku = data;
      this.spushow = true;
    },
    //笛卡尔积
    cartesianProductOf() {
      return Array.prototype.reduce.call(
        arguments,
        function (a, b) {
          var ret = [];
          a.forEach(function (a) {
            b.forEach(function (b) {
              ret.push(a.concat(b));
              // ret.push([...a, ...b]);
            });
          });
          return ret;
        },
        [[]]
      );
    },
    //spu添加
    addspuTitle() {
      if (!this.sputitel) {
        return this.$message.warning("请填写规格在添加");
      }
      this.spulist.push({ spu: this.sputitel });
    },
    //spu删除
    delespuTitle(index) {
      this.spulist.splice(index, 1);
    },
    //spu生成
    spuData() {
      if (!this.spulist.length) return false;
      console.log(this.spulist[0].val);
      let arr = [];
      for (let i = 0; i < this.spulist.length; i++) {
        console.log(i);
        if (this.spulist[i].val == undefined || this.spulist[i].val == "") {
          arr.push(i);
        }
      }
      if (arr.length == 0) {
        this.$message({
          message: "spu生成成功",
          type: "success",
        });
        this.ruleForm.spu = JSON.stringify(this.spulist);
        console.log(this.ruleForm.spu);
      } else {
        this.$message({
          message: "spu生成失败",
          type: " de feat",
        });
      }
      //console.log(obj)
    },
    //上传
    open2() {
      let result = Object.keys(this.ruleForm).map((el) => {
        return this.ruleForm[el];
      });
      let instrument = [];
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        if (result[i] !== "") {
          instrument.push(i);
        }
      }
      if (
        // instrument.length == 8 &&
        this.imageUrl !== "" &&
        this.imgallurl.length > 0
      ) {
        // this.imgallurlstr = this.imgallurl;
        let objs = {};
        objs.name = this.ruleForm.name;
        objs.id = "lsycqb";
        let name = JSON.stringify(objs);
        //let token = localStorage.getItem("token");
        console.log(this.imageUrl);
        console.log(this.imgallurl);
        this.myaxios({
          url: "api/admin/addModifyGood",
          method: "post",
          //带参数(用post传的话，下面必须用data;用get传的话用params)
          data: {
            token: localStorage.getItem("token"),
            good_name: name,
            type_id: this.values,
            type_parent_id: this.value,
            price: Number(this.ruleForm.price),
            img: String(this.imageUrl),
            imgs: String(this.imgallurl),
            info: this.editorhtml,
            is_new: Number(this.ruleForm.radio),
            colour: this.ruleForm.spu,
            edition: this.ruleForm.sku,
            good_id: this.shopID,
          },
        }).then((res) => {
          console.log(res);
          this.$router.push("/Goodsmanage").catch(() => {});
          this.$message({
            message: res.data.msg,
            type: "success",
          });
        });
      } else {
        this.$message({
          message: "有输入框没有填",
          type: "be defeated",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tbtn {
  margin-left: 200px;
}
.businesst {
  margin-top: 7px;
  vertical-align: top;
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 2px dashed #929292;
  label {
    display: block;
    input {
      opacity: 0;
      width: 0px;
      height: 30px;
    }
    img {
      margin-top: -5px;
      width: 100px;
      height: 64px;
    }
  }
}
.avatar-uploder {
  width: 100px;
  height: 100px;
}
.formmenu {
  padding: 20px;
  display: flex;
}
.el-form-item__content {
  width: 360px;
}
.skudata {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba($color: #929292, $alpha: 0.5);
}
.spupublic {
  margin-left: 200px;
  background-color: white;
}
.spupublic1 {
  margin-left: 200px;
}
.spuitem {
  margin: 10px 0;
  display: flex;
}
.gspu {
  text-align: center;
  margin: 0 20px;
}
#editor {
  height: 500px;
}
.imgs {
  width: 100px;
  width: 100px;
  img {
    width: 100%;
    height: auto;
  }
}
.imgsdata {
  display: flex;
  .btndel {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
}
.checlla {
  margin: 10px 0;
  span {
    display: inline-block;
    width: 200px;
    text-align: right;
  }
}
.skudatas {
  margin-left: 20px;
}
</style>
