import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Button from 'vant/lib/button'
import 'vant/lib/button/style'

// 手淘团队的方案
// rem 的基准值是 屏宽的1/10
import 'amfe-flexible'
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
