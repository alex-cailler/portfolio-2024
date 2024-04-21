<template>
  <header class="header">
    <div class="header__container">
      <div>
        The logo
      </div>
      <div>
        <ul>
          <li @click="openMenu">
            <div class="circle-chart">
              <svg viewBox="0 0 36 36">
                <path v-if="percentScroll > 0.1" class="circle" :stroke-dasharray="`${percentScroll}, 100`" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div class="percentage">
                <span></span>
                <span></span>
              </div>
            </div>
          </li>
          <li><a href="mailto:alex02.cailler@gmail.com">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>
  <div id="menu-overlay" :class="[`menu-overlay`, {
    'is-active': menuIsOpen
  }]">
    <ul>
      <li @click="closeMenu">Acceuil</li>
      <li>A propos</li>
      <li>Projets</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script setup>
const menuIsOpen = ref(false)
const percentScroll = ref(0)

const { $gsap } = useNuxtApp()

const openMenu = () => {

  $gsap.to('#menu-overlay', {
    zIndex: 1000,
  }).then(() => {
    $gsap.to('#menu-overlay', {
      opacity: 1,
      duration: 0.250,
    })
  })

}

const closeMenu = () => {
  menuIsOpen.value = false

  $gsap.to('#menu-overlay', {
    opacity: 0,
    duration: 0.250,
  }).then(() => {
    $gsap.to('#menu-overlay', {
      zIndex: -1,
    })
  })
}

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      percentScroll.value = Math.round(scrollPercent * 100);
    });
  }
})
</script>


<style scoped lang="scss">
.header {
  z-index: 999;
  padding: 20px 50px;
  border-bottom: solid 1px #E5E7D9;
  position: fixed;
  top: 0;
  width: 100vw;
  // background-color: #FEFFF6;
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
  opacity: 0;
  display: flex;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.90);
  backdrop-filter: blur(15px);
  padding-left: 15%;

  top: 0;
  transition: 1s open-menu;
  ul {
    li {
      line-height: 100%;
      font-size: 9rem;
      font-weight: 600;
      color: white;
    }
  }
}


.circle-chart {
  cursor: pointer;
  color:var(--selected-color);
  width: 50px;
  display:grid;
  place-items:center;

  > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }

  .circle-bg {
    stroke-width: 1;
  }

  .circle {
    fill: none;
    stroke: black;
    stroke-width: 1.25px;
    stroke-linecap: round;
    animation: progress 1.2s ease-in-out forwards;
  }

  .percentage {
    display: flex;
    flex-direction: column;
    gap: 6px;
    span {
      height: 2px;
      width: 16px;
      background-color: black;
    }
  }

}


@-webkit-keyframes open-menu {
  0% {
    width: 100vw;
    height: 100vh;
  }
  100% {
    z-index: 1000;
    opacity: 1;
  }
}
</style>