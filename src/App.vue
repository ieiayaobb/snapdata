<template>
  <div id="app">
    <el-menu :default-active="activeIndex" theme="dark" class="" mode="horizontal" :router="true">
      <el-menu-item index="/">SnapData</el-menu-item>
      <div class="login-menu-item">
        <el-button v-show="!isLogined" type="primary" router="login" @click="jumpLogin">Login</el-button>
        <div v-show="isLogined" class="logout-wrapper">
          <span class="username">{{ user.username }}</span><span class="greet">Hello</span>
          <a href="#" @click="logout" class="logout">Logout</a>
        </div>
      </div>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from './store/types'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      isLogined: 'isLogined',
      user: 'user'
    })
  },
  data () {
    return {
      switchWidth: 85,
      switchValue: false,
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
  color: #2c3e50;
  height: 100%;
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
</style>
