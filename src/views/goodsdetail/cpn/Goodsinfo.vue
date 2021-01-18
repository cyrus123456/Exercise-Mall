<template>
  <div class="goodsinfo" v-if="Object.keys(goodsInfo).length !== 0">
    <p>{{goodsInfo.title}}</p>
    <div class="
    goodsprice clearfix">
      <span>{{goodsInfo.newPrice}}</span>
      <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
      <span class="discountlabel" :style="{'background-color':goodsInfo.discountBgColor}">{{goodsInfo.discountlabel}}</span>
    </div>
    <div class="SalesAndcollection">
      <span v-for="item in goodsInfo.SalesAndcollection" :key="item">{{item}}</span>
    </div>
    <ul class="shopservices clearfix">
      <li v-for="item in goodsInfo.shopservices">
        <img :src="item.icon">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Goodsinfo",
    props: {
      goodsInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    created() {
      console.log('Goodsinfo组件创建');
    },
    destroyed() {
      console.log('Goodsinfo组件销毁');
    },
  }
</script>

<style scoped>
  .goodsinfo {
    position: relative;
    z-index: 7;
    padding: 10px 15px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 15px -15px #000;
  }

  .goodsinfo p {
    text-align: left;
  }

  .goodsprice {
    margin: 10px 0 20px 0;
  }

  .goodsprice span {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    float: left;
    margin-right: 5px;
  }

  .oldPrice {
    font-size: 10px;
    text-decoration: line-through;
    font-style: oblique;
  }

  .discountlabel {
    display: inline-block;
    font-size: 10px;
    height: 100%;
    padding: 0 10px;
    color: #FFFFFF;
    border-radius: 5px;
  }

  .SalesAndcollection {
    display: flex;
    height: 25px;
    margin-bottom: 10px;
    border-bottom: solid 1px rgba(213, 214, 209, 0.3);
  }

  .SalesAndcollection {
    font-size: 10px;
  }

  .SalesAndcollection :nth-child(2) {
    flex: 1;
  }

  .shopservices {
    list-style: none;
  }

  .shopservices li {
    display: inline-block;
    margin: 0 15px;
    text-align: left;
  }

  .shopservices img {
    display: inline-block;
    height: 10px;
  }

  .shopservices span {
    font-size: 10px;
  }
</style>
