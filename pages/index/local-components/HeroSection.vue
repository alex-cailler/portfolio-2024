<template>
  <div id="hero-section" class="hero-section" data-bg-color="#ffffff">
    <div id="hero-section__container" class="hero-section__container">
      <div>
        <h1 class="hero-section__title">
          <span>Un developpeur pour vos projets</span>
        </h1>
        <p class="hero-section__description">Un développeur fullstack et concepteur indépendant qui propulse les visions des startups vers la réalité.</p>
        <the-button>Contacter moi</the-button>
      </div>
    </div>
    <div class="hero-section__shape--1"></div>
  </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()

onMounted(() => {

  $gsap.timeline({
    scrollTrigger: {
      trigger: document.getElementById('hero-section'),
      scrub: true,
      start: "top",
      end: "center -30%",
    }
  }).fromTo(
      document.getElementById('hero-section__container'),
      { y: "0%", autoAlpha: 1 },
      { y: "20%", autoAlpha: 0 }
  )

  // $gsap.to(document.getElementById('hero-section__container'), {
  //   opacity: 0,
  //   translateY: '-50%',
  // });
})
</script>


<style scoped lang="scss">
.hero-section {
  position: relative;
  &__container {
    width: 100%;
    padding: 15rem 10%;
    position: relative;
    z-index: 1;
  }
  &__title {
    color: #00310B;
    transition-duration: .5s;
    font-size: 120px;
    font-weight: 700;
    line-height: 110%;
    text-transform: uppercase;
    height: 240px;
    margin-bottom: 50px;
    overflow: hidden;
    position: relative;
    span {
      position: absolute;
      line-height: 110%;
      font-size: 120px;
    }
  }
  &__description {
    font-size: 24px;
    max-width: 570px;
    color: #555555;
    margin-bottom: 50px;
    line-height: 175%;
  }
  &__shape {
    &--1 {
      z-index: -1;
      position: absolute;
      height: 800px;
      width: 800px;
      left: 0;
      top: 0;
      transform: translate(-14%, -14%);
      background: linear-gradient(131deg, #EFF0E2 0%, #FEFFF6 100%);
      border-radius: 1000px;
    }
  }
}
</style>