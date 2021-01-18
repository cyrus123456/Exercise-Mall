<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <!-- 便秘表格要注意index。要改变避免冲突。 -->
    <table v-for="(table, index) in paramInfo.sizes" class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info {
    background-color: #FFFFFF;
    padding: 20px 30px 40px 30px;
    font-size: 14px;
    text-align: center;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info {
    line-height: 30px;
  }

  .param-info tr {
    padding: 5px 0;
  }

  .param-info table tr {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .info-size tr {
    display: flex;
  }

  .info-size tr td {
    text-align: left;
  }

  .info-size tr :not(:first-child) {
    flex: 1;
  }

  .info-size tr :first-child {
    display: inline-block;
    width: 90px;
    text-align: left;
  }

  .info-param {
    border-top: 2px solid rgba(100, 100, 100, .1);
    border-bottom: 2px solid rgba(100, 100, 100, .1);
  }

  .info-param tr {
    display: flex;
    align-items: center;
  }

  .info-param tr td {
    text-align: left;
  }

  .info-param-key {
    display: inline-block;
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 90px;
    text-align: left;
  }

  .param-value {
    flex: 1;
  }

  .info-img img {
    width: 100%;
  }
</style>
