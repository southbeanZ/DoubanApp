<template>
  <div class="g-con">
    <Topbar title="书影音">
      <a href="javascript:;" class="u-btn" slot="right">
        <img src="../../assets/images/ic_settings.png" class="icon">
      </a>
      <a href="javascript:;" class="u-btn" slot="right">
      	<img src="../../assets/images/ic_actionbar_search_icon.png" class="icon">
      </a>
    </Topbar>
    书影音
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