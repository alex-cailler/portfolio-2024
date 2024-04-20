<template>
  <div class="last-articles" data-bg-color="#ffffff">
    <div class="last-articles__container">
      <div class="last-articles__container__header">
        <div class="last-articles__title">
          <span>Nos derniers</span>
          <span>Article</span>
        </div>
        <div class="last-articles__redirect">
          <svg width="100%" height="100%" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8165 0.533203L22.5236 10.2403L12.8165 19.9474L11.4023 18.5332L18.6952 11.2403H0.109375V9.24031H18.6952L11.4023 1.94742L12.8165 0.533203Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div class="last-articles__list">
        <article-item v-for="article in articles" :key="article.id" :article="article" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleItem from "~/components/article-item.vue";
import { articles } from "~/database/articles";
</script>


<style scoped lang="scss">
.last-articles {
  height: 100vh;
  &__container {
    padding-left: 10%;
    padding-right: 10%;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__title {
    font-size: 10em;
    display: flex;
    flex-direction: column;
    line-height: 90%;
    font-weight: bold;
  }
  &__redirect {
    height: 100px;
    width: 100px;
    border-radius: 100rem;
    background-color: #D9D9D9;
    padding: 30px;
    svg {
      height: auto;
      width: 100%;
    }
  }
  &__list {
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    padding-left: 5%;
    padding-right: 5%;
  }
}
</style>