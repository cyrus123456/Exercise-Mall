import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 瀑布流效果
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

//导入自定义弹窗插件。Totals. 
import toast from 'components/common/toast'
// 安装插件
Vue.use(toast)


//图片懒加载
import VueLazyload from 'vue-lazyload'
const loadimage = require('assets/img/common/loadimage.gif')
const errorimage = require('assets/img/common/errorimage.jpg')

Vue.use(VueLazyload, {
  preLoad: 1.5,
  loading: loadimage,
  error: errorimage,
  attempt: 2
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
