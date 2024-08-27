<template>
    <section class="home-set overflow-hidden">
        <img src="@/assets/set/set-img.jpg" class="home-set__img">
        <v-container class="my-16 d-md-flex">
            <div>
                <img src="@/assets/set/set-img-2.png" class="home-set__desctop w-100">
                <div class="d-flex align-center justify-center mt-6 flex-md-column flex-lg-row">
                    <img src="@/assets/set/set-img-hp.png" class="home-set__product h-100">
                    <img src="@/assets/set/set-img-x.png" class="home-set__product-mini h-100 mx-3 mx-md-0 my-md-6 my-lg-0 mx-lg-6">
                    <img src="@/assets/set/set-img-logo.png" class="home-set__product h-100">
                </div>
            </div>
            <div class="ml-md-8">
                <h1 class="Archangelsk-30-400-adaptive-62 mt-10 mt-md-0">Полное погружение вместе с HP</h1>
                <p class="Roboto-16-400-adaptive-18 mt-6">Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!</p>
                <div class="d-flex mt-6">
                    <icon-template name="palitra" class="home-set__socials" />
                    <p class="Roboto-16-400-adaptive-18 ml-4">Яркие насыщенные цвета</p>
                </div>
                <div class="d-flex mt-4">
                    <icon-template name="stars" class="home-set__socials" />
                    <p class="Roboto-16-400-adaptive-18 ml-4">Кристальная четкость изображения</p>
                </div>
                <div class="d-flex mt-4">
                    <icon-template name="document" class="home-set__socials" />
                    <p class="Roboto-16-400-adaptive-18 ml-4">Быстрые движения и плавный геймплей</p>
                </div>
                <router-link :to="{ name: 'pattern' }"><v-btn class="home-set__btn Roboto-16-400-adaptive-18 text-capitalize py-5 px-12 mt-10 h-auto color-yellow">Подробнее</v-btn></router-link>
            </div>
        </v-container>
    </section>
</template>

<script>
import IconTemplate from '@/components/elements/icon-template.vue'

export default {
    name: 'home-set',
    components: {
        IconTemplate
    }
}
</script>

<style lang="scss" scoped>
.home-set {
    background-color: $yellow;

    &__img {
        max-height: 70px;
        height: 100%;
    }

    &__desctop {
        @include up($md) {
            min-width: 460px;
        }
    }

    &__product {
        max-height: 45px;

        @include up($md) {
            max-height: 80px;
            min-height: 80px;
        }

        &-mini {
            max-height: 10px;

            @include up($md) {
                max-height: 20px;
                min-height: 20px;
            }
        }
    }

    &__socials {
        max-width: 24px;
        max-height: 24px;
    }

    &__btn {
        border-radius: 0;
        background-color: $black;
    }
}
</style>