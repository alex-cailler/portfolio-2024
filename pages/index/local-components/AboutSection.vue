<template>
  <div class="about-section" data-bg-color="#000000">
    <div class="about-section__container">
      <div class="about-section__content__text">
        <div class="about-section__label">
          Un petit mot sur moi
        </div>
        <p>
          "Développeur passionné par mon travail, dévoué à la satisfaction de mes clients.
          Je trouve une grande joie dans l'acte de créer et d'innover dans le domaine du développement,
          ce qui me pousse à travailler avec assiduité et détermination.
          Ma passion pour le développement et mon engagement envers mes clients
          sont au cœur de mon identité professionnelle."
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SplitType from 'split-type'

const { $gsap } = useNuxtApp();
onMounted(() => {
  if (process.client) {
    const split = new SplitType('.about-section__content__text > p', { types: 'lines' });
    console.log(split.lines)

    split.lines.forEach((target) => {
      $gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        duration: 10,
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top center",
          end: "bottom center"
        }
      });
    });
  }
})
</script>

<style lang="scss">
.about-section {
  background-color: #000000;
  &__container {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    align-items: center;
    height: 100vh;
    position: relative;
  }
  //&__image {
  //  display: flex;
  //  justify-content: center;
  //  img {
  //    height: auto;
  //    width: 500px;
  //    filter: saturate(0);
  //    border-radius: 100rem 100rem 1rem 100rem;
  //  }
  //}
  &__label {
    position: absolute;
    width: fit-content;
    color: white;
    top: 1rem;
    left: -24%;
  }
  &__content {
    &__text {
      position: relative;
      margin: 20%;
      width: 100%;
      p {
        div {
          //font-style: italic;
          line-height: 140%;
          font-size: 32px;
          color: transparent;
          margin: 0;
          background: linear-gradient(
                  to right,
                  rgb(255, 255, 255) 50%,
                  rgb(37, 37, 37) 50%
          );
          background-size: 200% 100%;
          background-position-x: 100%;
          background-clip: text;
          -webkit-background-clip: text;
        }
      }
    }
  }
}
</style>
