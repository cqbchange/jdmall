<!--
 * @author: CQBCode
 * @create: 2021-07-09 14:05 PM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-09 21:00 PM
 * @desc: 
-->
<template>
  <div id="app">
    <div class="container" style="text-align: center">
      <el-input v-model="titel" placeholder="请输入规格" style="width: 300px">
      </el-input>
      <el-button type="primary" @click="addTitle">添加规格</el-button>
      <div v-for="(item, index) in list" :key="index">
        <h4>
          {{ item.titel }}
          <el-button
            type="danger"
            @click="deleTitle(index)"
            icon="el-icon-delete"
            circle
          ></el-button>
          <el-input
            v-model="item.value"
            placeholder="请输入规格值"
            style="width: 200px"
          ></el-input>
          <el-button type="primary" @click="addValue(index)">添加值</el-button>
        </h4>
        <div style="display: flex; flex-warp: warp; justify-content: center">
          <div v-for="(item2, index2) in item.list" :key="index2">
            <el-input
              v-model="item2.value"
              placeholder="请输入内容"
              style="width: 200px"
            ></el-input>
            <el-button
              type="danger"
              @click="deleteValue(index, index2)"
              icon="el-icon-delete"
              circle
            ></el-button>
          </div>
        </div>
      </div>
    </div>
    <h1>
      <el-button type="primary" @click="gennerateData"> 生成 </el-button>
    </h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titel: '', //规格名称
        list: [], //表中生成前的数据
        tableTitle: [], //表头
        tableContent: [], //生成后表中的数据
        delectFlag: false,
      }
    },
    mounted() {
      this.list = [
        {
          new: false,
          sort: 0,
          titel: '颜色',
          list: [{ value: '红色' }, { value: '蓝色' }],
        },
        {
          new: false,
          sort: 1,
          titel: '尺码',
          list: [{ value: 'x' }, { value: 'l' }],
        },
        {
          new: false,
          sort: 2,
          titel: '大小',
          list: [{ value: '小' }, { value: '中' }],
        },
      ]
    },
    methods: {
      // 删除规格
      deleTitle(index) {
        const title = this.list[index].title
        const tempList = JSON.parse(JSON.stringify(this.list)) //删之前先保存一份用于后面判断
        this.list.splice(index, 1)
        //删除完让sort重新获取值  不然后面添加规格排序会乱
        this.list.forEach((item, index) => {
          item.sort = index
        })
        if (!this.tableContent.length) {
          return false
        }
        // 如果当前删除的规格里面没有值就不用在this.tableContent中删除数据
        if (!tempList[index].list.length) return false
        // 如果删除的是最后一个规格，则清空所有数据
        if (this.tableContent[0][1].type != '规格') {
          this.tableContent = []
          this.tableTitle = []
          return false
        }
        // 删除表中整列的数据
        this.deleteRowData(title)
        // 递归去重
        for (let i = 0; i < this.tableContent.length; i++) {
          for (let j = i + 1; j < this.tableContent.length; j++) {
            this.recursionJudgeValue(i, j, 0, true)
            if (this.delectFlag) {
              this.tableContent.splice(j, 1)
              j--
            }
          }
        }
        // 重新生成表头
        this.handleTableHead()
      },
      //删除规格值
      deleteValue(index, index2) {
        if (!this.tableContent.length) {
          this.list[index].list.splice(index2, 1)
          return false
        }
        const length = this.list[index].list.length
        const value = this.list[index].list[index2].value
        const titel = this.list[index].titel
        this.list[index].list.splice(index2, 1)
        if (length > 1) {
          //如果有多个值就删除this.tableContent中所有带有这个值的哪一行 content:
          for (let i = 0; i < this.tableContent.length; i++) {
            value: for (let j = 0; j < this.tableContent[i].length; j++) {
              if (this.tableContent[i][j].value == value) {
                this.tableContent.splice(i, 1)
                i--
                break value
              }
            }
          }
        } else {
          this.list[index].new = true
          this.deleteRowData(titel)
          if (
            this.tableContent.length === 1 &&
            this.tableContent[0][0].type != '规格'
          ) {
            this.tableContent = []

            this.tableTitle = []
            return false
          }
        }
      },
      // 递归去重
      recursionJudgeValue(i, j, count, flag) {
        let tempFlag =
          this.tableContent[i][count].value == this.tableContent[j][count].value
        let tempCount = count
        const flag2 = flag && tempFlag
        if (tempCount < this.list.length) {
          tempCount++
          this.recursionJudgeValue(i, j, tempCount, flag2)
        } else {
          this.delectFlag = flag2
        }
      },
      //添加规格
      addTitle() {
        if (!this.titel) {
          return this.$message.warning('请填写规格在添加')
        }
        this.list.push({
          titel: this.titel, //规格
          list: [], //规格值
          sort: this.list.length,
          new: this.tableContent.length ? true : false, //用于判断是否新规格
        })
        //console.log();
      },
      //添加规格值
      addValue(index) {
        if (!this.list[index].value) {
          return this.$message.warning('请填写规格值在添加')
        }
        this.list[index].list.push({
          value: this.list[index].value, //规格值
          new: this.tableContent.length ? true : false, //用于判断是否新规格值
        })
        this.list[index].value = ''
      },
      //生成数据
      gennerateData() {
        if (!this.list.length) return false
        const arr = []
        const listData = this.list.filter((item) => item.list.length) //去掉没有值的规格
        console.log(listData)
        listData.forEach((item) => {
          const tempList = []
          item.list.forEach((item2) => {
            let obj = {}
            obj[item.titel] = item2.value
            tempList.push(obj)
          })
          console.log(tempList)
          //console.log(item);
          arr.push(tempList)
          console.log(arr)
        })
        const data = this.cartesianProductOf(...arr)
        console.log(data)
      },
      //笛卡尔积
      cartesianProductOf() {
        return Array.prototype.reduce.call(
          arguments,
          function (a, b) {
            var ret = []
            a.forEach(function (a) {
              b.forEach(function (b) {
                ret.push(a.concat(b))
                // ret.push([...a, ...b]);
              })
            })
            return ret
          },
          [[]]
        )
      },
    },
  }
</script>

<style lang="scss" scoped></style>
