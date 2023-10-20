import clientsApi from '@/data/api/clientsApi';
import type { Client } from '@/data/intefaces/clients/Client';
import { useClientsStore } from '@/store/clients';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { computed, watch } from 'vue';

const getClients = async( page: number ):Promise<Client[]> => {

    const { data } = await clientsApi.get<Client[]>(`/clients?_page=${ page }`);

    return data

}

const useClients = () => {

    const store = useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        ['clients?page=', currentPage],
        () => getClients(currentPage.value),
    )

    watch( data, clients =>  {
        if( clients ) store.setClients(clients);
    });
    
    return {
        isLoading,
        clients,
        currentPage,
        totalPages,

        // Methods
        getPage(page: number) {
            store.setPage(page);
        },

        // Getters
        totalPagesNumbers: computed(
            () => [ ...new Array(totalPages.value) ].map((value, index) => index + 1)
        ),
        
    }

}

export default useClients;