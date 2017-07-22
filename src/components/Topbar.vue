<template>
  <div class="m-header" :class="{'is-bg': isBg}">
    <div class="m-header-btn left">
      <a href="javascript:;" class="u-btn" v-show="isLeftShow">
        <img src="../assets/images/ic_bar_back_white.png" class="icon">
      </a>
      <slot name="left"></slot>
    </div>
    <span class="u-header-title" v-if="title">{{title}}</span>
    <div class="m-header-search" slot="left" v-else="">
      <div class="u-search">
        <img src="../assets/images/ic_search.png" class="icon">
        <input type="text" class="input" placeholder="影视 图书 唱片 小组等">
      </div>
    </div>
    <div class="m-header-btn right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
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
  z-index: 99;

  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .m-header-search {
    display: block;
    height: 32px;
    margin: 6px 56px 6px 10px;
    .u-search {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-left: 40px;
      padding-right: 10px;
      border-radius: 4px;
      background: #fff;
      font-size: 0;
      text-align: left;
      .icon {
        margin-left: -30px;
        margin-top: 6px;
      }
      .input {
        display: inline-block;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        float: right;
        font-size: 12px;
        &::placeholder {
          color: #aaa;
        }
      }
    }
  }
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