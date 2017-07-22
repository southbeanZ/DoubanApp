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
    <Book pic="https://img3.doubanio.com/lpic/s23128183.jpg" name="杀死一只知更鸟" :score="8.0"></Book>
    <Book pic="https://img3.doubanio.com/lpic/s23128183.jpg" name="22" :score="3.4"></Book>
    <Book pic="https://img3.doubanio.com/lpic/s23128183.jpg" name="11" :score="1.6"></Book>
    <Book pic="https://img3.doubanio.com/lpic/s23128183.jpg" name="112" :score="7.3"></Book>
    <Book pic="https://img3.doubanio.com/lpic/s23128183.jpg" name="杀死一只知更鸟" :score="9.9"></Book>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Book from '@/components/Book'

export default {
  components: {
    Topbar,
    Book
  }
}
</script>