<template>
  <div class="main">
    <Topbar isBg="true">
      <img src="./assets/images/ic_bar_back_white.png" class="icon" slot="left">
      <span slot="left">返回</span>
      <span slot="right">分享</span>
    </Topbar>
    <router-view></router-view>
    <Tabbar v-model="active">
      <TabbarItem id="index" isRouter>
        <img src="./assets/images/ic_tab_home_normal.png" slot="icon-normal">
        <img src="./assets/images/ic_tab_home_active.png" slot="icon-active">
        首页
      </TabbarItem>
      <TabbarItem id="audiobook" isRouter>
        <img src="./assets/images/ic_tab_subject_normal.png" slot="icon-normal">
        <img src="./assets/images/ic_tab_subject_active.png" slot="icon-active">
        书影音
      </TabbarItem>
      <TabbarItem id="broadcast" isRouter>
        <img src="./assets/images/ic_tab_status_normal.png" slot="icon-normal">
        <img src="./assets/images/ic_tab_status_active.png" slot="icon-active">
        广播
      </TabbarItem>
      <TabbarItem id="group" isRouter>
        <img src="./assets/images/ic_tab_group_normal.png" slot="icon-normal">
        <img src="./assets/images/ic_tab_group_active.png" slot="icon-active">
        小组
      </TabbarItem>
      <TabbarItem id="mine" isRouter>
        <img src="./assets/images/ic_tab_profile_normal.png" slot="icon-normal">
        <img src="./assets/images/ic_tab_profile_active.png" slot="icon-active">
        我的
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import TabbarItem from './components/TabbarItem'
import Topbar from './components/Topbar'

export default {
  name: 'index',
  data() {
    return {
      active: 'index'
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Topbar
  }
}
</script>