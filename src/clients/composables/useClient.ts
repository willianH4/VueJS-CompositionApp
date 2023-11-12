import clientsApi from "@/data/api/clientsApi";
import type { Client } from "@/data/intefaces/clients/Client"
import { useMutation, useQuery } from "@tanstack/vue-query";
import { computed, ref, watch } from "vue";

const getClient = async(id: number):Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${id}`);
    return data;
}

const updateClient = async( client: Client ):Promise<Client> => {

    const { data } = await clientsApi.patch<Client>(`/clients/${ client.id }`, client);

    return data;
}

const useClient = (id: number) => {

    const client = ref<Client>();
    const clientMutation = useMutation( updateClient );

    const { isLoading, data, isError } = useQuery(
        ['client', id],
        () => getClient(id),
        {
            retry: false
        }
    );

    watch( data, () => {
        if( data.value ) client.value = {...data.value}
    }, {immediate: true});

    return {
        isLoading,
        clientMutation,
        client,
        isError,
        updateClient:                   clientMutation.mutate,
        isUpdating: computed(() =>      clientMutation.isLoading.value),
        isUpdatingSuccessfull: computed(() => clientMutation.isSuccess.value),
        isErrorUpdating: computed(() => clientMutation.isError.value)
    }
}

export default useClient;