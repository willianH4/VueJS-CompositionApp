<template>
<div>
    <ul>
        <li v-for="client in clients" :key="client.id">
            <RouterLink :to="{
                name: 'client-id',
                params: { id: client.id }
            }">
                {{ client.name }}
            </RouterLink>
        </li>
    </ul>
</div>
</template>

<script lang="ts" setup>
import useClients from '@/clients/composables/useClients'

const { clients } = useClients();

</script>

<style scoped>
</style>