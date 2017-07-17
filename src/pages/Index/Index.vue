<template>
  <div class="g-con">
    <Topbar isBg title="首页">
	    <a href="javascript:;" class="u-btn" slot="right">
        <img src="../../assets/images/ic_action_share.png" class="icon">
      </a>
    </Topbar>
		<Swipe swipeid="swipe1" effect="cube" :autoplay="1000">
			<div class="swiper-slide slide1" slot="swiper-con">Slide 1</div>
      <div class="swiper-slide slide2" slot="swiper-con">Slide 2</div>
      <div class="swiper-slide slide3" slot="swiper-con">Slide 3</div>
		</Swipe>
		<Swipe swipeid="swipe2" :loop="false" paginationType="fraction" :autoplay="2000">
			<div class="swiper-slide slide1" slot="swiper-con">Slide 1</div>
      <div class="swiper-slide slide2" slot="swiper-con">Slide 2</div>
      <div class="swiper-slide slide3" slot="swiper-con">Slide 3</div>
		</Swipe>
    <MediaCell author="作者：大象公会" column="来自栏目：广播精选" pic="https://qnmob2.doubanio.com/img/files/file-1489047494.jpg">
    	<p class="title" slot="title">个人意见：为什么中国没有鲍勃·迪伦这样的民谣歌手</p>
			<p class="desc" slot="desc">我们这一代人的成长年代，真正的诗歌课从来都是缺席的。</p>
    </MediaCell>
    <p>szzzzzzzzzzzzzzzzz</p>
    <p>szzzzzzzzzzzzzzzzz</p>
    <p>szzzzzzzzzzzzzzzzz</p>
    <p>szzzzzzzzzzzzzzzzz</p>
    <p>szzzzzzzzzzzzzzzzz</p>
    <p>szzzzzzzzzzzzzzzzz</p>
    <p>szzzzzzzzzzzzzzzzz</p>
    <p>szzzzzzzzzzzzzzzzz</p>
    <p>szzzzzzzzzzzzzzzzz</p>
  </div>
</template>
<style>
.slide1, .slide2, .slide3 {
	text-align: center;
  line-height: 200px;
  font-size: 30px;
  color: #fff;
}
.slide1{
    background: #41b883;
}
.slide2{
    background: #364a60;
}
.slide3{
    background: #ea6f5a;
}
</style>
<script>
import Topbar from '@/components/Topbar';
import Swipe from '@/components/Swipe';
import MediaCell from '@/components/MediaCell';

export default {
  components: {
    Topbar,
    Swipe,
    MediaCell
  }
}
</script>