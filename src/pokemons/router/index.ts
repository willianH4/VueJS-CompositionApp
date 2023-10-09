import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons';

export const pokemonRoute: RouteRecordRaw = {
    path: `/${ ROUTE_NAME }`,
    redirect: `/${ ROUTE_NAME }/list`,
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children: [
        {
            path: `/${ ROUTE_NAME }/by/:id`,
            props: { title: 'Pokemon por ID', visible: false },
            name: 'pokemon-id',
            component: () => import('@/pokemons/views/PokemonById.vue'),
        },
        {
            path: `/${ ROUTE_NAME }/list`,
            props: { title: 'Listado', visible: true },
            name: 'pokemon-list',
            component: () => import('@/pokemons/views/PokemonList.vue'),
        },
        {
            path: `/${ ROUTE_NAME }/list-native`,
            props: { title: 'Listado nativo', visible: true },
            name: 'pokemon-list-native',
            component: () => import('@/pokemons/views/PokemonListStoreNative.vue'),
        },
        {
            path: `/${ ROUTE_NAME }/search`,
            props: { title: 'Busqueda', visible: true },
            name: 'pokemon-search',
            component: () => import('@/pokemons/views/PokemonSearch.vue'),
        }
    ]
}