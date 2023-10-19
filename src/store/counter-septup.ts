import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterSeptupStore = defineStore('counterSetup', () => {

    const count = ref<number>(0);
    const lastChange = ref<Date>();

    const incrementBy = (value: number) => {
        count.value += value;
        lastChange.value = new Date();
    }

    // implement function reset store

    return {
        // State properties
        count,
        lastChange,

        // Getters
        squareCount: computed(  () => count.value * count.value ),

        // Actions
        incrementBy,
        increment: () => incrementBy(1),
    }

});