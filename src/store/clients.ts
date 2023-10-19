import type { Client } from '@/data/intefaces/clients/Client';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useClientsStore = defineStore('clients', () => {

    const currentPage = ref<number>(1);
    const totalPages = ref<number>(5);
    const clients = ref<Client[]>([]);

    return {
        // State properties
        currentPage,
        totalPages,
        clients,

        // Getters
        // squareCount: computed(  () => count.value * count.value ),

        //Actions
        setClients( newClients: Client[] ) {
            clients.value = newClients;
        },

        setPage( page: number ) {
           if ( currentPage.value === page ) return;

           currentPage.value = page;
        }
    }

});