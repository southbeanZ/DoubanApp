<template>
  <div class="main">
    <Topbar title="我的">
	    <a href="javascript:;" class="u-btn" slot="right">
        <img src="../../assets/images/ic_settings.png" class="icon">
      </a>
    </Topbar>
    个人
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