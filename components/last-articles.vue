<template>
  <div class="last-articles">
    <div class="last-articles__container">
      <div class="last-articles__title">
        <span>Nos derniers</span>
        <span>Article</span>
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
  }
  &__title {
    font-size: 10em;
    display: flex;
    flex-direction: column;
    line-height: 90%;
    font-weight: bold;
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