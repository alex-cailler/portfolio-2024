<template>
  <div>
    <svg style="cursor:none; position: absolute">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
    </svg>
    <div class="loader">
      <div class="loader-container">
        <div class="loader__title"># Hello World !</div>
        <div><span id="progress">0</span><span>%</span></div>
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
const progress = { percent:0 }

onMounted(() => {

  setTimeout(function() {
    $gsap.killTweensOf('.loader');
    $gsap.killTweensOf(progress);
    $gsap.to('.loader', { width: '100%', duration: 0.5, opacity: 0, zIndex: -1 });
    $gsap.to(progress, { percent: 100, duration: 0.5, opacity: 0, zIndex: -1, onUpdate: function() {
        document.getElementById( 'progress' ).innerHTML = Math.round(progress.percent);
    }});

    // from to main hero section hear
  },1500)
})

</script>


<style scoped lang="scss">
.loader {
  position: fixed;
  z-index: 10022;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  top: 0;
  left: 0;
}
</style>