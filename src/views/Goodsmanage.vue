<!--
 * @author: Kate-sy
 * @create: 2021-07-07 10:45 AM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-09-13 16:50 PM
 * @desc: 商品管理页（增、删、修改、查询）  
-->
<template>
  <div class="goodsman_wrap">
    <!-- 查询商品 -->
    <div class="top">
      <div class="goodsquery">
        <div class="goodsq_left">
          商品名称
          <input type="text" placeholder="请输入商品名称" ref="searchint" />
          <button class="search" @click="search">
            <svg t="1625628476046" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2398" width="14" height="14">
              <path d="M959.52557 843.97588 783.748171 702.726879c35.867906-58.81964 56.906058-127.674844 56.906058-201.608717 0-214.430744-173.829024-388.262838-388.260791-388.262838S64.132646 286.687418 64.132646 501.118162s173.829024 388.262838 388.260791 388.262838c122.906238 0 232.272088-57.267285 303.416428-146.394185l173.10964 139.091872L959.52557 843.97588zM452.393437 840.48743c-187.126888 0-339.367221-152.240333-339.367221-339.368244s152.240333-339.368244 339.367221-339.368244 339.367221 152.240333 339.367221 339.368244S639.520325 840.48743 452.393437 840.48743z" p-id="2399" fill="#ffffff"></path>
            </svg>
            查询
          </button>
          <button class="resetsearch" @click="reset">
            <svg t="1625628717376" class="icon" viewBox="0 0 1271 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2577" width="13" height="13">
              <path
                d="M871.97099 850.891158a425.966862 425.966862 0 0 1-254.114811 79.820585c-11.939526-0.157099-23.736234-1.085411-35.518662-2.013723-4.812943-0.457015-9.454505-1.228229-14.281729-1.999443-9.311688-1.228229-18.466276-2.31364-27.463766-4.284518-5.584156-0.928312-11.168312-2.613556-16.452552-3.856067-8.840391-1.999442-17.680781-4.013166-26.221255-6.626723-4.041729-1.542427-7.912078-2.856346-12.110907-4.612998-10.082901-3.241953-19.994421-6.783821-29.477489-10.782706-2.170823-0.928312-4.284519-1.856625-6.35537-2.613557-11.168312-5.241395-22.350907-10.625607-33.047922-16.338298-0.457015-0.314198-0.928312-0.457015-1.428173-0.771213a435.592748 435.592748 0 0 1-98.815286-75.493222c-0.457015-0.471297-0.928312-1.085411-1.428173-1.542427-8.99749-9.240279-17.680781-18.794756-25.907057-29.120446-1.713808-2.156541-3.256234-4.155983-5.127141-6.626723a445.761339 445.761339 0 0 1-94.944937-275.480279h105.356318l-127.378745-252.086806L0 491.748508h104.356597a536.064714 536.064714 0 0 0 92.57417 301.444463 22.565132 22.565132 0 0 0 1.98516 3.656122c5.969763 8.868954 12.853556 16.895286 19.166081 25.050154 2.55643 2.956318 4.684407 6.041172 7.240837 9.425941 9.368815 11.539637 19.73735 22.650823 29.991632 33.490656 1.142538 1.128257 1.98516 1.970879 2.856346 2.956318A522.611325 522.611325 0 0 0 375.609484 957.561395c1.128257 0.714086 2.127978 1.128257 3.399052 1.970878 12.353696 6.755258 25.135844 13.096346 37.903709 18.723348 3.270516 1.428173 6.398215 2.956318 9.511632 4.284518 11.082622 4.784379 22.436597 8.726137 33.804854 12.853557 5.398494 1.970879 10.65417 3.656123 16.181199 5.484184 9.997211 2.956318 20.165802 5.484184 30.534338 7.883515 6.812385 1.685244 13.481953 3.370488 20.437155 4.784379a60.397434 60.397434 0 0 0 8.369093 1.970879c9.797266 1.828061 19.451715 2.670683 29.106165 3.941757 3.556151 0.714086 7.140865 1.271074 10.511352 1.685244 17.466555 1.685244 34.790293 2.856346 52.256848 2.856346 106.056123 0 234.36318-33.933389 313.726751-108.84106 23.721953-22.522287 19.108954-53.370823 8.826109-64.710516-14.03894-15.709902-47.129707-21.751074-78.163906 0.599833z m294.303599-318.768201A533.951018 533.951018 0 0 0 1074.414505 231.535397c-0.856904-1.428173-1.428173-2.956318-2.127978-4.284518-7.526471-10.554198-15.19576-20.265774-23.007866-30.248703a33.590628 33.590628 0 0 1-2.556429-3.656123 524.739303 524.739303 0 0 0-195.088424-149.172664c-2.270795-0.842622-4.113138-1.970879-6.398215-2.856346-12.068061-5.070014-24.421757-9.440223-36.918271-13.79615-4.284519-1.428173-8.811827-3.099135-13.2106-4.513027-10.939805-3.370488-21.72251-6.041172-32.847977-8.726137-6.11258-1.428173-12.353696-2.956318-18.451995-4.284518-2.984881-0.571269-5.826946-1.428173-8.954644-2.113696-8.226276-1.428173-16.324017-2.113696-24.707392-3.241953-5.826946-0.714086-11.425384-1.542427-17.038103-2.113696-13.910404-1.428173-27.677992-1.970879-41.417015-2.113696-2.55643 0-4.970042-0.41417-7.526472-0.41417-0.428452 0-0.856904 0.142817-1.285356 0.142817a511.800056 511.800056 0 0 0-298.173947 96.116039c-29.47749 20.979861-25.52145 50.585886-12.339414 65.524575 9.368815 10.611325 37.960837 25.592859 61.140084 7.912078 73.279554-55.498801 162.26901-80.577517 251.78689-79.806304 12.853556 0.157099 25.707113 0.771213 38.160781 1.999442 3.88463 0.314198 7.59788 0.928312 11.425383 1.542427a303.715258 303.715258 0 0 1 30.72 4.927197c4.284519 0.771213 8.854672 1.999442 13.039219 2.856345 10.082901 2.31364 19.708787 4.62728 29.320391 7.697853a68.937908 68.937908 0 0 1 8.997489 3.22767c11.168312 3.698968 22.036709 7.555035 32.576625 12.168034 1.24251 0.314198 2.170823 1.228229 3.256234 1.542427a435.749847 435.749847 0 0 1 163.66862 125.10795 9.568759 9.568759 0 0 0 0.628396 0.928312 446.43258 446.43258 0 0 1 98.543933 280.407476H970.15788l133.648424 255.000278 166.967699-255.157378z m0 0"
                p-id="2578" fill="#333333"></path>
            </svg>重置
          </button>
        </div>
        <div class="goodsq_rieht" @click="exit">
          <img src="/img/pho.jpg" alt="" />
          <svg t="1625633752722" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5618" width="10" height="10">
            <path d="M511.96 766.27L67 257.73h890L511.96 766.27z" p-id="5619" fill="#707070"></path>
          </svg>
          <div class="exitdl" v-show="eixtdl">退出登录</div>
        </div>
      </div>
    </div>
    <!--序号、 商品id、商品名称 、价格、创建时间 -->
    <div class="goodsitem_wraps">
      <el-table :data="initialdata" border style="width: 97%" height="680" class="table" @selection-change="selectone">
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column label="序号" width="100" type="index">
        </el-table-column>
        <el-table-column prop="good_id" label="商品id" width="180">
        </el-table-column>
        <el-table-column prop="good_name" label="商品名称" width="580">
        </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
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
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 50]" :page-size="pageitems" layout="total, sizes, prev, pager, next, jumper" :total="allcont">
      </el-pagination>
    </div>
    <!-- 修改商品信息 -->
    <div class="resetgoods" v-show="resgoods">
      <div class="resetgoods-wrap">
        <div class="restop">
          <span>修改商品</span>
          <svg t="1625649587946" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1900" width="20" height="20" @click="loceremsg">
            <path d="M560.264533 512L512 463.735467l248.9344-248.9344 48.264533 48.264533L560.264533 512l248.9344 248.9344-48.264533 48.264533L512 560.264533l-248.9344 248.9344-48.264533-48.264533L463.735467 512 512 560.264533l-248.9344 248.9344-48.264533-48.264533L463.735467 512 214.801067 263.0656l48.264533-48.264533L512 463.735467l248.9344-248.9344 48.264533 48.264533z" p-id="1901" fill="#515151"></path>
          </svg>
        </div>
        <div class="formmenu">
          <div>
            <div class="checlla">
              <span> 选择商品类别: </span>
              <el-select filterable placeholder="请选择" v-model="value" @change="cheitem">
                <el-option v-for="(item,index ) in options" :key="index" :label="item.type_name" :value="item.good_type_id">
                </el-option>
              </el-select>
            </div>
            <div class="checlla">
              <span> 选择商品二级类别:</span>
              <el-select filterable placeholder="请选择" v-model="values">
                <el-option v-for="(item,index ) in teooption" :key="index" :label="item.type_name" :value="item.good_type_id">
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
                  <el-input type="number" v-model.number="ruleForm.price"></el-input>
                </el-form-item>
                <el-form-item label="商品详情:">
                  <el-button type="primary" @click="textclick">使用富文本</el-button>
                  <!--<el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
                </el-form-item>
                <el-form-item label="是否热卖:">
                  <el-radio v-model="ruleForm.radio" label='0'>否</el-radio>
                  <el-radio v-model="ruleForm.radio" label='1'>是</el-radio>
                  <!--<el-input-number v-model="ruleForm.num" @change="handleChange" :min="0" :max="1" label="描述文字"></el-input-number>-->
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
                  <div style="
                      display: flex;
                      flex-warp: warp;
                      justify-content: center;
                    ">
                    <div v-for="(item2, index2) in item.list" :key="index2">
                      <el-input v-model="item2.value" placeholder="请输入内容" style="width: 100px; margin:20px 0px;"></el-input>
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
                {{itemss}}：{{ item[itemss] }}
              </div>
              价格：
              <el-input v-model="item.price" type="number" placeholder="请输入价格" style="width: 200px"></el-input>
              库存：<el-input v-model="item.stock" type="number" placeholder="请输入库存" style="width: 200px"></el-input>
            </div>
            <div class="spupublic1">
              <el-button type="primary" @click="skudata2">确定</el-button>
              <el-button type="primary" @click="skudata1">取消</el-button>
            </div>
          </div>
        </div>
        <div class="tbtn">
          <el-button type="primary" @click="open2">商品上架</el-button>
        </div>
      </div>
    </div>
    <div v-show="richtext" class="richtext">
      <div ref="div" v-show="richtext" style="height: 500px"></div>
      <div class="spupublic1">
        <el-button type="primary" @click="richtextata2">确定</el-button>
        <el-button type="primary" @click="richtextata1">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
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
      this.arrs = res.data.data;
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
      arrs: [],
      //修改、删除按钮
      delbtndis: true,
      //删除多条商品数据
      delmoredata: [],
      //退出登录
      eixtdl: false,
      //初始商品数据
      initialdata: [],
      //修改商品信息层
      resgoods: false,
      //element当前页
      currentPage4: 1,
      //数据总条数
      allcont: 0,
      //当前页数据
      nowpagedata: [],
      //每页默认条数
      pageitems: 10,
      //搜索到的数据
      searchdata: [],
      //!修改商品数据
      //一级分类
      options: [],
      //二级分类
      teooption: [],
      //所有分类列表
      allclassdata: [],
      value: "",
      values: "",
      valuess: "",
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
      imgallurl: [],
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
      editor: null,
    };
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
    richtextata2() {
      if (this.editor.txt.html()) {
        this.richtext = false;
        this.editor.txt.html();
        console.log(this.editor.txt.html());
        this.ruleForm.desc = this.editor.txt.html();
        this.$message({
          message: "富文本生成成功",
          type: "success",
        });
        this.editor.destroy();
        this.editor = null;
      } else {
        this.$message({
          message: "富文本生成失败",
          type: "defaet",
        });
      }
      //// 销毁编辑器
      //this.editor.destroy();
      //this.editor = null;
    },
    richtextata1() {
      this.richtext = false;
      // 销毁编辑器
      this.editor.destroy();
      this.editor = null;
    },
    //富文本
    textclick() {
      this.richtext = true;
      this.editor = new E(this.$refs.div);
      this.editor.config.showLinkImg = false; //关闭网络路径图片方式
      this.editor.config.uploadImgMaxLength = 2;
      this.editor.config.uploadImgServer =
        "http://api_devs.wanxikeji.cn/api/savePic"; // 上传图片的接口地址
      this.editor.config.uploadFileName = "img"; // formdata中的name属性
      this.editor.config.uploadImgHooks = {
        fail: (xhr, editor, result) => {
          // 插入图片失败回调
          console.log(result);
          console.log(xhr, editor);
        },
        success: (xhr, editor, result) => {
          // 图片上传成功回调
          console.log(xhr, editor);
          console.log(result);
        },
        timeout: (xhr, editor) => {
          console.log(xhr, editor);
          // 网络超时的回调
          console.log("网络超时");
        },
        error: (xhr, editor) => {
          console.log(xhr, editor);
          // 图片上传错误的回调
          console.log("上传错误");
        },
        //回显
        customInsert: (insertImg, result) => {
          let url = "http://api_devs.wanxikeji.cn/" + result.data;
          insertImg(url);
        },
      };
      this.editor.create();
    },
    //搜索重置按钮
    reset() {
      this.$refs.searchint.value = "";
    },
    //点击头像
    exit() {
      if (this.eixtdl == false) {
        this.eixtdl = true;
      } else {
        this.eixtdl = false;
      }
    },
    //修改商品信息
    resetitem(id, name) {
      console.log(id);
      console.log(name);
    },
    //封装请求数据api
    getgoodsapi() {
      this.myaxios({
        url: "api/admin/goodList",
        method: "post",
        data: {
          token: localStorage.getItem("token"),
          page: this.currentPage4,
          size: this.pageitems,
        },
      }).then((res) => {
        this.allcont = res.data.data.count;
        this.initialdata = [];
        this.nowpagedata = [];
        res.data.data.data.forEach((ele) => {
          let a = ele.update_time * 1000;
          ele.update_time = new Date(a).toLocaleString();
          try {
            let a = JSON.parse(ele.good_name);
            if (a.id == "lsycqb") {
              ele.good_name = a.name;
              this.initialdata.push(ele);
              this.nowpagedata.push(ele);
            } else {
              let b = JSON.parse(ele.img);
              ele.good_name = a.name;
              ele.img = b[0];
              this.initialdata.push(ele);
              this.nowpagedata.push(ele);
            }
          } catch (error) {
            this.initialdata.push(ele);
            this.nowpagedata.push(ele);
          }
        });
      });
    },

    //分页方法
    handleSizeChange(val) {
      this.pageitems = val;
      this.getgoodsapi();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.getgoodsapi();
    },
    //搜索商品
    search() {
      this.searchdata = [];
      let intvalue = this.$refs.searchint.value;
      // initialdata
      // nowpagedata
      this.nowpagedata.forEach((ele) => {
        if (ele.good_name.indexOf(intvalue) != -1) {
          this.searchdata.push(ele);
          this.initialdata = this.searchdata;
        }
        if (intvalue == "") {
          this.getgoodsapi();
        }
      });
    },
    //商品单选
    selectone(e) {
      this.delmoredata.push(e);
      if (e.length != 0) {
        this.$refs.delallbtn.style.cssText = "background-color: #ff4d4d;";
        this.delbtndis = false;
      } else {
        this.delbtndis = true;
        this.$refs.delallbtn.style.cssText = "background-color: #ffeded;";
      }
    },
    //删除商品
    handleDelete(data) {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h("p", null, [
          h("span", null, "是否删除此商品"),
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
          url: "api/admin/deleteGood",
          method: "POST",
          data: {
            token: localStorage.getItem("token"),
            good_id: data.good_id,
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
    //关闭修改信息和新增页面
    loceremsg() {
      this.resgoods = false;
    },
    //编辑商品信息
    handleEdit(data) {
      console.log(this.list);
      this.myaxios({
        url: "api/admin/goodInfo",
        method: "post",
        data: {
          token: localStorage.getItem("token"),
          good_id: data.good_id,
        },
      }).then((res) => {
        console.log(res.data.data, this.spulist);
        //this.spulist = [];
        this.spulist = JSON.parse(JSON.parse(res.data.data.info[0].colour));
        console.log(this.spulist, this.spulist[0]);
        this.ruleForm.spu = JSON.stringify(this.spulist);
        let a = JSON.parse(res.data.data.info[0].edition);
        console.log(a);
        this.ruleForm.sku = JSON.stringify(JSON.parse(a));
        this.list = JSON.parse(a).specList;
        console.log(this.list);
        this.ruleForm.desc = JSON.parse(res.data.data.info[0].info);
        this.$refs.div.innerHTML = JSON.parse(res.data.data.info[0].info);
        console.log(this.ruleForm.desc);
        for (let i = 0; i < this.list.length; i++) {
          console.log(this.list[i]);
          let s = this.list[i];
          let arr = [];
          for (let j = 0; j < s.list.length; j++) {
            let obj = {};
            console.log(s.list[j]);
            obj.value = s.list[j];
            arr.push(obj);
            console.log(arr);
          }
          this.list[i].list = arr;
        }
        let b = JSON.parse(res.data.data.info[0].imgs);
        console.log(b);
        this.imgallurl = b.split(",");
      });
      //this.cheitem();
      this.ruleForm.name = data.good_name;
      this.ruleForm.num = data.status;
      this.ruleForm.price = data.price;
      this.values = data.type_id;
      this.value = data.type_parent_id;
      this.shopID = data.good_id;
      this.imageUrl = data.img;
      this.resgoods = true;
      console.log(this.arrs);
      for (let i = 0; i < this.arrs.length; i++) {
        if (this.values == this.arrs[i].good_type_id) {
          this.teooption.push(this.arrs[i]);
        }
      }
    },
    //!修改商品数据
    skudata1() {
      this.spushow = false;
      let obj = {
        specList: [],
        skuList: [],
      };
      console.log(obj);
    },
    skudata2() {
      let objspe = {};
      console.log(objspe);
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
      const title = this.list[index].title;
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
        this.deleteRowData(title);
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
      //if (!this.title) {
      //  return this.$message.warning("请填写规格在添加");
      //}
      this.list.push({
        title: this.title, //规格
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

      let ab = JSON.parse(this.ruleForm.sku).skuList;
      console.log(ab);
      for (let i = 0; i < ab.length; i++) {
        //let s = 0;
        //let p = 0;
        console.log(ab[i]);
        for (let j = 0; j < ab[i].specs.length; j++) {
          let l = ab[i].specs.length - 1;
          console.log(ab[i].specs[l], ab[i].specs.length, j, l);
          //  p = ab[i].specs[length] - 0;
          //  s = ab[i].specs[length - 1] - 0;
          data[i].price = ab[i].specs[l];
          data[i].stock = ab[i].specs[l - 1];
        }
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
      console.log(this.spulist);
      this.ruleForm.spu = JSON.stringify(this.spulist);
      console.log(this.ruleForm.spu);
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
        let objs = {};
        objs.name = this.ruleForm.name;
        objs.id = "lsycqb";
        let name = JSON.stringify(objs);
        //let token = localStorage.getItem("token");
        this.myaxios({
          url: "api/admin/addModifyGood",
          method: "post",
          //带参数(用post传的话，下面必须用data;用get传的话用params)
          data: {
            token: localStorage.getItem("token"),
            good_name: name,
            type_id: this.values,
            type_parent_id: this.value,
            price: this.ruleForm.price,
            img: this.imageUrl,
            imgs: String(this.imgallurl),
            info: this.ruleForm.desc,
            is_new: Number(this.ruleForm.radio),
            colour: this.ruleForm.spu,
            edition: this.ruleForm.sku,
            good_id: this.shopID,
          },
        }).then((res) => {
          console.log(res);
          this.resgoods = false;
          location.reload();
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
  mounted() {
    this.getgoodsapi();
    //!修改商品数据
    this.list = [
      // {
      //   new: false,
      //   sort: 0,
      //   title: "颜色",
      //   list: [{ value: "红色" }, { value: "蓝色" }],
      // },
      // {
      //   new: false,
      //   sort: 1,
      //   title: "尺码",
      //   list: [{ value: "x" }, { value: "l" }],
      // },
      // {
      //   new: false,
      //   sort: 2,
      //   title: "大小",
      //   list: [{ value: "小" }, { value: "中" }],
      // },
    ];
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/public.scss";
.goitemfont {
  @include font(14px, #333);
  text-align: center;
}
.goodatitlefont {
  @include font(15px, #515a6e, bold);
}
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

.goodsman_wrap {
  width: 100%;
  position: relative;
  z-index: 100;
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
    z-index: -10;
  }
  .block {
    @include flex(center);
    margin-top: 20px;
  }
  .resetgoods {
    //width: calc(100% - 200px);
    position: fixed;
    top: 0;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.3);
    @include flex(center, center);
    .resetgoods-wrap {
      position: absolute;
      width: 80%;
      top: 20px;
      padding: 20px;
      margin-left: 200px;
      border-radius: 4px;
      background-color: #fff;
      overflow-y: auto;
      overflow-x: hidden;
      .restop {
        display: flex;
        @include flex(space-between, center);
        @include font(18px, #515151);
        margin-bottom: 25px;
        .title {
          flex-grow: 1;
        }
      }
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
    }
  }
}
.input {
  height: 28px;
  text-indent: 10px;
  margin-left: 5px;
  border-radius: 2px;
  border: 1px solid rgb(204, 204, 204);
}
.richtext {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 88888;
  background-color: rgba($color: #929292, $alpha: 0.5);
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