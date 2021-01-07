<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
  };
</script>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    height: 44px;
    /* box-shadow: 0px 20px 20px -21px #000; */
  }

  .left,
  .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
