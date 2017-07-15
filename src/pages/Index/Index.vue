<template>
  <div class="main">
    <Topbar isBg title="首页">
	    <a href="javascript:;" class="u-btn" slot="right">
        <img src="../../assets/images/ic_action_share.png" class="icon">
      </a>
    </Topbar>
    首页
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'

export default {
  components: {
    Topbar
  }
}
</script>