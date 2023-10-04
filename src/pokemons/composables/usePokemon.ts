import { useQuery } from "@tanstack/vue-query"
import { getPokemonsById } from "../helpers/get-pokemon-by-id"

export const usePokemon = (id: string) => {

    const { isLoading, isError, data: pokemon, error } = useQuery(
        ['pokemon', id],
        () => getPokemonsById(id)
    )

    return {
        isLoading, 
        isError,
        pokemon, 
        errorMessage: error
    }
}