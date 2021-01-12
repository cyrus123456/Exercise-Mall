<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    name: "BerterScroll",
    data() {
      return {
        Bscroll: null
      }
    },
    props: {
      probeTypeNum: {
        type: Number,
        default: 0
      },
      havePullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.Bscroll = new BetterScroll(this.$refs.wrapper, {
        // scrollY: true,
        click: true,
        probeType: this.probeTypeNum,
        pullUpLoad: this.havePullUpLoad,
        // wheel: true,
        // scrollbar: true,
      })
      // console.log(this.havePullUpLoad)
      // 初始化刷新置顶显示
      // this.Bscroll.scrollTo(0, 0)
      // 监听滚动位置控制返回顶部按钮的现实
      if (this.probeTypeNum === 2 || this.probeTypeNum === 3) {
        this.Bscroll.on("scroll", (position) => {
          // console.log(position)
          this.$emit("scrollposition", position)
        })
      }
      // 监听是否滚动到底部
      if (this.havePullUpLoad) {
        this.Bscroll.on("pullingUp", () => {
          this.$emit("scrollEnd")
          // console.log("滚动到底部了，赶紧请求数据")
          // this.Bscroll.finishPullUp()
          // this.Bscroll.refresh()
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.Bscroll && this.Bscroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.Bscroll && this.Bscroll.finishPullUp()
      },

      // 刷新框架高度方法
      refresh() {
        // console.log("加入防抖功能后，图片加载完场")
        this.Bscroll && this.Bscroll.refresh()
      },
      // 记录滚动高度
      getBerterScroll_Y() {
        return this.Bscroll ? this.Bscroll.y : 0
      }
    }
  };
</script>

<style scoped>

</style>
