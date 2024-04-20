<template>
  <footer class="footer">
    <div class="footer__container">
      <h2 class="footer__title">
        get in touch
      </h2>

      <div class="footer__block-list">
        <div class="footer__block-list__item">
          <div class="footer__block-list__item__title">Navigation</div>
          <div class="footer__block-list__item__navigation__list">
            <div class="footer__block-list__item__navigation__list__item">Home</div>
            <div class="footer__block-list__item__navigation__list__item">About</div>
            <div class="footer__block-list__item__navigation__list__item">Project</div>
            <div class="footer__block-list__item__navigation__list__item">Blog</div>
            <div class="footer__block-list__item__navigation__list__item">Contact</div>
          </div>
        </div>
        <div class="footer__block-list__item">
          <div class="footer__block-list__item__title">Socials</div>
          <div class="footer__block-list__item__navigation__list">
            <div class="footer__block-list__item__navigation__list__item">Linkedin</div>
            <div class="footer__block-list__item__navigation__list__item">Twitter</div>
          </div>
        </div>
        <div class="footer__block-list__item">
          <div class="footer__block-list__item__title">Resources</div>
          <div class="footer__block-list__item__navigation__list">
            <div class="footer__block-list__item__navigation__list__item">Figma</div>
            <div class="footer__block-list__item__navigation__list__item">Portfolio v1</div>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__copy">
          <span>&copy 2024</span>
          <span>A. CAILLER</span>
        </div>
        <div class="footer__local-time">

        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
</script>


<style scoped lang="scss">
.footer {
  &__container {
    padding-left: 10%;
    padding-right: 10%;
  }
  &__title {
    font-size: 10rem;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 64px;
  }
  &__block-list {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    &__item {
      width: 100%;
      &__title {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
        border-bottom: solid 1px;
      }
      &__navigation {
        &__list {
          &__item {
            font-size: 20px;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
  &__copy {
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    line-height: 90%;
    font-weight: 700;
  }
  &__bottom {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-top: 64px;
  }
}
</style>