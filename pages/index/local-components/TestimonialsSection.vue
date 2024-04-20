<template>
  <div class="testimonials-section">
    <div class="testimonials-section__container">
      <div class="testimonials-section__left">
        <div class="testimonials-section__title">
          <h2>
            <span>Témoignages</span>
          </h2>
        </div>
      </div>
      <div class="testimonials-section__testimonials">
        <swiper
          :effect="'cards'"
          :grabCursor="false"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <testimonial />
          </swiper-slide>
          <swiper-slide>
            <testimonial />
          </swiper-slide>
          <swiper-slide>
            <testimonial />
          </swiper-slide>
          <swiper-slide>
            <testimonial />
          </swiper-slide>
          <swiper-slide>
            <testimonial />
          </swiper-slide>
          <swiper-slide>
            <testimonial />
          </swiper-slide>
          <swiper-slide>
            <testimonial />
          </swiper-slide>
          <swiper-slide>
            <testimonial />
          </swiper-slide>
          <swiper-slide>
            <testimonial />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>

<style lang="scss">
.testimonials-section {
  height: 100vh;
  &__container {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      width: 100%;
    }
  }
  &__title {
    h2 {
      display: flex;
      flex-direction: column;
      line-height: 90%;
      font-size: 7rem;
    }
  }
}
.swiper {
  height: 700px;
  width: 500px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: #F5F5F5;
}
.swiper-slide-active {
  background-color: #FFFFFF;
  box-shadow: 0 4px 34px rgba(0,0,0, 13%);
}
.swiper-slide-prev {
  background-color: #EAEAEA;
}
.swiper-slide-next {
  background-color: #EAEAEA;
}
</style>