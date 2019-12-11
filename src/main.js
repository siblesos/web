// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http'
import global from './utils/global'

if (process.env.NODE_ENV !== 'production') {
  require('./mock/index') // 如果是线上环境则不加载
}
Vue.prototype.global = global // 挂载全局配置模块
Vue.config.productionTip = false
Vue.use(ElementUI)
// 在 main.js 中以 vue 插件的形式引入 axios，这样在其他地方就可通过 this.$api 调用相关的接口了。
Vue.use(api)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
