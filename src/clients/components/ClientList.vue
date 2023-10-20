<template>
<div>
    <ul>
        <li v-for="client in props.clients" :key="client.id">
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
import type { Client } from '@/data/intefaces/clients/Client';


interface Props {
    clients: Client[]
}

const props = defineProps<Props>();

</script>

<style scoped>
</style>