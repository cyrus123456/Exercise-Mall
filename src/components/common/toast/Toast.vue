<template>
  <!-- <div class="toast" v-show="isToastshow">
    {{ text }}
  </div> -->
  <div class="toast" v-show="dataisToastshow">
    {{ datatext }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: ["text", "isToastshow"],
  data() {
    return { datatext: "", dataisToastshow: false };
  },
  methods: {
    show(message, disappearTime = 2000) {
      this.datatext = message;
      this.dataisToastshow = true;
      setTimeout(() => {
        console.log("toast组件关闭弹窗");
        this.dataisToastshow = false;
        // this.$forceUpdate();
      }, disappearTime);
    }
  },
  created() {
    console.log("Toast组件创建");
  },
  destroyed() {
    console.log("Toast组件销毁");
  }
};
</script>

<style scoped>
/* 弹窗模块儿样式。 */
.toast {
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
