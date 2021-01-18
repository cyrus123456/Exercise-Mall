<template>
  <div class="goodsitem" @click="goodItemClick">
    <img v-lazy="goodimg" :key="goodItem.iid" @load="imagedownload" :style="{width: itemWidth + 'px' }">
    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">折扣价：{{discountPrice}}</span>
      <br />
      <span>已售：{{goodItemsale}}</span>
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
    computed: {
      itemWidth() {
        return (document.documentElement.clientWidth - 30) / 2 // rem to layout, Calculate the value of width
      },
      goodimg() {
        return this.goodItem.image || this.goodItem.show.img
      },
      goodItemsale() {
        return this.goodItem.itemSale || this.goodItem.sale
      },
      discountPrice() {
        return this.goodItem.price || this.goodItem.discountPrice
      }
    },
    methods: {
      // 判断通知在哪个页面去。刷新better score的。高度。
      imagedownload() {

        if (this.$route.path.indexOf("/goodsdetai") >= 0) {
          this.$bus.$emit("imagedownload_detail")
        } else if (this.$route.path.indexOf("/home") >= 0) {
          this.$bus.$emit("imagedownload")
        }
        // console.log("图片下载完成了")
      },
      goodItemClick() {
        // console.log("goodItemClick")
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
