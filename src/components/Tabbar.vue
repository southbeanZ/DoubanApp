<template>
  <div class="m-tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  // props: ['value'],
  computed: {
    value() {
      return this.$route.matched[0].name;
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/var.scss';
.m-tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid $borderColor;
  text-align: center;
  font-size: 0;
  background-color: #fff;
}
</style>