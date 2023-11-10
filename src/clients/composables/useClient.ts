import clientsApi from "@/data/api/clientsApi";
import type { Client } from "@/data/intefaces/clients/Client"
import { useQuery } from "@tanstack/vue-query";
import { ref, watch } from "vue";

const getClient = async(id: number):Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${id}`);
    return data;
}

const useClient = (id: number) => {

    const client = ref<Client>();

    const { isLoading, data } = useQuery(
        ['client', id],
        () => getClient(id)
    );

    watch( data, () => {
        if( data.value ) client.value = {...data.value}
    }, {immediate: true});

    return {
        isLoading,
        client
    }
}

export default useClient;