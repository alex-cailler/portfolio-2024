<template>
  <div class="services">
    <div class="services__container">
      <h2 class="services__title">Services</h2>
      <div class="services__list">
        <div v-for="(service, key) in services" :key="key" class="services__list__item">
          {{ service.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { services } from "~/database/services";
</script>


<style scoped lang="scss">
.services {
  height: 100vh;
  &__container {
    padding-left: 10%;
    padding-right: 10%;
  }
  &__title {
    margin: 0;
    font-size: 12rem;
  }
}
</style>