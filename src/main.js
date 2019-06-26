import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "./style/main.scss"
import "./moudels/rem"
new Vue({
  router,//为了方便Vue的组件通过this.$route或this.$router去访问和路由相关的API
  store,
  render: h => h(App)
}).$mount('#app')
