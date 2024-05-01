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
        <div class="about-section__image">
          <img src="/profile-image.png" alt="profile image" />
        </div>
      </div>
    </div>
    <div class="about-section__shape about-section__shape--1"></div>
    <div class="about-section__shape about-section__shape--2"></div>
  </div>
</template>

<script lang="ts" setup>
import SplitType from 'split-type'

const { $gsap } = useNuxtApp();
onMounted(() => {
  if (process.client) {
    const split = new SplitType('.about-section__content__text > p', { types: 'lines' });

    split.lines.forEach((target) => {
      $gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          duration: 10,
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
  border-radius: 30px 30px 0 0;
  position: relative;
  &__container {
    padding: 15rem 10%;
    display: flex;
    align-items: center;
    position: relative;
    & > div {
      width: 100%;
    }
  }
  &__right {
    display: flex;
    position: relative;
    z-index: 1;
  }
  &__left {
    position: relative;
    z-index: 1;
    display: block;
  }
  &__image {
    margin: auto;
    position: relative;
    width: 500px;
    img {
      filter: saturate(0);
      width: 100%;
      height: auto;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0) 0%, #000000  100%);;
      left: 0;
      height: 50%;
      width: 100%;
    }
  }
  &__title {
    width: fit-content;
    color: white;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    font-size: 70px;
    line-height: 100px;
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
                  #787878 50%,
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
  &__shape {
    border-radius: 100rem;
    height: 529px;
    width: 529px;
    position: absolute;
    &--1 {
      background: linear-gradient(45deg, #1F1F1F 0%, #000000  65%);
      left: 0;
      bottom: 0;
      transform: translate(10%, -10%);
    }
    &--2 {
      background: linear-gradient(220deg, #1F1F1F 0%, #000000  65%);
      transform: translate(50%, 40%);
      right: 50%;
      top: 0
    }
  }
}
</style>
