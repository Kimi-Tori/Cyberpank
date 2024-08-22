<template>
    <section class="home-intro position-relative">
        <div class="position-relative">
            <swiper :navigation="false" :pagination="{clickable: false}" :modules="modules" v-bind="swiperOptions">
                <swiper-slide v-for='item in slide' :key='item' class="d-flex justify-center align-center h-100 w-100 overflow-hidden">
                    <img :src="item.src" class="home-intro__slide w-auto" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="home-intro__container position-absolute d-flex flex-column align-center justify-center align-md-start w-100 pa-5 pa-md-12">
            <div class="Archangelsk-30-400-adaptive-62 text-center text-md-left">Доступно на всех платформах</div>
            <v-btn class="home-intro__container-btn Roboto-20-700-adaptive-24 text-capitalize color-yellow py-3 px-7 mt-6 py-md-5 px-md-10">Узнать больше</v-btn>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

export default {
    name: 'home-intro',
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [ Autoplay ],
        };
    },
    data() {
        return {
            slide: [
                { src: require('@/assets/home/home-intro-desktop-1.jpg') },
                { src: require('@/assets/home/home-intro-desktop-2.jpg') },
                { src: require('@/assets/home/home-intro-desktop-3.jpg') }
            ],
            swiperOptions: {
                autoplay: {
                    delay: 3000,  // Задержка между слайдами (в миллисекундах)
                    disableOnInteraction: false,  // Оставить автопрокрутку активной при взаимодействии пользователя
                },
                simulateTouch: false,   // Отключить имитацию сенсорных жестов
                touchEventsTarget: 'container',
                touchRatio: 0,
                allowTouchMove: false,  // Отключить перемещение слайдов при касании
            }
        }
    }
}
</script>

<style lang="scss">
.home-intro {
    min-height: 750px;

    @include up($md) {
        min-height: 100vh;
    }

    &__slide {
        object-fit: contain;
        height: 90vh;

        @include up($md) {
            height: 100vh;
            object-fit: cover;
            width: 100% !important;
        }
    }

    &__container {
        bottom: -7%;
        right: 0;
        z-index: $z-index-content;
        background-color: $yellow;
        clip-path: polygon(15% 0%, 100% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%, 0% 100%, 0% 20%);
        max-width: 320px;
        
        @include up($md) {
            max-width: 625px;
            right: 10%;
            bottom: 0;
        }

        &-btn {
            border-radius: 0;
            background-color: $black;
            height: auto !important;
        }
    }
}
</style>