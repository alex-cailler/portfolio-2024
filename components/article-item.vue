<template>
  <article class="article-item">
    <div class="article-item__image"></div>
    <div class="article-item__informations">
      <div class="article-item__informations__tag">
        Tag
      </div>
      <div class="article-item__informations__date">
        16 Fév. 2024
      </div>
    </div>
    <div class="article-item__title">{{ props.article.title }}</div>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  article: { id: string, title: string, category_id: string }
}

const props = defineProps<Props>()
</script>


<style scoped lang="scss">
.article-item {
  width: 100%;
  &__image {
    height: 230px;
    border-radius: 20px;
    background-color: #D9D9D9;
    margin-bottom: 16px;
  }
  &__informations {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  &__title {
    font-size: 32px;
  }
}
</style>