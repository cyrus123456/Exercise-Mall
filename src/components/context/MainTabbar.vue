<template>
  <div class="maintabbar">
    <Tabbar>
      <TabbarItem path="/home">
        <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active" />
        <img src="~assets/img/tabbar/home.svg" slot="item-icon" />
        <span slot="item-text">首页</span>
      </TabbarItem>
      <TabbarItem path="/category">
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active" />
        <img src="~assets/img/tabbar/category.svg" slot="item-icon" />
        <span slot="item-text">分类</span>
      </TabbarItem>
      <TabbarItem path="/shoppingcart">
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active" class="nomarginbottom" />
        <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon" class="nomarginbottom" />
        <span slot="item-text">购物车</span>
      </TabbarItem>
      <TabbarItem path="/profile">
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active" />
        <img src="~assets/img/tabbar/profile.svg" slot="item-icon" />
        <span slot="item-text">我的</span>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from "components/common/tabtar/Tabbar.vue";

  import TabbarItem from "components/common/tabtar/TabbarItem.vue";

  export default {
    name: "MainTabbar",
    components: {
      Tabbar,
      TabbarItem,
    },
  };
</script>

<style>
  .maintabbar img {
    height: 15px;
    margin-right: 5px;
    margin-bottom: 3px;
  }

  .nomarginbottom {
    display: inline-block;
    height: 16px;
    margin-bottom: -1px;
  }
</style>
