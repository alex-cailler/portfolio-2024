<template>
  <div>
    <div class="header">
      <div class="header__container">
        <div>
          The logo
        </div>
        <div>
          <ul>
            <li @click="openMenu">Menu</li>
            <li><a href="mailto:alex02.cailler@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="[`menu-overlay`, {
      'is-active': menuIsOpen
    }]">
      <ul>
        <li @click="closeMenu">Acceuil</li>
        <li>A propos</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const menuIsOpen = ref(false)

const openMenu = () => {
  menuIsOpen.value = true
}

const closeMenu = () => {
  menuIsOpen.value = false
}
</script>


<style scoped lang="scss">
.header {
  padding: 20px 50px;
  border-bottom: solid 1px;
  &__container {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 8px;
    li {
      a {
        color: black;
      }
    }
  }
}

.menu-overlay {
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  opacity: 0;
  transition: all ease .5s;
  display: flex;
  align-items: center;
  padding-left: 15%;
  &.is-active {
    z-index: 1000;
    opacity: 1;
    color: white;
    background-color: rgba(0, 0, 0, 0.90);
    backdrop-filter: blur(15px);

    top: 0;
  }
  ul {
    li {
      line-height: 100%;
      font-size: 9rem;
      font-weight: 600;
      color: white;
    }
  }
}
</style>