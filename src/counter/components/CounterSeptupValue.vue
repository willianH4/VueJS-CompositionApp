<template>
<div>
    <h1>El valor es: {{ counterStore.count }}</h1>
    <h4>Ultimo cambio: {{ counterStore.lastChange }}</h4>
</div>
</template>

<script lang="ts" setup>
import { useCounterSeptupStore } from '@/store/counter-septup';

const counterStore = useCounterSeptupStore();
</script>

<style scoped>
</style>