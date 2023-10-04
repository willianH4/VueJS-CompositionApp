<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './shared/components/NavBar.vue';
import { routerLinks } from './router/list-routes';

</script>

<template>
  <header>
    <NavBar title="Pokemon-App" :links="routerLinks"/>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
