<template>
  <div class="header">
    <div class="header__container">
      <div>
        The logo
      </div>
      <div>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="mailto:alex02.cailler@gmail.com">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

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
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>