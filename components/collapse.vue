<template>
  <div :class="['collapse', { 'is-open': isOpen}]" @click="isOpen = !isOpen">

    <div class="collapse__header">
      <div class="collapse__header__title">{{ props.title }}</div>
    </div>

    <div class="collapse__content">
      {{ props.content }}
    </div>

    <div class="collapse__icon-status">
      <div class="collapse__icon-status__vertical"></div>
      <div class="collapse__icon-status__horizontal"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string,
  content: string,
  id?: string
}
const isOpen = ref(false)

const props = defineProps<Props>()
</script>


<style scoped lang="scss">
.collapse {
  width: 100%;
  grid-column-gap: .5em;
  grid-row-gap: .5em;
  cursor: pointer;
  flex-direction: column;
  padding-top: 3em;
  padding-bottom: 2.5em;
  padding-right: 6em;
  display: flex;
  position: relative;
  border-top: solid 1px #D9D9D9;
  &.is-open {
    .collapse__content {
      opacity: 1;
      height: fit-content;
    }
  }
  &__header__title {
    font-size: 42px;
    font-weight: 500;
    user-select: none;
  }
  &__content {
    opacity: 0;
    height: 0;
    overflow: hidden;
    font-size: 18px;
    font-weight: 300;
  }
  &__icon-status {
    width: 2em;
    height: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 3.5em;
    bottom: auto;
    left: auto;
    right: 0%;
    &__vertical, &__horizontal {
      background-color: black;
      width: 2px;
      height: 100%;
      position: absolute;
    }
  }
}
</style>