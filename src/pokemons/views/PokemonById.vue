<template>
    <h3 v-if="isLoading">Cargando...</h3>
    <div v-else-if="isError">
        {{ errorMessage }}
    </div>
    <div v-else-if="pokemon">
        <h3>{{ pokemon.name }}</h3>
        <div class="character-container">
            <img :src="pokemon.frontSprite" :alt="pokemon.name">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';

const route = useRoute();
const { id } = route.params;

const { isLoading, isError, pokemon, errorMessage } = usePokemon(id.toString());
</script>

<style scoped></style>