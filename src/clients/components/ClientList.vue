<template>
<div>
    <ul>
        <li>
            <RouterLink :to="{
                name: 'client-id',
                params: { id: 1 }
            }">
                Client Name
            </RouterLink>
        </li>
    </ul>
</div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>