import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import moment from 'moment'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    isLogined: false,
    clients: [],
    roles: [],
    applys: [],
    apply_role: {},
    lang: 'cn'
  },
  getters: {
    isLogined: state => {
      // if (state.isLogined) {
      //   return true
      // } else if (localStorage.token) {
      //   state.isLogined = true
      //   return true
      // } else {
      //   return false
      // }
      return state.isLogined
    },
    user: state => {
      return state.user
    }
  },
  actions: {
    [types.LOGIN]: ({ dispatch, state }, data) => {
      // axios({
      //   headers: {
      //     'X-Requested-With': 'XMLHttpRequest'
      //   },
      //   method: 'post',
      //   url: '/api/auth/login',
      //   data: data
      // }).then(response => {
      //   var token = response.data['token']
      //   localStorage.token = token
      //   state.token = token
      //   state.isLogined = true

      //   dispatch(types.FETCH_USER)
      // })
    },
    [types.VALID_TOKEN]: ({ dispatch, state }, data) => {
      if (localStorage.token) {
        if (jwtDecode(localStorage.token).exp * 1000 > moment.utc().valueOf()) {
          state.token = localStorage.token
          state.isLogined = true
          dispatch(types.FETCH_USER)
        }
      }
    },
    [types.FETCH_USER]: ({ commit, state }, data) => {
      axios({
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: 'get',
        url: '/api/me'
      }).then(response => {
        state.user = {
          username: response.data.username,
          userId: response.data.developer_id
        }
      })
    }
  },
  mutations: {
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
      state.isLogined = false
    },
    [types.SWITCH_LAN]: (state, lanFlag) => {
      if (!lanFlag) {
        state.lang = 'cn'
      } else {
        state.lang = 'en'
      }
    }
  }
})
