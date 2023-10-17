<template>
    <div>
        <h1>Pinia Septup</h1>
        <h4>Counter-value: {{ count }}</h4>
        <h4>Square: {{ squareCount }}</h4>
        <hr>
        <br>
        <button @click="increment()">+1</button>
        <button @click="incrementBy(2)">+2</button>
        <button @click="incrementBy(5)">+5</button>
        <button @click="counterOptions.$reset()">Reset</button>
        <hr>
        <br>
        <CounterSeptupValue/>
        
    </div>
    </template>
    
    <script lang="ts" setup>
    import { storeToRefs } from 'pinia'
    import { useCounterSeptupStore } from '@/store/counter-septup';
    import CounterSeptupValue from '../components/CounterSeptupValue.vue'; 
    
    const counterOptions = useCounterSeptupStore();
    
    //form two
    const { count, squareCount } = storeToRefs( counterOptions );
    const { increment, incrementBy } = counterOptions;
    
    </script>
    
    <style scoped>
    
    button {
        margin-right: 5px;
    }
    
    </style>