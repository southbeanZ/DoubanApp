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
    <Swipe class="m-swipe" swipeid="swipe1" :loop="false" :pagination="false" :slidesPerView="3.5" :slideData="bookData" ref="swipe">
      <div class="swiper-slide u-slide" slot="swiper-con" v-for="item in bookData" :key="item.id">
        <Book :pic="item.cover.url" :name="item.title" :score="item.rating.value"></Book>
      </div>
    </Swipe>
  </div>
</template>
<style lang="scss">
.m-swipe {
  .u-slide {
    display: inline-block;
    margin: 10px 5px;
  }
}
</style>
<script>
import Topbar from '@/components/Topbar'
import Book from '@/components/Book'
import Swipe from '@/components/Swipe'

export default {
  data() {
    return {
      bookData: []
    }
  },
  components: {
    Topbar,
    Swipe,
    Book
  },
  created() {
    this.fetchData();
  },
  mounted() {
    let self = this;
    setTimeout(function() {
      self.$refs.swipe.initSwipe();
    }, 0);
  },
  methods: {
    fetchData() {
      var self = this;
      this.axios.get('/api/bookData').then((response) => {
        let items = response.data.data.subject_collection_items;
        items.forEach((_el) => {
          self.bookData.push(_el);
        });
      });
    }
  }
}
</script>