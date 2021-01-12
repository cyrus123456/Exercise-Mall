import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Shoppingcart = () => import('@/views/shoppingcart/Shoppingcart.vue')
const Profile = () => import('@/views/profile/Profile.vue')
// 商品详情
const Goodsdetail = () => import('views/goodsdetail/Goodsdetail.vue')


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)



const routes = [{
    path: '/goodsdetail:iid',
    name: 'Goodsdetail',
    component: Goodsdetail,
    meta: {
      title: "Goodsdetail"
    }
  },
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: "Category"
    }
  },
  {
    path: '/shoppingcart',
    name: 'Shoppingcart',
    component: Shoppingcart,
    meta: {
      title: "Shoppingcart"
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: "Profile"
    }
  },

]

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
