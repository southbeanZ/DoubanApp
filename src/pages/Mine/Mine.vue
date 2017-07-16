<template>
  <div class="g-con">
    <Topbar title="我的">
	    <a href="javascript:;" class="u-btn" slot="right">
        <img src="../../assets/images/ic_settings.png" class="icon">
      </a>
    </Topbar>
    <Cell txt="设置">
      <a href="javascript:;" class="u-btn" slot="right">
        <img src="../../assets/images/ic_arrow_gray_small.png" alt="" class="icon">
      </a>
    </Cell>
    <Cell txt="提醒">
      <img src="../../assets/images/ic_mine_notification.png" class="icon" slot="icon">
      <a href="javascript:;" class="u-btn" slot="right"><img src="../../assets/images/ic_arrow_gray_small.png" alt="" class="icon"></a>
    </Cell>
    <Cell txt="热门" label="hot">
    </Cell>
    <Cell txt="推荐" label="recommend">
    </Cell>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Cell from '@/components/Cell'

export default {
  components: {
    Topbar,
    Cell
  }
}
</script>