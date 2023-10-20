import clientsApi from '@/data/api/clientsApi';
import type { Client } from '@/data/intefaces/clients/Client';
import { useClientsStore } from '@/store/clients';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const getClients = async():Promise<Client[]> => {

    const { data } = await clientsApi.get<Client[]>('/clients?_page=1');

    return data

}

const useClients = () => {

    const store = useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        ['clients?page=', 1],
        () => getClients(),
    )

    watch( data, clients =>  {
        if( clients ) store.setClients(clients);
    });
    
    return {
        isLoading,
        clients,
        currentPage,
        totalPages
    }

}

export default useClients;