<template>
  <div class="profile">
    <h1>我的</h1>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  created() {
    console.log("Profile创建");
  },
  destroyed() {
    console.log("Profile销毁");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
