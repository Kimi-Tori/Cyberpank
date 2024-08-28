<template>
    <div class="home position-relative">
        <home-intro />
        <home-info class="home__info" />
        <home-form class="home__form"/>
        <home-set />
        <home-buy />
    </div>
</template>

<script>
import HomeIntro from '@/components/home/home-intro.vue'
import HomeInfo from '@/components/home/home-info.vue'
import HomeForm from '@/components/home/home-form.vue'
import HomeSet from '@/components/home/home-set.vue'
import HomeBuy from '@/components/home/home-buy.vue'

export default {
    name: 'home-template',
    components: {
        HomeIntro,
        HomeInfo,
        HomeForm,
        HomeSet,
        HomeBuy
    }
}
</script>

<style lang="scss">
.home {
    &__info {
        margin-top: 70px;
    }

    &__form {
        margin-top: 70px;
    }
}
</style>