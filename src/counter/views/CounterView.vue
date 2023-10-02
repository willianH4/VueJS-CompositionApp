<template>
    <h1>Counter View: {{ counter }}</h1>
    <button @click="increase">+1</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// composition API without setup
// export default defineComponent({
//     setup() {
//         const counter = ref(5);

//         const increase = () => {
//             counter.value++;
//         }

//         return {
//             counter,
//             increase
//         }
//     }
// });

// composition API with septup
const counter = ref(5);
const increase = () => {
    counter.value++
}

</script>

<style scoped>
</style>