<template>
<div>
    <h1>Listado de clientes</h1>

    <!-- client list -->
    <ClientList :clients="clients"/>

    <!-- paginationNumbers -->
    <PaginationNumbers 
    :current-page="currentPage" 
    :total-pages="totalPages"
    @page-changed="getPage"
    />

    <!-- loadingModal -->
    <LoadingModal v-if="isLoading"/>
    
</div>
</template>

<script lang="ts" setup>
import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue'
import useClients from '../composables/useClients';

const { isLoading, clients, currentPage, totalPages, getPage } = useClients()

</script>

<style scoped>
</style>