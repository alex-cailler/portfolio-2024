<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script lang="ts">
</script>


<style scoped lang="scss">
.btn {
  font-size: 20px;
  border: none;
  background: linear-gradient(90deg, #83FF8F 0%, #1FEC4C 100%);
  border-radius: 10px;
  padding: 10px 24px;
  letter-spacing: 1px;
  line-height: 175%;
}
</style>