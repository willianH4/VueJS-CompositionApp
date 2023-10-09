<template>
    <NavBar :links="routeLinks" is-secondary/>
    <RouterView />
    <!-- <Suspense>
        <RouterView />
        <template #fallback>
            Loading...
        </template>
    </Suspense> -->
    
</template>

<script lang="ts" setup>
import type { RouterLink } from '@/router/list-routes';
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '../router';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {
    
    const { title, visible } = props as { title: string, visible: boolean };

    return {
        name: name?.toString() ?? '',
        path: path,
        title: title,
        visible: visible,
    }
}) || [];

</script>

<style scoped>
</style>