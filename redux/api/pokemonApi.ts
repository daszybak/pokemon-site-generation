import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon, PokemonDetails } from "../../types/pokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jherr-pokemon.s3.us-west-1.amazonaws.com/",
  }),
  endpoints: (builder) => ({
    // if there is no argument for the query use void
    getPokemons: builder.query<Pokemon[], void>({
      query: () => "index.json",
      //transformReponse: could not configure it. Probably something with typescript
    }),
    getPokemonById: builder.query<
      PokemonDetails,
      string | string[] | undefined
    >({
      query: (id) => `pokemon/${id}.json`,
      //transformReponse: could not configure it. Probably something with typescript
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;
