<template>
<div>
    <h3>Guardando...</h3>
    <h3>Guardado</h3>

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
                    <button class="btn btn-primary" type="submit">Guardar</button>
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
import { useMutation } from '@tanstack/vue-query';
import type { Client } from '@/data/intefaces/clients/Client';
import clientsApi from '@/data/api/clientsApi';

const route = useRoute();

const { id } = route.params;
const { client, isLoading } = useClient( Number(id) );

const updateClient = async( client: Client ):Promise<Client> => {
    // const { id, ...rest } = client;
    const { data } = await clientsApi.patch<Client>(`/clients/${ client.id }`, client);

    return data;
}

const clientMutation = useMutation( updateClient );

</script>

<style scoped>
</style>