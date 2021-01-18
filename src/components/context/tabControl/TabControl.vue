<template>
  <div class="tabcontrol">
    <div :class="{borderbottom: index === defaultIndex}" v-for="(item , index) in title" :key="index" @click.stop="clickIndex(index)">
      <span class="tabcontrolspan">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      title: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        defaultIndex: 0
      }
    },
    methods: {
      clickIndex(Index) {
        this.defaultIndex = Index
        this.$emit("clickGoodsName", Index)
      }
    }
  };
</script>

<style scoped>
  .tabcontrol {
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 13px -13px #000;
  }

  .tabcontrol>div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 40px;
  }

  .tabcontrolspan {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 6px 10px 0 10px;
    border-bottom: solid 2px #FFFFFF;
  }

  .borderbottom span {
    border-bottom: solid 2px #FB7C94;
  }
</style>
