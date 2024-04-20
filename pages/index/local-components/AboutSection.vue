<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AboutSection"
})
</script>

<template>
  <div class="about-section">
    <div class="about-section__container">
      <div class="about-section__image">
        <img src="/Sujet.png" alt="">
      </div>
      <div class="about-section__content">
        <div class="about-section__content__text">
          Développeur passionné par mon travail, dévoué à la satisfaction de mes clients.
          Je trouve une grande joie dans l'acte de créer et d'innover dans le domaine du développement,
          ce qui me pousse à travailler avec assiduité et détermination.
          Ma passion pour le développement et mon engagement envers mes clients
          sont au cœur de mon identité professionnelle.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-section {
  &__container {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    align-items: center;
    height: 100vh;
    & > div {
      width: 100%;
    }
  }
  &__image {
    display: flex;
    justify-content: center;
    img {
      height: auto;
      width: 350px;
    }
  }
  &__content {
    &__text {
      font-size: 32px;
      line-height: 170%;
    }
  }
}
</style>