<template>
<div>
    <h3>Pokemon List</h3>
    <ul>
        <li v-for="(item, index) in pokemons" :key="index">{{ item.name }}</li>
    </ul>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Pokemon } from '../interfaces';
import { getPokemons } from '../helpers/get-pokemons';

    const data = await getPokemons();
    const pokemons = ref<Pokemon[]>(data);

    // getPokemons().then( (data) => pokemons.value = data );
</script>

<style scoped>
</style>