<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss"></style>
