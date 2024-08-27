<template>
  <header :class="headerClass">
    <v-container class="d-flex flex-column align-center flex-md-row">
      <router-link :to="{ name: 'home' }">
        <img :src="logoSrc" alt="logo" class="the-header__logo">
      </router-link>
      <div class="the-header__socials d-flex justify-center justify-md-end w-100 mt-3">
        <a href="https://www.youtube.com/" target="_blank" class="mx-3"><icon-template name="youtube" class="the-header__socials-icon" /></a>
        <a href="https://vk.com/" target="_blank" class="mx-3"><icon-template name="vk" class="the-header__socials-icon" /></a>
        <a href="https://facebook.com/" class="mx-3"><icon-template name="facebook" class="the-header__socials-icon" /></a>
        <a href="https://twiter.com/" class="mx-3"><icon-template name="twiter" class="the-header__socials-icon" /></a>
        <a href="https://twitch.com/" class="mx-3"><icon-template name="twitch" class="the-header__socials-icon" /></a>
        <a href="https://instagram.com/" class="mx-3"><icon-template name="inst" class="the-header__socials-icon" /></a>
      </div>
    </v-container>
    
  </header>
</template>

<script>
import IconTemplate from '@/components/elements/icon-template.vue';
import logo from '@/assets/header/logo.png'; // Импорт изображения

export default {
  name: "the-header",
  components: {
    IconTemplate
  },
  computed: {
      headerClass() {
          return this.$route.name === 'home' ? 'the-header position-absolute w-100' : 'the-header w-100';
      },
      logoSrc() {
          return logo; // Использование импортированного изображения
      }
  }
};
</script>
  
<style scoped lang="scss">
.the-header {
    z-index: $z-index-top;

    &__logo {
      max-width: 200px;
    }

    &__socials {

      &-icon {
        max-width: 25px;
        max-height: 25px;
        fill: $black;
        transition: 0.2s;

        &:hover {
          fill: $yellow !important;
        }
      }
    }
}
</style>