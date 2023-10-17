import type { CounterOptionsState } from "@/data/intefaces/CounterOptionsState";
import { defineStore } from "pinia";

export const userCounterOptionsStore = defineStore('counterOptions', {
    state: () => ({
        count: 0,
        lastChanged: undefined,
    } as CounterOptionsState ),

    getters: {
        squereCount: (state) => state.count * state.count,
    },

    actions: {
        incrementBy(value: number) {
            this.count += value;
            this.lastChanged = new Date()
        },

        increment() {
            this.incrementBy(1);
        }
    }
});