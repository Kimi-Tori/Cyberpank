<template>
    <section class="form overflow-hidden outline-none">
        <img src="@/assets/form/form-img.png" class="form__img">
        <div class="form__container">   
            <v-container class="d-md-flex flex-md-row-reverse align-lg-center">
                <img src="@/assets/form/form-img-2.png" class="d-md-none d-lg-block w-100 h-100 w-md-50 ml-lg-10">
                <img src="@/assets/form/form-img-3.png" class="d-none d-md-block d-lg-none ml-md-10">
                <div class="w-md-50">
                    <icon-template name="action" class="form__container-icon" />
                    <h2 class="Archangelsk-30-400-adaptive-62 color-white mt-6">Играй и выигрывай!</h2>
                    <p class="Roboto-16-400-adaptive-18 color-white mt-6">Играй в <span class="color-blue">Cyberpunk 2077</span> и получи возможность выиграть консоль <span class="color-blue">Xbox Series X</span> или <span class="color-blue">Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
                    <form-template class="form__container-form"/>
                </div>
            </v-container>
        </div>
    </section>
</template>

<script>
import IconTemplate from '@/components/elements/icon-template.vue'
import FormTemplate from '@/components/elements/form-template.vue'

export default {
    name: 'home-form',
    components: {
        IconTemplate,
        FormTemplate
    }
}
</script>

<style lang="scss" scoped>
.form {
    &__img {
        max-height: 70px;
        height: 100%;
        margin-bottom: -10px;
    }

    &__container {
        background-color: $black;
        padding: 70px 0;

        &-icon {
            fill: $yellow;
            max-width: 62px;
            max-height: 62px;
        }

        &-form {
            margin-top: 70px;

            @include up($md) {
                margin-top: 98px;
            }
        }
    }

    
}
</style>