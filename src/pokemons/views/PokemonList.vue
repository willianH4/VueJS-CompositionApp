<template>
<div>
    <h3>Pokemon List - {{ count }}</h3>
    <h3 v-if="isLoading">Cargando...</h3>
    <ul v-if="!isLoading">
        <li v-for="(item, index) in pokemons" :key="index">{{ item.name }}</li>
    </ul>
</div>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';
import { getPokemons } from '../helpers/get-pokemons';
import { computed } from 'vue';

    const { isLoading, data:pokemons } = useQuery(
        ['pokemons'],
        getPokemons
    );

    const count = computed(() => pokemons.value?.length ?? 0);
</script>

<style scoped>
</style>