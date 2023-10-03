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
import { usePokemons } from '../composables/usePokemons';

    // const data = await getPokemons();
    // const pokemons = ref<Pokemon[]>(data);

    // getPokemons().then( (data) => pokemons.value = data );

    const { count, pokemons, isLoading } = usePokemons();
</script>

<style scoped>
</style>