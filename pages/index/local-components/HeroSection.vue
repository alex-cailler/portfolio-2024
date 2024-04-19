<template>
  <div class="hero-section">
    <div class="hero-section__container">
      <div>
        <h1 class="hero-section__title">
          <span>Alexandre</span>
          <span>Cailler</span>
        </h1>
        <p class="hero-section__description">Un développeur fullstack et concepteur indépendant qui propulse les visions des startups vers la réalité.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>


<style scoped lang="scss">
.hero-section {
  &__container {
    padding-left: 10%;
    padding-right: 10%;
    height: 100vh;
    width: 100%;
  }
  &__title {
    transition-duration: .5s;
    font-size: 15.25rem;
    font-weight: 700;
    line-height: 90%;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    margin: 10rem 0 2rem;
    //span:first-child {
    //  padding-left: 15%;
    //}
    //span:last-child {
    //  padding-right: 15%;
    //  text-align: right;
    //}
  }
  &__description {
    font-size: 24px;
    max-width: 47ch;
  }
}
</style>