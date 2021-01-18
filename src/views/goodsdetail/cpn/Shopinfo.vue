<template>
  <div class="shopinfo" v-if="Object.keys(shopinfo).length !== 0">
    <div class="shopname">
      <img :src="shopinfo.logo">
      <p>{{shopinfo.name}}</p>
    </div>
    <div class="shopinfobottom">
      <div class="shopinfosells">
        <div>
          <span>{{shopinfo.sells | sellCountFilter}}</span>
          <p>销量</p>
        </div>
        <div>
          <span>{{shopinfo.goodsCount}}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <table class="shopinfoscore">
        <tr v-for="item in shopinfo.score">
          <td>{{item.name}}</td>
          <td>{{item.score}}</td>
          <!-- <td>{{item.isBetter}}</td> -->
        </tr>
      </table>
    </div>
    <a :src="shopinfo.shopUrl" class="entershop">进店逛逛</a>

  </div>
</template>

<script>
  export default {
    name: "Shopinfo",
    props: ["shopinfo"],
    filters: {
      sellCountFilter: function(value) {
        if (value < 10000) return value;
        return (value / 10000).toFixed(1) + '万'
      }
    },
    created() {
      console.log('Shopinfo组件创建');
    },
    destroyed() {
      console.log('Shopinfo组件销毁');
    },
  };
</script>

<style scoped>
  .shopinfo {
    position: relative;
    z-index: 6;
    padding: 15px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 15px -15px #000;
  }

  .shopname {
    padding: 20px;
  }

  .shopname img {
    height: 50px;
    width: 50px;
  }

  .shopname p {
    flex: 1;
    margin-top: 10px;
  }

  .shopinfobottom {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
  }

  .shopinfosells {
    flex: 1;
    display: flex;
    padding-right: 20px;
    /* justify-content: center; */
    /* align-items: center; */
  }

  .shopinfosells div {
    flex: 1;
  }

  .shopinfosells span {
    display: inline-block;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .shopinfoscore {
    flex: 1;
  }

  .entershop {
    display: inline-block;
    margin-top: 20px;
  }
</style>
