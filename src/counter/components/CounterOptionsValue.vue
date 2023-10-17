<template>
<div>
    <h1>El valor es: {{ counterStore.count }}</h1>
    <h4>Ultimo cambio: {{ counterStore.lastChanged }}</h4>
</div>
</template>

<script lang="ts" setup>
import { userCounterOptionsStore } from '@/store/counter-options';

const counterStore = userCounterOptionsStore();
</script>

<style scoped>
</style>