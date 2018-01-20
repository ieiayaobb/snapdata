<template>
  <el-form label-width="100px" class="login-form">
    <el-form-item label="Email">
      <el-input type="text" auto-complete="off" v-model="username"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input type="password" auto-complete="off" v-model="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="login" type="primary">Login</el-button>
      <!-- <el-button @click="jumpRegister">注册</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'

export default {
  name: 'login',
  computed: {
    ...mapGetters([
      'isLogined'
    ])
  },
  data () {
    return {
      username: 'test1@patsnap.com',
      password: 'abc'
    }
  },
  methods: {
    login: function () {
      if (this.username && this.password) {
        var _self = this
        this.$store.dispatch(types.LOGIN, {
          username: _self.username,
          password: _self.password
        })
      }
    },
    jumpRegister: function () {
      this.$router.push('register')
    }
  },
  mounted: function () {
    let redirect = decodeURIComponent(this.$route.query.redirect || '/')
    if (this.isLogined) {
      this.$router.push({
        path: redirect
      })
    }
  },
  watch: {
    isLogined: function (newValue) {
      let redirect = decodeURIComponent(this.$route.query.redirect || '/')
      if (newValue) {
        this.$router.push({
          path: redirect
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form {
  width: 300px;
  height: 160px;
  margin: 180px auto;
  padding-right: 100px;
  top: 50%
}
</style>
