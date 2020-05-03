<template>
  <div id="login">
    <div class="loginWrap">
      <ul class="menuTab">
        <li
          :class="{ current: item.current }"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMenu(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <!-- 表单开始 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="logoForm"
        size="meduim"
      >
        <el-form-item prop="mail" class="itemForm">
          <label>邮箱</label>
          <el-input
            type="tetx"
            v-model="ruleForm.mail"
            autocomplete="off"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password" class="itemForm">
          <label>密码</label>
          <el-input
            type="text"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item
          prop="passwords"
          class="itemForm"
          v-show="model === 'register'"
        >
          <label>确认密码</label>
          <el-input
            type="text"
            v-model="ruleForm.passwords"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="checkcode" class="itemForm">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="14">
              <div class="grid-content bg-purple">
                <el-input
                  v-model.number="ruleForm.checkcode"
                  minlength="6"
                  maxlength="6"
                ></el-input>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple">
                <el-button
                  type="success"
                  @click="submitForm('ruleForm')"
                  class="block"
                  >获取验证码</el-button
                >
              </div>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button
            type="danger"
            @click="submitForm('ruleForm')"
            class="loginBtn block"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {
  stripScript,
  checkMail,
  checkPassword,
  checkCode,
} from "../../tools/validate.js";
export default {
  name: "login",
  data() {
    //邮箱
    var mail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入邮箱"));
      } else if (checkMail(value)) {
        return callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    //密码
    var password = (rule, value, callback) => {
      //过滤字符
      this.ruleForm.password = stripScript(value);
      value = this.ruleForm.password;

      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (checkPassword(value)) {
        return callback(
          new Error("密码至少包含1个大写字母，1个小写字母和1个数字")
        );
      } else {
        callback();
      }
    };

    var passwords = (rule, value, callback) => {
      //解决v-show的bug
      if (this.model === "login") {
        callback();
      }
      this.ruleForm.password = stripScript(value);
      value = this.ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.ruleForm.password) {
        return callback(new Error("两次密码不相同"));
      } else {
        callback();
      }
    };

    var checkcode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (checkCode(value)) {
        return callback(new Error("验证码格式错误"));
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        { txt: "登录", current: true, type: "login" },
        { txt: "注册", current: false, type: "register" },
      ],

      //切换
      model: "login",
      // 表单里面的数据
      ruleForm: {
        mail: "",
        password: "",
        // passwords: "",
        checkcode: "",
      },
      rules: {
        mail: [{ validator: mail, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }],
        passwords: [{ validator: passwords, trigger: "blur" }],
        checkcode: [{ validator: checkcode, trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          this.$router.push("/Carousel");
          // this.$router.push('/demo')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    toggleMenu(data) {
      this.menuTab.forEach((element) => {
        element.current = false;
      });
      data.current = true;
      this.model = data.type;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/main.scss";
#login {
  margin: 0;
  padding: 0;
  background-color: #344a5f;
  height: 3000px;
}
.loginWrap {
  width: 330px;
  margin: auto;
}
.menuTab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: white;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.logoForm {
  margin-top: 29px;
  label {
    display: inline-block;
    margin-bottom: 3px;
    font-size: 14px;
    color: white;
  }
  .itemForm {
    margin-bottom: 13px;
  }
  .block {
    width: 100%;
    display: block;
  }
  .loginBtn {
    margin-top: 19px;
  }
}
</style>
