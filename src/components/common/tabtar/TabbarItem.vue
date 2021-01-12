<template>
  <div class="tabbaritem" @click="pathitem" :class="{active:isActive}">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script scoped>
  export default {
    name: "TabbarItem",
    props: ["path"],
    data() {
      return {
        // isActive: false,
      };
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
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
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    /* text-align: center; */
    height: 49px;
    /* padding: 5px; */
  }

  .tabbaritem>div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    color: #fb7c94;
  }
</style>
