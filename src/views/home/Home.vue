<template>
  <div class="home">
    <Navbar class="navbar-home">
      <div slot="center">首页</div>
    </Navbar>
    <TabControl class="TabControlShow" v-show="isTabControlShow" ref="TabControl2" @clickGoodsName="clickGoodsName"
      :title="['精 选','新 款','流 行']"></TabControl>
    <!-- keep-alivezhi只针对路由有效 -->
    <!-- <keep-alive> -->
    <BerterScroll class="BerterScroll" ref="betterscroll" :probeTypeNum="3" :havePullUpLoad="true" @scrollposition="scrollposition"
      @scrollEnd="scrollEnd">
      <HomeSwiper :bannerList="bannerList" @swiperImgload="swiperImgload"></HomeSwiper>
      <HomeRecommend :recommendList="recommendList"></HomeRecommend>
      <FeatureView></FeatureView>
      <TabControl ref="TabControl1" @clickGoodsName="clickGoodsName" :title="['精 选','新 款','流 行']"></TabControl>
      <GoodsList :goodlist="activeGoodList" class="goodslist"></GoodsList>
    </BerterScroll>
    <!-- </keep-alive> -->
    <BackTopButton @click.native="backtopbutton" v-show="isbacktop"></BackTopButton>
  </div>
</template>

<script>
  import Navbar from "components/common/navbar/Navbar.vue"

  import HomeSwiper from "views/home/cpn/HomeSwiper.vue"
  import HomeRecommend from "views/home/cpn/HomeRecommend.vue"
  import FeatureView from "views/home/cpn/FeatureView.vue"
  import TabControl from "components/context/tabControl/TabControl.vue"
  import GoodsList from "components/context/goods/GoodsList.vue"
  // 滚动插件
  import BerterScroll from "components/common/better-scroll/BerterScroll.vue"
  import BackTopButton from "components/common/backtopbutton/BackTopButton.vue"
  //防抖函数
  import debounce from "common/tools/debounce.js"
  // 网络请求
  import {
    homeRequest,
    homeGoodsRequest
  } from "network/home.js"

  export default {
    name: "Home",
    components: {
      Navbar,
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabControl,
      GoodsList,
      BerterScroll,
      BackTopButton
    },
    data() {
      return {
        bannerList: [],
        recommendList: [],
        goods: {
          "pop": {
            page: 0,
            list: []
          },
          "new": {
            page: 0,
            list: []
          },
          "sell": {
            page: 0,
            list: []
          }
        },
        defaultType: 'pop',
        isbacktop: false,
        // true
        isTabControlShow: false,
        TabControl_1_OffsetTop: 0,
        //记录当前滚动位置，切换页面的时候重新保持不动
        BerterScroll_Y: 0,
        BerterScroll_Y_pop: 0,
        BerterScroll_Y_new: 0,
        BerterScroll_Y_sell: 0,
        isfirstclickPop: false,
        isfirstclickNew: false,
        isfirstclicksell: false
      };
    },
    computed: {
      activeGoodList() {
        return this.goods[this.defaultType].list
      }
    },
    methods: {
      // 防抖函数
      // debounce(func, waitingTime) {
      //   let timer = null
      //   return function(...args) {
      //     if (timer) {
      //       clearTimeout(timer)
      //     }
      //     timer = setTimeout(() => {
      //       func.apply(this)
      //     }, waitingTime)
      //   }
      // },
      // 事件点击方法

      // 监听最占用时间的轮播图是否加载完成、好记录TabControl距离视口顶部的位置
      swiperImgload() {
        console.log("轮播图加载完成，可以计算TabControl距离视口顶部的位置，控制是否显示第二个TabControl")
        // console.log(this.$refs.TabControl1.$el.offsetTop)
        // this.$refs.TabControl1.$el.offsetTop
        this.TabControl_1_OffsetTop = this.$refs.TabControl1.$el.offsetTop
        // console.log(this.TabControl_1_OffsetTop)
      },

      // 下滑到底部请求新的数据方法
      scrollEnd() {
        this.homeGoodsRequest(this.defaultType)
        console.log("滚动到底部了，赶紧请求数据")

        // 已经触底允许再次执行请求
        // this.$refs.betterscroll.finishPullUp()

      },
      // 及监听滚动距离执行方法
      scrollposition(position) {
        // console.log(position.y)
        this.isbacktop = position.y < -555
        this.isTabControlShow = -position.y > this.TabControl_1_OffsetTop
      },
      // 监听顶部返回按钮
      backtopbutton() {
        // console.log(this.$refs.betterscroll.scrollTo)
        this.$refs.betterscroll.scrollTo(0, 0)
      },
      // 监听点击类目
      clickGoodsName(index) {
        // 存储各自类目的混动距离
        switch (this.defaultType) {
          case "pop":
            this.BerterScroll_Y_pop = this.$refs.betterscroll.getBerterScroll_Y()
            // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
            break
          case "new":
            this.BerterScroll_Y_new = this.$refs.betterscroll.getBerterScroll_Y()
            // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
            break
          case "sell":
            this.BerterScroll_Y_sell = this.$refs.betterscroll.getBerterScroll_Y()
            // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
        }
        switch (index) {
          case 0:
            this.defaultType = 'pop'
            if (!this.isfirstclickPop) {
              this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_pop - 510)
              this.isfirstclickPop = true
            } else {
              this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_pop)
            }
            this.BerterScroll_Y_pop = this.$refs.betterscroll.getBerterScroll_Y()
            this.$refs.betterscroll.refresh()
            // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
            break
          case 1:
            this.defaultType = 'new'
            if (!this.isfirstclickNew) {
              this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_new - 510)
              this.isfirstclickNew = true
            } else {
              this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_new)
            }
            this.BerterScroll_Y_new = this.$refs.betterscroll.getBerterScroll_Y()
            this.$refs.betterscroll.refresh()
            // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
            break
          case 2:
            this.defaultType = 'sell'
            if (!this.isfirstclicksell) {
              this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_sell - 510)
              this.isfirstclicksell = true
            } else {
              this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_sell)
            }
            this.BerterScroll_Y_sell = this.$refs.betterscroll.getBerterScroll_Y()
            this.$refs.betterscroll.refresh()
            // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
        }
        // this.$refs.betterscroll.refresh()
        this.$refs.TabControl1.defaultIndex = index
        this.$refs.TabControl2.defaultIndex = index

        this.$waterfall.forceUpdate()
      },

      // 网络请求方法

      homeRequest() {
        homeRequest().then(res => {
          this.bannerList = res.data.banner.list
          this.recommendList = res.data.recommend.list
        }).catch(err => {
          console.log(err)
        })
      },
      // 商品请求数据一次30条
      homeGoodsRequest(type) {
        const page = this.goods[type].page + 1
        homeGoodsRequest(type, page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = page

          // 已经触底允许再次执行请求
          this.$refs.betterscroll.finishPullUp()
        }).catch(err => {
          console.log(err)
        })
      }
    },

    created() {
      console.log("Home创建")
      this.homeRequest()

      this.homeGoodsRequest("pop")
      this.homeGoodsRequest("new")
      this.homeGoodsRequest("sell")
    },
    mounted() {
      // console.log(this.$refs.betterscroll)

      const refresh = debounce(this.$refs.betterscroll.refresh, 200)
      this.$bus.$on("imagedownload", () => {
        refresh()
        // console.log("图片加载完场")
        // this.$refs.betterscroll.refresh()
      })
    },
    destroyed() {
      console.log("Home销毁")
    },
    // 离开不活跃状态
    deactivated() {
      // console.log(this.$refs.betterscroll.Bscroll)

      // this.BerterScroll_Y = this.$refs.betterscroll.getBerterScroll_Y()

      // console.log("home不活跃:" + this.BerterScroll_Y)
      switch (this.defaultType) {
        case "pop":
          this.BerterScroll_Y_pop = this.$refs.betterscroll.getBerterScroll_Y()
          // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
          break
        case "new":
          this.BerterScroll_Y_new = this.$refs.betterscroll.getBerterScroll_Y()
          // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
          break
        case "sell":
          this.BerterScroll_Y_sell = this.$refs.betterscroll.getBerterScroll_Y()
          // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
      }
      // this.$refs.betterscroll.refresh()
    },
    // 进入活跃
    activated() {
      // this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y, 0)
      // console.log("home活跃" + this.BerterScroll_Y)
      // this.$refs.scroll.refresh()
      switch (this.defaultType) {
        case "pop":
          this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_pop)
          this.$refs.betterscroll.refresh()
          // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
          break
        case "new":
          this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_new)
          this.$refs.betterscroll.refresh()
          // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
          break
        case "sell":
          this.$refs.betterscroll.scrollTo(0, this.BerterScroll_Y_sell)
          this.$refs.betterscroll.refresh()
          // console.log(this.BerterScroll_Y, this.BerterScroll_Y_pop, this.BerterScroll_Y_new, this.BerterScroll_Y_sell)
      }
      // this.$refs.betterscroll.refresh()

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    height: 100vh;
    background-color: #F0F0F0;
  }

  .home .BerterScroll {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    height: calc(100% - 93px);
    /* margin-top: -40px; */
    overflow: hidden;
  }

  .navbar-home {
    font-size: 20px;
    color: #fc7c94;
    background-color: #FFFFFF;
    box-shadow: 0px 7px 20px -21px #000;
  }

  .TabControlShow {
    position: relative;
    z-index: 6;
  }
</style>
