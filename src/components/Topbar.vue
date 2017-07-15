<template>
  <div class="m-header" :class="{'is-bg': isBg}">
    <div class="m-header-btn left">
      <a href="javascript:;" class="u-btn" v-show="isLeftShow">
        <img src="../assets/images/ic_bar_back_white.png" class="icon">
      </a>
      <slot name="left"></slot>
    </div>
    <span class="u-header-title">{{title}}</span>
    <div class="m-header-btn right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    isBg: {
      type: Boolean,
      default: false
    },
    isLeftShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/var.scss';
.m-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 44px;
  color: $headerDefaultColor;
  background-color: #fff;
  border-bottom:1px solid $borderColor;
  text-align: center;

  .u-header-title {
    font-size: 16px;
    line-height: 44px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .m-header-btn {
    display: block;
    height: 100%;
    font-size: 14px;
    line-height: 44px;
    color: $headerDefaultColor;

    .u-btn {
      display: inline-block;
      width: 36px;
      height: 100%;
      .icon {
        width: 28px;
        height: 28px;
        vertical-align: middle;
      }
    }
    
    &.left {
      position: absolute;
      left: 10px;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    &.right {
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  &.is-bg {
    color: #fff;
    background-color: $headerBg;
    .u-header-icon {
      color: #fff;
    }
  }
}
</style>