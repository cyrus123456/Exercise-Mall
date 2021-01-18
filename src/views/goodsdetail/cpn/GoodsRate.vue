<template>
  <div class="goodsRate" v-if="Object.keys(goodsRate).length !== 0">
    <span>用户评价</span>
    <p>
      <img :src="goodsRate.list[0].user.avatar" alt="用户头像">
      <span>{{goodsRate.list[0].user.uname}}</span>
    </p>
    <p>{{goodsRate.list[0].created | formatDate}}</p>
    <p>
      {{goodsRate.list[0].content}}
    </p>
    <p>
      {{goodsRate.list[0].style}}
    </p>

  </div>
</template>

<script>
  // 引入时间戳。
  import formatDate from "common/tools/formatDate.js";
  export default {
    name: "GoodsRate",
    props: ["goodsRate"],
    created() {
      console.log('GoodsRate组件创建');
    },
    destroyed() {
      console.log('GoodsRate组件销毁');
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    }
  };
</script>

<style scoped>
  .goodsRate {
    position: relative;
    z-index: 6;
    background-color: #FFFFFF;
    padding: 20px;
    box-shadow: 0px 2px 15px -15px #000;
    text-align: left;
  }

  .goodsRate :first-child {
    padding: 20px 0;
  }

  .goodsRate img {
    width: 50px;
    margin-right: 50px;
    vertical-align: middle;
  }

  .goodsRate p:nth-of-type(3) {
    padding: 20px 0;
  }

  .goodsRate p:last-of-type {
    font-size: 12px;
    color: #A3A3A5;
  }
</style>
