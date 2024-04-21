<template>
  <div class="about-section" data-bg-color="#000000">
    <div class="about-section__container">
      <div class="about-section__left">
        <div class="about-section__title">
          <span>Un petit mot</span>
          <span>sur qui je suis</span>
        </div>
        <div class="about-section__content__text">
          <p>
            Développeur passionné par mon travail, dévoué à la satisfaction de mes clients. Je trouve une grande joie dans l'acte de créer et d'innover dans le domaine du développement, ce qui me pousse à travailler avec assiduité et détermination. Ma passion pour le développement et mon engagement envers mes clients sont au cœur de mon identité professionnelle.
          </p>
        </div>
        <the-button>Contacter moi</the-button>
      </div>
      <div class="about-section__right">
        <img class="about-section__image" src="/profile-image.jpg" alt="profile image" />
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
  border-radius: 30px;
  &__container {
    padding: 10rem 10%;
    display: flex;
    align-items: center;
    position: relative;
    & > div {
      width: 100%;
    }
  }
  &__image {
    margin: auto;
    height: auto;
    width: 500px;
    filter: saturate(0);
  }
  &__title {
    width: fit-content;
    color: white;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    font-size: 100px;
    line-height: 100%;
    text-transform: uppercase;
    margin-bottom: 50px;
  }
  &__content {
    margin-bottom: 50px;
    &__text {
      margin-bottom: 50px;
      p {
        div {
          //font-style: italic;
          line-height: 170%;
          font-size: 28px;
          letter-spacing: 1px;
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
