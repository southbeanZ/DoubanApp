<template>
  <div class="m-header" :class="{'is-bg': isBg}">
    <a href="javascript:;" class="u-header-icon left">
      <slot name="left"></slot>
      <!-- <img src="../assets/images/ic_bar_back_white.png" class="icon">
      <span>返回</span> -->
    </a>
    <span class="u-header-title">豆瓣</span>
    <a href="javascript:;" class="u-header-icon right">
      <slot name="right"></slot>
    </a>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    isBg: true
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
  .u-header-icon {
    display: block;
    height: 100%;
    font-size: 14px;
    line-height: 44px;
    color: $headerDefaultColor;

    .icon {
      width: 28px;
      height: 28px;
      vertical-align: middle;
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