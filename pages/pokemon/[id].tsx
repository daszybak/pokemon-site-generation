import { skipToken } from "@reduxjs/toolkit/dist/query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGetPokemonByIdQuery } from "../../redux/api/pokemonApi";
import { PokemonDetails } from "../../types/pokemon";

export default function Pokemon() {
  const { query, isReady: skip } = useRouter();
  //skipToken fixes the problem instead of passing a object with skip literal
  const { data: pokemon } = useGetPokemonByIdQuery(query.id ?? skipToken);

  return (
    <div>
      <h1>Name: {pokemon?.name ?? "Unknown"}</h1>
      <h2>Type: {pokemon?.type.map((type) => `${type} `)}</h2>
      <h3>
        Stats:{" "}
        {pokemon?.stats.map(({ name, value }) => (
          <p key={name}>
            {name}: {value}
          </p>
        ))}
      </h3>
      {pokemon && (
        <Image
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon?.image}`}
          alt={pokemon.name}
          height={500}
          width={500}
        />
      )}
    </div>
  );
}
