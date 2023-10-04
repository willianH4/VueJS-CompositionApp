<template>
<h3 v-if="isLoading">Cargando...</h3>
<div v-else-if="isError">
    {{ error }}
</div>
<div v-else>
    <h3>Pokemon List - {{ count }}</h3>
    <PokemonCardList :pokemons="pokemons ?? []"/>
</div>
</template>

<script lang="ts" setup>
import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons';

const { count, pokemons, isLoading, isError, error } = usePokemons();

</script>

<style scoped>
</style>