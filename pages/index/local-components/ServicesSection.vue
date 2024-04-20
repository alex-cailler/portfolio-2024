<template>
  <div class="services" id="services-scroll-horizontal">
    <div class="services__container">
      <h2 class="services__title">Services</h2>
      <div class="services__track">
        <div class="services__list">
          <a v-for="(service, key) in services" :key="key" class="services__list__item">
            <div class="services__list__item__header">
              // logo
            </div>
            <div class="services__list__item__footer">
              {{ service.title }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { services } from "~/database/services";

const { $gsap } = useNuxtApp()
if (process.client) {
  let horizontalSection = document.querySelector('.services__list');

  $gsap.to('.services__list', {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
      trigger: '.services__list',
      start: 'center center',
      end: '+=2000px',
      pin: '#services-scroll-horizontal',
      scrub: true,
      invalidateOnRefresh: true,
    }
  });
}


</script>


<style scoped lang="scss">
.services {
  height: 100vh;
  &__container {
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
  }
  &__title {
    margin: 0;
    font-size: 12rem;
  }
  &__list {
    display: flex;
    gap: 16px;
    &__item {
      flex-shrink: 0;
      border-radius: 20px;
      border: solid 1px;
      height: 400px;
      width: 400px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }
}
</style>