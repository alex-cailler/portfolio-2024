<template>
  <swiper
    :effect="'cube'"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :direction="'vertical'"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><h1 style="color: black">Plopezf</h1></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg"/></swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-cube';
  import 'swiper/css/pagination';


  // import required modules
  import { EffectCube, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCube, Pagination],
      };
    },
  };
</script>

<style scoped>
.swiper {
  width: 300px;
  height: 300px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>