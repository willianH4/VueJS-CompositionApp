<template>
    <NavBar :links="routeLinks" is-secondary/>
    <Suspense>
        <RouterView />
        <template #fallback>
            Loading...
        </template>
    </Suspense>
    
</template>

<script lang="ts" setup>
import type { RouterLink } from '@/router/list-routes';
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '../router';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {
    
    return {
        name: name?.toString() ?? '',
        path: path,
        title: (props as { title: string }).title,
    }
}) || [];

</script>

<style scoped>
</style>