<template>
  <div class="checkbutton" :class="{ active: isChecked }">
    <img src="~assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.checkbutton {
  margin: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 50%;
  border: solid 1px #aaa;
}
.checkbutton img {
  height: 20px;
  width: 20px;
}
.active {
  border-color: #ff5777;
  border-radius: 50%;
  background-color: #ff5777;
}
</style>
