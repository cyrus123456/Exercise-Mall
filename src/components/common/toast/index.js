import Toast from 'components/common/toast/Toast.vue'
const obj = {}

obj.install = function (Vue) {
  console.log('安装自定义组件toast', Vue);

  const toastContrustor = Vue.extend(Toast)//第一步，创建。组件构造器

  const toast = new toastContrustor()//第二步，创建组件实例。

  toast.$mount(document.createElement('Toast'))//第三步。挂载到一个元素上。

  document.body.appendChild(toast.$el) //挂载到页面元素上。

  Vue.prototype.$toast = toast
}

export default obj