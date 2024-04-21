<template>
  <div class="hero-section" data-bg-color="#ffffff">
    <div class="hero-section__container">
      <div>
        <h1 class="hero-section__title">
          Un developpeur pour vos projets
        </h1>
        <p class="hero-section__description">Un développeur fullstack et concepteur indépendant qui propulse les visions des startups vers la réalité.</p>
      </div>
      <the-button>Contacter moi</the-button>
    </div>
    <div class="hero-section__shape--1"></div>
  </div>
</template>

<script lang="ts" setup>
</script>


<style scoped lang="scss">
.hero-section {
  position: relative;
  &__container {
    width: 100%;
    padding: 15rem 10%;
  }
  &__title {
    color: #00310B;
    transition-duration: .5s;
    font-size: 120px;
    font-weight: 700;
    line-height: 110%;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
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