<template>
  <a class="m-tabbar-item" :class="{active: isActive}" @click="switchTab">
    <span class="u-tabbar-icon" v-show="!isActive">
      <slot name="icon-normal"></slot>
    </span>
    <span class="u-tabbar-icon" v-show="isActive">
      <slot name="icon-active"></slot>
    </span>
    <p class="u-tabbar-txt">
      <slot></slot>
    </p>
  </a>
</template>
<script>
export default {
  props: {
    id: {
      type: String
    },
    isRouter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive() {
      return this.id === this.$parent.value;
    }
  },
  methods: {
    switchTab() {
      this.$parent.$emit('input', this.id);
      if(this.isRouter){
          this.$router.push(this.id);
      }
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/var.scss';
.m-tabbar-item {
  display: inline-block;
  text-align: center;
  width: 20%;

  .u-tabbar-txt {
    font-size: 15px;
    line-height: 15px;
    color: $tabbarColor;
    padding-bottom: 4px;
  }
  .u-tabbar-icon {
    display: inline-block;
    img {
      width: 28px;
      height: 28px;
    }
  }

  &.active {
    .u-tabbar-txt {
      color: $tabbarActiveColor;
    }
  }
}
</style>