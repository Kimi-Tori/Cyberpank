<template>
    <footer class="the-footer">
      <v-container class="d-md-flex mt-10 mt-md-3 justify-md-space-between">
        <div class="d-flex flex-column align-center flex-md-row mr-md-7">
          <img :src="require('@/assets/footer/logo.png')" class="the-footer__img">
          <img :src="require('@/assets/footer/cd-logo.png')" class="the-footer__img mt-6 mt-md-0 ml-md-8">
        </div>
        <div class="d-flex flex-column flex-md-row justify-center align-center mt-13 mt-md-0 ml-md-7">
          <router-link :to="{ name: 'pattern' }" class="text-center color-black">Лицензия</router-link>
          <router-link :to="{ name: 'pattern' }" class="text-center color-black mt-4 mt-md-0 ml-md-8">Политика конфиденциальности</router-link>
        </div>
      </v-container>
      <div class="the-footer__copyrate">
        <v-container class="pa-3">
          <p class="Roboto-12-400 color-white text-center">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
        </v-container>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "the-footer",
  };
  </script>
  
  <style lang="scss">
  .the-footer {
    &__img {
      max-width: 200px;
    }

    &__copyrate {
      background-color: $black;
    }
  }
  </style>