<template>
<div>
    <h1>Listado de clientes</h1>

    <!-- client list -->
    <ClientList/>

    <!-- paginationNumbers -->
    <PaginationNumbers/>

    <!-- loadingModal -->
    <LoadingModal v-if="isLoading"/>
    
</div>
</template>

<script lang="ts" setup>
import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue'
import useClients from '../composables/useClients';

const { isLoading } = useClients()

</script>

<style scoped>
</style>