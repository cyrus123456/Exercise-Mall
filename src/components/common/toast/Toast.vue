<template>
  <div class="toast">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: ["text"],
  created() {
    console.log("Toast组件创建");
  },
  destroyed() {
    console.log("Toast组件销毁");
  }
};
</script>

<style scoped></style>
