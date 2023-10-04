<template>
<div class="card-list">
    <PokemonCard v-for="pokemon in props.pokemons" :key="pokemon.id" :pokemon="pokemon"/>
</div>
</template>

<script lang="ts" setup>
import type { Pokemon } from '../interfaces';
import PokemonCard from './PokemonCard.vue';


interface Props {
    pokemons: Pokemon[]
}

const props = defineProps<Props>();

</script>

<style scoped>

.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>