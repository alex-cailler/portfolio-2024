<template>
  <div class="why-us-section">
    <div class="why-us-section__container">

      <div class="why-us-section__left">

        <h2>Pourquoi choisir Alexandre ?</h2>

      </div>
      <div class="why-us-section__list">

        <template v-for="question in questions" :key="question.id">
          <collapse :id="question.id" :title="question.title" :content="question.content" />
        </template>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { whyUsQuestions as questions } from "~/database/faq";
</script>


<style scoped lang="scss">
.why-us-section {
  height: 100vh;
  &__container {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: space-between;
    h2 {
       font-weight: 500;
    }
    & > div {
      width: 100%;
    }
  }
}
</style>