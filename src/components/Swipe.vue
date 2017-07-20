<template>
	<div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
        <slot name="swiper-con"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div :class="{'swiper-pagination': pagination}"></div>
	</div>
</template>
<style>
@import '../assets/libs/swiper/css/swiper.css';
.swiper-pagination {
	text-align: right;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet:last-child {
	margin-right: 15px;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
<script>
import '../assets/libs/swiper/js/swiper.js';
export default {
	props: {
		swipeid: {
			type: String,
			default: 'swipe1'
		},
		direction: {
			type: String,
			default: 'horizontal'
		},
		loop: {
			type: Boolean,
			default: true
		},
		autoplay: {
			type: Number,
			default: 0
		},
		effect: {
			type: String,
			default: 'slide'
		},
		pagination: {
			type: Boolean,
			default: true
		},
		paginationType: {
			type: String,
			default: 'bullets'
		}
	},
	mounted() {
		var self = this;
		var mySwiper = new Swiper('.'+ self.swipeid, {
	    direction: self.direction,
	    loop: self.loop,
	    autoplay: self.autoplay,
	    effect: self.effect,
	    
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    paginationType: self.paginationType,
	  })
	}
}
</script>