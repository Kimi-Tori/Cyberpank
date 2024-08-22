<template>
    <section class="home-buy overflow-hidden d-md-flex">
        <div class="home-buy__img overflow-hidden h-100 d-flex align-center justify-center justify-md-start w-100 w-md-25 w-lg-50">
            <img :src="require('@/assets/buy/home-buy-img.jpg')" class="w-100 w-md-auto">
        </div>
        <v-container class="ml-md-8">
            <h1 class="Archangelsk-30-400-adaptive-62 color-white mt-10">Купить игру Cyberpunk 2077</h1>
            <p class="Roboto-20-700-adaptive-24 color-blue mt-6">В комплект входит:</p>
            <div class="d-flex mt-5">
                <icon-template name="disk" class="home-buy__icon" />
                <p class="Roboto-16-400-adaptive-18 ml-5 color-white">Футляр с игровыми дисками</p>
            </div>
            <div class="d-flex my-4">
                <icon-template name="solo-document" class="home-buy__icon" />
                <p class="Roboto-16-400-adaptive-18 ml-5 color-white">Футляр с кодом для загрузки игры и дисками (pc)</p>
            </div>
            <div class="d-flex">
                <icon-template name="images" class="home-buy__icon" />
                <p class="Roboto-16-400-adaptive-18 ml-5 color-white">Справочник с информацией об игровом мире</p>
            </div>
            <p class="Roboto-20-700-adaptive-24 color-blue mt-10">Выберите платформу:</p>
            <div class="d-flex justify-space-between justify-md-start mt-6">
                <icon-template name="pc" class="home-buy__platform" />
                <icon-template name="xbox" class="home-buy__platform ml-5 ml-md-10" />
            </div>
            <div class="d-flex justify-space-between justify-md-start mt-10">
                <icon-template name="stadia" class="home-buy__platform" />
                <icon-template name="ps" class="home-buy__platform ml-5 ml-md-10" />
            </div>
        </v-container>
    </section>
</template>

<script>
import IconTemplate from '@/components/elements/icon-template.vue'

export default {
    name: 'home-buy',
    components: {
        IconTemplate
    }
}
</script>

<style lang="scss" scoped>
.home-buy {
    background-color: $black;

    &__img {
        max-height: 200px;

        @include up($md) {
            min-height: 720px;
        }
    }

    &__icon {
        max-width: 24px;
        max-height: 24px;
    }

    &__platform {
        max-height: 50px;

        @include up($md) {
            max-width: fit-content;
        }
    }
}
</style>