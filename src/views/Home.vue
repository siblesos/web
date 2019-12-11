<template>
  <div class="page">
    <el-button type="primary" @click="testAxios()">测试Axios调用</el-button>
    <el-button type="primary" @click="getUser()">获取用户信息</el-button>
    <el-button type="primary" @click="getMenu()">获取菜单信息</el-button>
    <h2>Home Page</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  methods: {
    testAxios () {
      axios.get('http://localhost:8080').then(res => { alert(res.data) })
    },
    getUser () {
      this.$api.user.getUser().then(function (res) {
        alert(JSON.stringify(res.data))
      }).catch(function (res) {
        alert(res)
      })
    },
    getMenu () {
      this.$api.menu.getMenu().then(function (res) {
        alert(JSON.stringify(res.data))
      }).catch(function (res) {
        alert(res)
      })
    }
  }
}
</script>
