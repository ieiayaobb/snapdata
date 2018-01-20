<template>
  <el-form label-width="100px" :model="registerForm" :rules="rules" ref="registerForm" class="register-form">
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="registerForm.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input type="text" v-model="registerForm.email" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="registerForm.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="重复密码" prop="retype_password">
      <el-input type="password" v-model="registerForm.retype_password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="公司名" prop="company_name">
      <el-input type="text" v-model="registerForm.company_name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="register('registerForm')">申请注册</el-button>
    </el-form-item>
    <el-form-item>
      已有账号？<router-link to="login">登录</router-link>
    </el-form-item>
  </el-form>
</template>

<script>
import * as types from '../store/types'

export default {
  name: 'register',
  data () {
    return {
      registerForm: {
        username: 'test_new',
        email: 'test_new1@patsnap.com',
        password: '123',
        retype_password: '123', // TODO: check retype
        company_name: 'abc'
      },
      rules: {
        // TODO: check exist
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' }
        ],
        company_name: [
          { required: true, message: '请输入公司名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    register: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var _self = this
          this.$store.dispatch(types.REGISTER, _self.registerForm)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register-form {
  width: 300px;
  height: 600px;
  margin: 150px auto;
  padding-right: 100px;
  top: 50%
}
</style>
