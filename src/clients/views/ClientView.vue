<template>
<div>
    <h3 v-if="clientMutation.isLoading.value">Guardando...</h3>
    <h3 v-if="clientMutation.isSuccess.value">Guardado</h3>

    <LoadingModal v-if="isLoading"/>

    <div v-if="client">
        <h1>{{ client.name }}</h1>
        <form @submit.prevent="clientMutation.mutate(client)">
            <div class="row g-3">
                <div class="col-auto mb-3">
                <input type="text" class="form-control" 
                placeholder="Nombre del cliente" v-model="client.name"> 
                </div>

                <div class="col-auto mb-3">
                    <input type="text" class="form-control" 
                    placeholder="Direccion" v-model="client.address">
                </div>

                <div class="col-auto mb-1">
                    <button :disabled="clientMutation.isLoading.value" class="btn btn-primary" type="submit">Guardar</button>
                </div>
            </div>
        </form>  
    </div>

    <code>
        {{ client }}
    </code>

</div>
</template>

<script lang="ts" setup>
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClient from '../composables/useClient';
import { useRoute } from 'vue-router';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import type { Client } from '@/data/intefaces/clients/Client';
import clientsApi from '@/data/api/clientsApi';
import { watch } from 'vue';

const route = useRoute();
const queryClient = useQueryClient();

const { id } = route.params;
const { client, isLoading } = useClient( Number(id) );

const updateClient = async( client: Client ):Promise<Client> => {
    // const { id, ...rest } = client;
    // console.log({ client });

    await new Promise( resolve => {
        setTimeout(() => {
            resolve(true);
        }, 3000);
    })

    const { data } = await clientsApi.patch<Client>(`/clients/${ client.id }`, client);
    const queries = queryClient.getQueryCache().findAll(['clients?page='], { exact: false });
    queries.forEach( query => query.fetch() );

    return data;
}

const clientMutation = useMutation( updateClient );

watch( clientMutation.isSuccess, () =>  {
    setTimeout(() => {
        clientMutation.reset();
    }, 2000);
})

</script>

<style scoped>
</style>