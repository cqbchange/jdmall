<!--
 * @author: CQBCode
 * @create: 2021-07-06 17:21 PM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-08 14:52 PM
 * @desc: 
-->
<template>
  <div class="login">
    <form class="login-form">
      <h3>京东商城后台管理系统</h3>
      <div class="username formpublic" :style="{ border: usenameborder }">
        <svg t="1625570863042" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3851" width="14" height="39">
          <path d="M512 332m-267 0a267 267 0 1 0 534 0 267 267 0 1 0-534 0Z" fill="#8a8a8a" p-id="3852"></path>
          <path d="M748.9 581.6c-68 44.9-149.3 71.1-236.9 71.1s-168.9-26.2-236.9-71.1C149.7 660.4 66.3 800 66.3 959.1h891.4c0-159.1-83.4-298.7-208.8-377.5z" fill="#8a8a8a" p-id="3853"></path>
        </svg>
        <input type="text" placeholder="账号" v-model="account" @blur="usenameblur" @focus="usenamefocus" ref="usenameinput" />
      </div>
      <div class="emptypublic nameempty">
        <div v-show="usename">
          {{ nameempty }}
        </div>
      </div>
      <div class="formpublic" :style="{ border: passwordborder }">
        <svg t="1625571754338" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4044" width="16" height="16">
          <path d="M512 575.813818a63.813818 63.813818 0 0 0-42.542545 111.383273v58.740364a42.542545 42.542545 0 0 0 85.08509 0v-58.740364c13.498182-12.101818 21.224727-29.416727 21.224728-47.569455A63.674182 63.674182 0 0 0 512 575.813818z m297.704727-191.394909h-42.496V278.109091a255.115636 255.115636 0 0 0-510.277818 0v106.263273h-42.542545a106.263273 106.263273 0 0 0-106.309819 106.263272v403.968a106.263273 106.263273 0 0 0 106.309819 106.263273h595.316363a106.263273 106.263273 0 0 0 106.170182-106.263273v-403.874909a106.216727 106.216727 0 0 0-106.170182-106.309818zM512 65.536a212.573091 212.573091 0 0 1 212.573091 212.573091v106.263273H299.426909V278.109091A212.666182 212.666182 0 0 1 512 65.536z m361.518545 829.160727a63.767273 63.767273 0 0 1-63.813818 63.720728H214.388364c-35.234909 0-63.767273-28.532364-63.860364-63.767273v-403.921455c0-35.188364 28.578909-63.813818 63.860364-63.813818h595.316363c35.188364 0 63.813818 28.532364 63.813818 63.767273v404.014545z" p-id="4045"></path>
        </svg>
        <input type="password" placeholder="密码" v-model="passwords" @blur="passwordblur" @focus="passwordfocus" ref="passwordinput" />
      </div>
      <div class="emptypublic passwordempty">
        <div v-show="password">
          {{ pwempty }}
        </div>
      </div>
      <div>
        <label for="forminput" class="label" @click="save">
          <input type="checkbox" id="forminput" ref="checkbox" :checked="checked" />
          <span>记住密码</span>
        </label>
      </div>
      <div class="register" @click="register()">登录</div>
    </form>
  </div>
</template>

<script>
import { login } from "@/api/login";
export default {
  data() {
    return {
      passwordborder: "1px solid gray",
      usenameborder: "1px solid gray",
      usename: false,
      password: false,
      account: "",
      passwords: "",
      savepasuse: {},
      checked: false,
      phonetitle: "",
      pwempty: "密码不能为空",
      nameempty: "用户名不能为空",
    };
  },
  methods: {
    usenamefocus() {
      //console.log(1);
      this.usenameborder = "1px solid #1890ff";
      this.usename = false;
    },
    usenameblur() {
      //console.log(2);
      let input = this.$refs.usenameinput.value;
      if (input === "") {
        this.usenameborder = "1px solid red";
        this.usename = true;
        this.nameempty = "用户名不能为空";
      } else {
        this.usenameborder = "1px solid gray";
        this.usename = false;
      }
      //console.log(input);
    },
    passwordblur() {
      //console.log(3);
      let input = this.$refs.passwordinput.value;
      if (input === "") {
        this.passwordborder = "1px solid red";
        this.password = true;
        this.pwempty = "密码不能为空";
      } else {
        this.passwordborder = "1px solid gray";
        this.password = false;
      }
    },
    passwordfocus() {
      this.password = false;
      this.passwordborder = "1px solid #1890ff";
      //console.log(4);
    },
    register() {
      if (this.account !== "" && this.passwords !== "") {
        let obj = {
          name: this.account,
          pw: this.passwords,
        };
        login(obj)
          .then((res) => {
            console.log(res);
            if (res.data.code == 2000) {
              localStorage.setItem(
                "account",
                JSON.stringify(res.data.data.admin_id)
              );
              this.$router.push("/Goodsmanage");
              localStorage.setItem("token", res.data.data.token);
            }
            if (res.data.code == 2010) {
              console.log(res.data.msg);
              if (res.data.msg == "用户不存在") {
                this.nameempty = res.data.msg;
                this.usename = true;
                this.usenameborder = "1px solid red";
              } else {
                this.pwempty = res.data.msg;
                console.log(res.data.msg);
                this.password = true;
                this.passwordborder = "1px solid red";
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    save() {
      this.savepasuse = { pas: this.account, use: this.passwords };
      let obj = JSON.stringify(this.savepasuse);
      localStorage.setItem("key", obj);
    },
  },
  created() {
    if (localStorage.getItem("key")) {
      let kk = localStorage.getItem("key");
      kk = JSON.parse(kk);
      this.account = kk.pas;
      this.passwords = kk.use;
      this.checked = true;
    }
    if (this.checked == true) {
      this.savepasuse = { pas: this.account, use: this.passwords };
      let obj = JSON.stringify(this.savepasuse);
      localStorage.setItem("key", obj);
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  user-select: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-size: cover;
  height: 100%;
  background-image: url(/img/login-background.f9f49138.jpg);
  .login-form {
    border-radius: 6px;
    background: #fff;
    width: 400px;
    height: 346px;
    padding: 25px 25px 5px 25px;
    h3 {
      background-color: #fff;
      text-align: center;
      margin-bottom: 30px;
    }
    .emptypublic {
      width: 100%;
      height: 38px;
      padding: 0 10px;
      box-sizing: border-box;
      line-height: 38px;
      color: red;
    }
    .formpublic {
      width: 100%;
      height: 38px;
      border: 1px solid gray;
      padding: 0 10px;
      box-sizing: border-box;
      border-radius: 5px;
      input {
        height: 100%;
        width: calc(100% - 24px);
        border: 0;
        outline: none;
        padding-left: 10px;
        font-size: 16px;
      }
      svg {
        width: 14px;
        height: 37px;
        vertical-align: middle;
      }
    }
    .label {
      input {
        width: 16px;
        height: 16px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .register {
      width: 100%;
      height: 38px;
      line-height: 38px;
      text-align: center;
      color: #fff;
      background-color: #1890ff;
      margin-top: 30px;
      border-radius: 5px;
    }
  }
}
</style>
