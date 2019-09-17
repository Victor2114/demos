<template>
  <div class="banner">
    <div class="bar swiper-pagination" slot="pagination">
      <!--<div class="progress"></div>-->
    </div>
    <swiper  :options="swiperOption" v-if="banner.length">
      <swiper-slide class="swiper-slide" v-for="(item,index) in banner" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="" />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getRecommend } from '../api/recommend.js'
import { ERR_OK } from 'api/config'
export default {
  name: 'Banner',
  data () {
    return {
      banner: [],
      swiperOption: {
        // spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  beforeMount () {
    getRecommend().then(res => {
      if (res.code === ERR_OK) {
        this.banner = res.data.slider
        console.log(this.banner)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner a,.banner img{
    display:inline-block;
    width: 100%;
    height: 100%;
  }
</style>
