<template>
    <header class="the-header">
      <img :src="require('@/assets/header/logo.png')" alt="logo" class="the-header__logo">
      <icon-template name="facebook" />
    </header>
  </template>
  
  <script>
  import IconTemplate from '@/views/icon-template.vue';

  export default {
    name: "the-header",
    components: {
      IconTemplate
    }
  };
  </script>
  
  <style scoped lang="scss">
  .the-header {
  }
  </style>