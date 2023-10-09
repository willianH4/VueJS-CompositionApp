<template>
    <nav>
        <template v-if="!$props.isSecondary">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
          <span>{{ $props.title }}</span>
        </template>

        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink :to="{ name: 'counter' }">Counter</RouterLink> -->
        <RouterLink v-for="(item, index) in links" :key="index" :to="item.path">{{ item.title }}</RouterLink>
    </nav>
</template>

<script lang="ts" setup>
import type { RouterLink } from '@/router/list-routes';
import { computed } from 'vue';

    interface Props {
        title?: string;
        links: RouterLink[],
        isSecondary?: boolean,
    }

  const props = withDefaults(defineProps<Props>(), {
        title: 'CompoApp',
        isSecondary: false,
    });

    // forma 1
    // const links = toRef(props, 'links');

    // forma2
    const links = computed(() => props.links.filter(link => link.visible));
</script>

<style scoped>

nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
   margin-right: 5px; 
}



nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>