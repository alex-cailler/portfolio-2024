<template>
  <div>
    <svg style="cursor:none; position: absolute">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
    </svg>
    <div class="loader">
<!--      <svg class="absolute top-0 w-full " style="height: calc(100% + 300px);"><path class="fill-secondary-400" d="M0 0 L2056 0 L2056 535.70669 Q1028 535 0 535.70669  L0 0"></path></svg>-->
      <div class="loader-container">
        <div class="loader__title">
          <span class="loader__title--1">Bienvenue</span>
          <span class="loader__title--2">sur</span>
        </div>
        <div class="loader__title">
          <span class="loader__title--3">Alexandre Cailler</span>
        </div>
        <div id="progress">0%</div>
      </div>
    </div>
    <the-header />
    <slot />
    <the-footer />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";

const { $gsap } = useNuxtApp();
const progress = { percent: 0 }

onMounted(() => {

  $gsap.to(progress, { percent: 100, duration: 3, opacity: 0, y: '-100%', onUpdate: function() {
      document.getElementById( 'progress' ).innerHTML = Math.round(progress.percent) + '%';
    }});
  $gsap.to('.loader__title--1', { opacity: 1, duration: 0.350, delay: 0.3,  ease: 'expo.inOut'});
  $gsap.to('.loader__title--1', { x: '-25%', opacity: 1, duration: 0.350, delay: 0.650, ease: 'expo.inOut'});

  $gsap.to('.loader__title--2', { opacity: 1, duration: 0.350, delay: 1, ease: 'expo.inOut'});
  $gsap.to('.loader__title--2', { x: '-75%', opacity: 1, duration: 0.350, delay: 1.350, ease: 'expo.inOut'});

  $gsap.to('.loader__title--3', { y: '-40px', duration: 0.350, delay: 1.7, ease: 'expo.inOut'});
  $gsap.to('.loader__title--3', { opacity: 1, duration: 0.350, delay: 2.050, ease: 'expo.inOut'});
  $gsap.to('.loader__title--3', { x: '-10%', opacity: 1, duration: 0.350, delay: 2.2, ease: 'expo.inOut'});

  $gsap.to('.loader__title', { opacity: 0, delay: 2.5, duration: 1 })

  $gsap.set('.loader__title', { autoAlpha: 0, delay: 3.5, duration: 1});

  setTimeout(function() {
    $gsap.killTweensOf('.loader');
    $gsap.killTweensOf(progress);
    $gsap.to('.loader', { width: '100%', duration: 0.5, y: '-100%', borderRadius: '0px' });

    $gsap.from(".hero-section__title span", {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 7,
      opacity: 0,
      duration: 1.5,
      stagger: {
        amount: 1
      }
    })
  },4000)
})

</script>


<style scoped lang="scss">
.loader {
  position: fixed;
  z-index: 10022;
  height: 100vh;
  // border-radius: 0 0 100% 100%;
  overflow: hidden;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  top: 0;
  left: 0;
  color: white;
  &__title {
    display: flex; gap: 4px;
    font-weight: 600;
    font-size: 4rem;
    span { display: block }
    &--1 {
      opacity: 0;
      color: #aeae9d;
    }
    &--2 {
      opacity: 0;
      color: #aeae9d;
    }
    &--3 {
      font-size: 6rem;
      opacity: 0;
    }
  }
  #progress {
    position: absolute;
    bottom: 10%;
    right: 10%;
    font-size: 3rem;
  }
}
</style>


