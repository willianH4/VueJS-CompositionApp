<template>
<div>
    <h3 v-if="isUpdating">Guardando...</h3>
    <h3 v-if="isUpdatingSuccessfull">Guardado</h3>

    <LoadingModal v-if="isLoading"/>

    <div v-if="client">
        <h1>{{ client.name }}</h1>
        <form @submit.prevent="updateClient(client)">
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
                    <button :disabled="isUpdating" class="btn btn-primary" type="submit">Guardar</button>
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
import { useRoute, useRouter } from 'vue-router';
import { useQueryClient } from '@tanstack/vue-query';
import { watch } from 'vue';

const route = useRoute();
const queryClient = useQueryClient();
const router = useRouter();

const { id } = route.params;
const { client, isLoading, isError, clientMutation, updateClient, isUpdating, isErrorUpdating, isUpdatingSuccessfull } = useClient( Number(id) );

watch( clientMutation.isSuccess, () =>  {
    setTimeout(() => {
        clientMutation.reset();
    }, 2000);
});

watch( isError, () => {
    if ( isError.value ) {
        router.replace('/clients')
    }
})

</script>

<style scoped>
</style>