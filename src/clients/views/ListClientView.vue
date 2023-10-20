<template>
<div>
    <h1>Listado de clientes</h1>

    <!-- client list -->
    <ClientList/>

    <!-- paginationNumbers -->
    <PaginationNumbers/>

    <!-- loadingModal -->
</div>
</template>

<script lang="ts" setup>
import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';

</script>

<style scoped>
</style>