<template>
<h3 v-if="store.pokemons.isLoading">Cargando...</h3>
<div v-else-if="store.pokemons.hasError">
    {{ store.pokemons.errorMessage }}
</div>
<div v-else>
    <h3>Pokemon List Store Native - {{ store.pokemons.count }}</h3>
    <PokemonCardList :pokemons="store.pokemons.list"/>
</div>
</template>

<script lang="ts" setup>
import store from '@/store/store';
import { useQuery } from '@tanstack/vue-query';
import { getPokemons } from '../helpers/get-pokemons';
import PokemonCardList from '../components/PokemonCardList.vue';

useQuery(
    ['pokemons'],
    getPokemons,
    {
        select(data) {
            store.loadedPokemons(data);
        },
    }
)

</script>

<style scoped>
</style>