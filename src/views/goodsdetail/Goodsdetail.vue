<template>
  <div class="goodsdetail">
    <!-- <div>{{$store.state.carlist.length}}</div> -->
    <GoodsDetailNavbar
      ref="GoodsDetailNavbar"
      class="GoodsDetailNavbar"
      @clickitem="clickitem"
    ></GoodsDetailNavbar>
    <!-- 滚动组件框架 -->
    <BerterScroll
      class="BerterScroll"
      ref="BerterScroll"
      :probeTypeNum="3"
      @scrollposition="scrollposition"
    >
      <GoodsdetailSwiper
        ref="GoodsdetailSwiper"
        :topCarouselImg="topCarouselImg"
      ></GoodsdetailSwiper>
      <!-- 基础信息模块。 -->
      <Goodsinfo :goodsInfo="goodsInfo"></Goodsinfo>
      <!-- 商品评论。 -->
      <GoodsRate ref="goodsrate" :goodsRate="goodsRate"></GoodsRate>
      <!-- 商店信息模块儿。 -->
      <Shopinfo :shopinfo="shopinfo"></Shopinfo>
      <!-- 详情图。 -->
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></DetailGoodsInfo>
      <!-- 商品参数。 -->
      <DetailParamInfo
        ref="DetailParamInfo"
        :paramInfo="paramInfo"
      ></DetailParamInfo>
      <!-- 更多推荐商品 -->
      <MoreGoods
        ref="MoreGoods"
        :moreGoodsRecommendList="moreGoodsRecommendList"
      ></MoreGoods>
      <!-- 底部工具栏。 -->
    </BerterScroll>
    <BottomToolBar @click_shoppingCart="click_shoppingCart"></BottomToolBar>
    <BackTopButton
      @click.native="backtopbutton"
      v-show="isbacktop"
    ></BackTopButton>
    <Toast :class="{ Toastshow: isToastshow }" :text="toastTip"></Toast>
  </div>
</template>

<script>
// 引入网络设置模块儿
import {
  goodsdetailRequest,
  GoodsInfo,
  Shop,
  GoodsParam, //商品参数
  goodsRecommendRequest //商品推荐。更多。
} from "network/goodsdetail.js";

import Toast from "components/common/toast/Toast.vue"; // 引入弹窗toast模块。
import { mapActions } from "vuex"; //映射vue Action方法

// 引入顶部导航组件
import GoodsDetailNavbar from "views/goodsdetail/cpn/GoodsDetailNavbar.vue";

// 滚动插件
import BerterScroll from "components/common/better-scroll/BerterScroll.vue";
// 引入详情页轮播图
import GoodsdetailSwiper from "views/goodsdetail/cpn/GoodsdetailSwiper.vue";
// 引入商品基础信息。
import Goodsinfo from "views/goodsdetail/cpn/Goodsinfo.vue";
// 引入评论。
import GoodsRate from "views/goodsdetail/cpn/GoodsRate.vue";
// 引入商店信息。
import Shopinfo from "views/goodsdetail/cpn/Shopinfo.vue";
//详情图
import DetailGoodsInfo from "views/goodsdetail/cpn/DetailGoodsInfo.vue";
//商品参数
import DetailParamInfo from "views/goodsdetail/cpn/DetailParamInfo.vue";
// 更多推荐商品。
import MoreGoods from "views/goodsdetail/cpn/MoreGoods.vue";
// 防抖函数。
import debounce from "common/tools/debounce.js";
// 底部工具栏。
import BottomToolBar from "views/goodsdetail/cpn/BottomToolBar.vue";
// 返回顶部按钮。
import BackTopButton from "components/common/backtopbutton/BackTopButton.vue";

export default {
  name: "Goodsdetail",
  components: {
    GoodsDetailNavbar,
    BerterScroll, // 挂载滚动组件
    GoodsdetailSwiper, //挂机在轮播图。
    Goodsinfo, //挂在商品基础信息
    GoodsRate, // 评论。
    Shopinfo, //挂在商店信息。
    DetailGoodsInfo, //详情图。
    DetailParamInfo, //商品参数
    MoreGoods, //更多推荐商品。
    BottomToolBar, //底部工具栏。
    BackTopButton, //返回顶部按钮。
    Toast //弹窗模块儿。
  },
  data() {
    return {
      isToastshow: false, //是否显示添加到购物车弹框,样式绑定
      toastTip: "", //弹窗提示文本
      iid: null,
      // 这里保存的是全部商品数据
      Allgoodsdetail: null,
      // 轮播图数据
      topCarouselImg: [],
      goodsInfo: {}, //类保存安信息
      goodsRate: {}, // 评论。
      shopinfo: {}, // 商店基本信息。
      detailInfo: {}, //商品详情图
      paramInfo: {}, //商品参数
      moreGoodsRecommendList: [], //更多商品
      goodsrateOffsetTop: 0,
      DetailParamInfoOffsetTop: 0,
      MoreGoodsOffsetTop: 0,
      Scroto_Y_Item: [], //滚动到对应栏目宝板块儿。
      isbacktop: false //是否显示顶部返回
    };
  },
  // watch: {
  //   Allgoodsdetail: function() {
  //     console.log("监听数据刷新。");
  //     this.$refs.BerterScroll.refresh(); //必须等。所有知足剑！确定之后。才能获取这个值。
  //   }
  // },
  methods: {
    ...mapActions(["goodsTocart"]),

    // 点击添加购物车指令。
    click_shoppingCart() {
      // console.log("接收到底部工具栏添加购物车被点击");

      // 每次创建一个新商品。
      const goods = [];
      goods.iid = this.iid;
      goods.img = this.topCarouselImg[0];
      goods.title = this.goodsInfo.title;
      goods.quantity = 1; //默认添加购物车商品数量为一。
      goods.price = this.goodsInfo.newPrice;
      // console.log(this.detailInfo.desc);
      goods.desc = this.detailInfo.desc;
      // console.log(goods);
      // 使用commit方法提交到vuex store管理仓库。

      //Map action映射vuex
      this.goodsTocart(goods)
        .then(text => {
          console.log(text);
          this.toastTip = text;
          this.isToastshow = true;
          setTimeout(() => {
            this.isToastshow = false;
          }, 2000);
        })
        .catch(err => {
          console.log(err);
        });
      // this.$store
      //   .dispatch("goodsTocart", goods)
      //   .then(text => {
      //     console.log(text);
      //     this.toastTip = text;
      //     this.isToastshow = true;
      //     setTimeout(() => {
      //       this.isToastshow = false;
      //     }, 2000);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      this.$bus.$emit("forceUpdateCar"); //强制购物车页面渲染
    },
    // 点击返回，顶端
    backtopbutton() {
      // console.log(this.$refs.betterscroll.scrollTo)
      this.$refs.BerterScroll.scrollTo(0, 0);
    },
    //通过滚动反向控制顶部。菜单栏！
    scrollposition(position) {
      this.isbacktop = position.y <= -510; //顶部返回按钮是否显示？

      // console.log(this.$refs.goodsrate.$el.offsetTop);

      if (position.y <= 0 && position.y > this.Scroto_Y_Item[1]) {
        this.$refs.GoodsDetailNavbar.defaultnum = 0;
      } else if (
        position.y <= this.Scroto_Y_Item[1] &&
        position.y > this.Scroto_Y_Item[2]
      ) {
        this.$refs.GoodsDetailNavbar.defaultnum = 1;
      } else if (
        position.y <= this.Scroto_Y_Item[2] &&
        position.y > this.Scroto_Y_Item[3]
      ) {
        this.$refs.GoodsDetailNavbar.defaultnum = 2;
      } else if (
        position.y <= this.Scroto_Y_Item[3] &&
        position.y > -Infinity
      ) {
        this.$refs.GoodsDetailNavbar.defaultnum = 3;
      }
      // console.log(this.$refs.GoodsDetailNavbar.defaultnum);
    },
    // 接收顶部导航栏儿。点击按钮。是事件。
    clickitem(index) {
      // console.log(this.$refs.goodsrate.$el.offsetTop);
      // console.log(this.Scroto_Y_Item);
      this.$refs.BerterScroll.scrollTo(0, this.Scroto_Y_Item[index], 300);

      // 原来的写法太冗长。

      // this.$refs.BerterScroll.refresh(); //保险之前点击之前刷新一下
      // switch (index) {
      //   case 0:
      //     // console.log(this.$refs.GoodsdetailSwiper.$el.offsetTop);
      //     this.$refs.BerterScroll.scrollTo(0, 0, 300); //参数不准确。
      //   case 1:
      //     // console.log(this.$refs.goodsrate.$el.offsetTop);
      //     this.$refs.BerterScroll.scrollTo(
      //       0,
      //       -this.$refs.goodsrate.$el.offsetTop, //参数还算准确。
      //       300
      //     );
      //     break;
      //   case 2:
      //     this.$refs.BerterScroll.scrollTo(
      //       0,
      //       -this.$refs.DetailParamInfo.$el.offsetTop, //参数不准确。
      //       300
      //     );
      //     break;
      //   default:
      //     this.$refs.BerterScroll.scrollTo(
      //       0,
      //       -this.$refs.MoreGoods.$el.offsetTop, //参数还算准确。
      //       300
      //     );
      // }
    },

    //解决卡顿问题 图片加载刷新BerterScroll
    imageLoad() {
      // console.log(this.$refs.BerterScroll.refresh);
      this.$refs.BerterScroll.refresh();

      // 所有详情页图片加载完毕之后，获取各个板块儿最新顶部距离。
      this.Scroto_Y_Item.push(0);
      // const goodsrateOffsetTop = this.$refs.goodsrate.$el.offsetTop ? (-this.$refs.goodsrate.$el.offsetTop + 44) : 0
      this.Scroto_Y_Item.push(
        this.$refs.goodsrate.$el.offsetTop
          ? -this.$refs.goodsrate.$el.offsetTop + 44
          : 0
      ); //评论顶部距离。
      this.Scroto_Y_Item.push(-this.$refs.DetailParamInfo.$el.offsetTop + 44); //参数的顶部距离。
      this.Scroto_Y_Item.push(-this.$refs.MoreGoods.$el.offsetTop + 44); //更多商品推荐顶部距离。

      console.log(
        "详情页图片全部加载完成，获取到各个板块儿最新顶部距离" +
          this.Scroto_Y_Item
      );
    },
    // 封装网络请求方法
    // 基础参数请求封装
    goodsdetailRequest() {
      goodsdetailRequest(this.iid)
        .then(res => {
          // 保存根据商品iid请求过来的商品数据，
          // console.log(res);
          // console.log(res.result);
          this.Allgoodsdetail = res.result;

          //测试是否拿到顶部轮播图数据。
          // console.log(res.result.itemInfo.topImages);
          // console.log(this.Allgoodsdetail.itemInfo.topImages);
          this.topCarouselImg = this.Allgoodsdetail.itemInfo.topImages;
          // console.log(this.topCarouselImg);

          // 开始保存商品基础信息
          // 用抽离出去的类保存信息。
          this.goodsInfo = new GoodsInfo(
            this.Allgoodsdetail.itemInfo,
            this.Allgoodsdetail.columns,
            this.Allgoodsdetail.shopInfo
          );

          // 商品评论。
          // 可能没有这个数据所以要用some运算符
          this.goodsRate = this.Allgoodsdetail.rate.list
            ? this.Allgoodsdetail.rate
            : {};
          // console.log(this.goodsRate);

          // 存储商店信息。
          // console.log(this.Allgoodsdetail.shopInfo);
          this.shopinfo = new Shop(this.Allgoodsdetail.shopInfo);
          // console.log(this.shopinfo);

          //详情图
          this.detailInfo = this.Allgoodsdetail.detailInfo;
          // console.log(this.detailInfo);

          // 商品参数
          this.paramInfo = new GoodsParam(
            this.Allgoodsdetail.itemParams.info,
            this.Allgoodsdetail.itemParams.rule
          );
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 更多商品网络请求封装。
    goodsRecommendRequest() {
      goodsRecommendRequest()
        .then(res => {
          // console.log(res.data.list);
          this.moreGoodsRecommendList = res.data.list;
          // console.log(this.moreGoodsRecommendList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // 路由组建创建时执行!!注意需要。将禁止相互排除在外，否则每次不会创建新的。详情页拿到数据。
  created() {
    // 保存商品id数据。
    this.iid = this.$route.params.iid;
    // 执行网络请求下来的商品数据。进行保存。
    this.goodsdetailRequest();
    // 执行更多推荐商品，网络请求。
    this.goodsRecommendRequest();
    // 进入详情页面隐藏底部任务栏。
    this.$bus.$emit("hideMainTabbar");
  },
  destroyed() {
    // 离开详情页时显示底部。控制
    this.$bus.$emit("showMainTabbar");
  },
  mounted() {
    const refresh = debounce(this.$refs.BerterScroll.refresh, 300);
    this.$bus.$on("imagedownload_detail", () => {
      // console.log("更多推荐商品瀑布流刷新better score高度。");
      refresh();
    });
  }
};
</script>

<style scoped>
.GoodsDetailNavbar {
  background-color: #ffffff;
}

.goodsdetail {
  position: relative;
  height: 100vh;
  background-color: #f0f0f0;
}

.goodsdetail .BerterScroll {
  height: calc(100% - 94px);
  overflow: hidden;
}
/* 弹窗模块儿样式。 */
.Toastshow {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: #ffffff;
  transform: translate(-50%, -50%);
}
</style>
