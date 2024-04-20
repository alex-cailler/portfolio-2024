<template>
  <div>
    <the-header />
    <slot />
    <the-footer />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
</script>


<style scoped lang="scss">

</style>