<template>
  <div class="testimonial">
    <div>
      <div class="testimonial__actions">
        <a href="" class="testimonial__actions__read-more">Lire plus</a>
      </div>
      <div class="testimonial__content">
        Nous avions un sujet sur la catégorisation de nos offres d’emploi. Un jour, nous avions décidé de prioriser ce chantier dont nous faisions toute une montagne. En l'espace d'une après-midi, NoBullshit Tech Engineers a réalisé tout le développement permettant de catégoriser nos annonces. Ce sujet végétait depuis plusieurs années où des heures d’investigations avaient été investies sans progression notable sur le sujet... On ne pouvait pas rêver mieux !
      </div>
    </div>
    <div>
      <div class="testimonial__divider"></div>
      <div class="testimonial__profile">
        <div class="testimonial__profile__image">
          <img src="" alt="" />
        </div>
        <div class="testimonial__profile__informations">
          <span class="testimonial__profile__name">François-Guillaume RIBREAU</span>
          <span class="testimonial__profile__job">Marketing Digital & Traffic Chez Ouest-france</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>


<style scoped lang="scss">
.testimonial {
  height: 100%;
  width: 100%;
  padding: 40px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__actions {
    display: flex;
    margin-bottom: 32px;
    align-items: center;
    gap: 8px;
    &__read-more {
      border-radius: 100rem;
      border: solid 2px #D9D9D9;
      font-size: 18px;
      font-weight: 500;
      padding: 4px 16px;
    }
  }
  &__content {
    color: black;
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
  }
  &__divider {
    height: 1px;
    width: 100%;
    background-color: #D9D9D9;
    margin-bottom: 32px;
  }
  &__profile {
    display: flex;
    gap: 16px;
    &__informations {
      color: black;
      display: flex;
      flex-direction: column;
    }
    &__name {
      font-size: 22px;
      font-weight: 500;
    }
    &__job {
      font-size: 14px;
      color: #929292;
      font-weight: 400;
    }
    &__image {
      height: 54px;
      width: 54px;
      flex-shrink: 0;
      border-radius: 100rem;
      background-color: #D9D9D9;
      img {
        height: 100%;
        width: 100%;
        border: none;
      }
    }
  }
}
</style>