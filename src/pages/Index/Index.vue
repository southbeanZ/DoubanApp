<template>
  <div class="g-con">
    <Topbar isBg title="首页">
	    <a href="javascript:;" class="u-btn" slot="right">
        <img src="../../assets/images/ic_action_share.png" class="icon">
      </a>
    </Topbar>
		<Swipe swipeid="swipe1" :autoplay="3000" class="m-swipe">
			<div class="swiper-slide slide1 u-slide" slot="swiper-con">
        <img class="pic" src="../../assets/images/banner/01.jpg"/>
      </div>
      <div class="swiper-slide slide2 u-slide" slot="swiper-con">
        <img class="pic" src="../../assets/images/banner/02.jpg"/>
      </div>
      <div class="swiper-slide slide3 u-slide" slot="swiper-con">
        <img class="pic" src="../../assets/images/banner/03.jpg"/>
      </div>
		</Swipe>
		<!--<Swipe swipeid="swipe2" :loop="false" paginationType="fraction" :autoplay="2000" effect="cube">
			<div class="swiper-slide slide1" slot="swiper-con">Slide 1</div>
      <div class="swiper-slide slide2" slot="swiper-con">Slide 2</div>
      <div class="swiper-slide slide3" slot="swiper-con">Slide 3</div>
		</Swipe>-->
    <MediaCell :url="item.target.url" :author="item.target.author.name" :column="item.source_cn" :pic="item.target.cover_url" v-for="item of recommendData" :key="item.id">
    	<p class="title" slot="title">{{item.title}}</p>
			<p class="desc" slot="desc">{{item.target.desc}}</p>
    </MediaCell>
  </div>
</template>
<style lang="scss">
.m-swipe {
  .u-slide {
    .pic {
      width: 100%;
      height: 100%;
    }
  }
}
// .slide1, .slide2, .slide3 {
// 	text-align: center;
//   line-height: 200px;
//   font-size: 30px;
//   color: #fff;
// }
// .slide1{
//     background: #41b883;
// }
// .slide2{
//     background: #364a60;
// }
// .slide3{
//     background: #ea6f5a;
// }
</style>
<script>
import Topbar from '@/components/Topbar';
import Swipe from '@/components/Swipe';
import MediaCell from '@/components/MediaCell';

export default {
  data() {
    return {
      recommendData: []
    } 
  },
  components: {
    Topbar,
    Swipe,
    MediaCell
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var self = this;
      this.axios.get('/api/homeData').then((response) => {
        self.recommendData = response.data.data.recommend_feeds;
      });
    }
  }
}
</script>