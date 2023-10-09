import { computed, watchEffect } from "vue";
import { getPokemons } from "../helpers/get-pokemons";
import { useQuery } from "@tanstack/vue-query";
import { initialPokemons } from "../data/initialData";

export const usePokemons = () => {

    const { isLoading, data:pokemons, isError, error } = useQuery(
        ['pokemons'],
        getPokemons,
        {
            retry: 0,
            initialData: initialPokemons,
        }
    );

    watchEffect(() => {

    });
   
    return {
        // Properties
        pokemons,
        isLoading,
        isError,
        error,

        // Computed
        count: computed(() => pokemons.value?.length ?? 0)
    }
}