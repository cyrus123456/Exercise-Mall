<template>
  <div class="goodsitem" @click="goodItemClick" :style="{width: goodItem.show.w / 2.2 + 'px' }">
    <img v-lazy="goodItem.show.img" :key="goodItem.iid" @load="imagedownload" :style="{width: goodItem.show.w / 2.2 + 'px' }">
    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">折扣价：{{goodItem.price}}</span>
      <br />
      <span>已售：{{goodItem.sale}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      imagedownload() {
        // console.log("图片下载完成了")
        this.$bus.$emit("imagedownload")
      },
      goodItemClick() {
        console.log("goodItemClick")
        this.$router.push("/goodsdetail" + this.goodItem.iid)
      }
    }
  };
</script>

<style scoped>
  .goodsitem {
    border-radius: 5px;
    margin: 5px 5px 10px 5px;
    background-color: #FFFFFF;
  }

  .goodsitem img {
    border-radius: 5px 5px 0 0;
  }

  .goods-info {
    border-radius: 5px;
    margin: 0 3px;
    padding: 5px;
    font-size: 12px;
    line-height: 15px;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  .price {
    color: var(--color-high-text);
    text-align: left;
    margin-right: 8px;
  }
</style>
