<template>
  <div class="tabbaritem" @click="pathitem" :class="{active:isActive}">
    <span v-if="isActive">
      <slot name="item-icon-active"></slot>
    </span>
    <span v-else>
      <slot name="item-icon"></slot>
    </span>
    <span>
      <slot name="item-text"></slot>
    </span>

  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props: ["path"],
    data() {
      return {
        isActive: false,
      };
    },
    computed: {
      // isActive() {
        // return this.$route.path.indexOf(this.path) !== -1
      // }
    },
    methods: {
      pathitem() {
        this.$router.replace(this.path);
      },
    },
  };
</script>

<style>
  .tabbaritem {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    /* text-align: center; */
    height: 49px;
    /* padding: 5px; */
  }

  .tabbaritem img {
    width: 15px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .active {
    color: #fb7c94;
  }
</style>
