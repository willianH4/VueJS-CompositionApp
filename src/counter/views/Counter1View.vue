<template>
<div>
    <h1>Pinia Options</h1>
    <h4>Counter-value: {{ count }}</h4>
    <h4>Square: {{ squereCount }}</h4>
    <hr>
    <br>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterOptions.$reset()">Reset</button>
    <hr>
    <br>
    <CounterOptionsValue/>
    
</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { userCounterOptionsStore } from '@/store/counter-options';
import CounterOptionsValue from '../components/CounterOptionsValue.vue'; 

const counterOptions = userCounterOptionsStore();

//form two
const { count, squereCount } = storeToRefs( counterOptions );
const { increment, incrementBy } = counterOptions;

</script>

<style scoped>

button {
    margin-right: 5px;
}

</style>