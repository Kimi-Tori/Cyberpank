<template>
    <section class="home position-relative">
        <home-intro />
        <home-info class="home__info" />
    </section>
</template>

<script>
import HomeIntro from '@/components/home/home-intro.vue'
import HomeInfo from '@/components/home/home-info.vue'

export default {
    name: 'home-template',
    components: {
        HomeIntro,
        HomeInfo
    }
}
</script>

<style lang="scss">
.home {
    &__info {
        margin-top: 70px;
    }
}
</style>