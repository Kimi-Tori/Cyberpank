<template>
  <svg class="icon-template">
    <use :xlink:href="`${spriteUrl}#${name}`"></use>
  </svg>
</template>

<script>
import sprite from '@/assets/sprite.svg'; // Импорт спрайта

export default {
  name: 'icon-template',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    spriteUrl() {
      return sprite; // Использование импортированного спрайта
    }
  }
}
</script>

<style lang="scss">
.icon-template {
}
</style>