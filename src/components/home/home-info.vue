<template>
    <section class="home-info">
      <v-container class="home-info">
        <h1 class="Archangelsk-30-400-adaptive-62">Найт-Сити изменит тебя навсегда!</h1>
        <p class="Roboto-16-400-adaptive-18 mt-6">
          <span class="color-blue">Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
        </p>
        <div class="d-lg-flex mt-16">
          <div class="d-sm-flex flex-lg-column justify-center mr-lg-8">
            <div class="home-info__container d-flex align-center justify-center w-100 overflow-hidden">
              <img :src="img1" class="w-100 mr-sm-4 mr-lg-0">
            </div>
            <div class="home-info__container d-flex align-center justify-center w-100 overflow-hidden mt-8 mt-sm-0 ml-sm-4 ml-lg-0 mt-lg-8">
              <img :src="img2" class="w-100">
            </div>
          </div>
          <div class="home-info__container-big d-flex align-center justify-center w-100 w-lg-100 overflow-hidden mt-8 mt-lg-0">
            <img :src="img3" class="h-100 w-sm-100">
          </div>
        </div>
      </v-container>
    </section>
  </template>
  
  <script>
  // Импорт изображений
  import img1 from '@/assets/info/home-info-1.jpg';
  import img2 from '@/assets/info/home-info-2.jpg';
  import img3 from '@/assets/info/home-info-3.jpg';
  
  export default {
    name: 'home-info',
    data() {
      return {
        img1,
        img2,
        img3
      };
    }
  }
  </script>
  
  <style lang="scss">
  .home-info {
    &__container {
      clip-path: polygon(10% 0%, 100% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%, 0% 100%, 0% 20%);
      
      @include up($lg) {
        min-width: 460px;
      }
  
      &-big {
        clip-path: polygon(10% 0%, 100% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%, 0% 100%, 0% 15%);
  
        @include up($lg) {
        }
      }
    }
  }
  </style>