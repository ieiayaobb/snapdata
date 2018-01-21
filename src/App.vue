<template>
  <div id="app">
    <div>
      <el-menu :default-active="activeIndex" class="" mode="horizontal" :router="true">
        <el-menu-item index="/">
          <img class="logo" :src="logo">
        </el-menu-item>
        <div class="login-menu-item">
          <el-button v-show="!isLogined" type="primary" router="login" @click="jumpLogin">Login</el-button>
          <div v-show="isLogined" class="logout-wrapper">
            <span class="username">{{ user.username }}</span><span class="greet">Hello</span>
            <a href="#" @click="logout" class="logout">Logout</a>
          </div>
        </div>
      </el-menu>
    </div>
    <div class="main-container">
      <div class="step-container">
        <el-steps :active="2">
          <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 3" description="这段就没那么长了"></el-step>
          <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
    <cart></cart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cart from './components/Cart'
import * as types from './store/types'
import logo from './assets/img/logo.png'

export default {
  name: 'app',
  components: {
    Cart
  },
  computed: {
    ...mapGetters({
      isLogined: 'isLogined',
      user: 'user'
    })
  },
  data () {
    return {
      logo: logo,
      activeIndex: '/'
    }
  },
  created () {
    this.$store.dispatch(types.VALID_TOKEN)
  },
  methods: {
    jumpLogin: function () {
      this.$router.push('login')
    },
    logout: function () {
      this.$store.commit(types.LOGOUT)
      this.$router.push('/login')
    },
    switchLan: function (val) {
      this.$store.commit(types.SWITCH_LAN, val)
    }
  },
  watch: {
    // isLogined: function (newValue) {
    //   let redirect = decodeURIComponent(this.$route.query.redirect || '/')
    //   if (newValue) {
    //     this.$router.push({
    //       path: redirect
    //     })
    //   }
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0c5297;
  height: 100%;
}

.logo {
  height: 40px;
}

a {
  text-decoration: none;
}

.login-menu-item {
  margin: 10px;
  float: right;
}

.username, .greet {
  color: #FFFFFF;
}

.greet {
  margin-right: 10px;
}

.logout-wrapper {
  display: inline-block;
  padding: 8px;
}

.logout {
  color: #FFFFFF;
}
.main-container{
  padding-right: 60px;
}
.main-container .step-container{
  margin: 30px 40px;
  padding: 20px;
  border:2px solid #eef1f6;
  border-radius: 10px;
}
.main-container .content-container{
  padding: 0 40px;
}
</style>
