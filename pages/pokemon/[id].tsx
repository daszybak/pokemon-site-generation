import { pokemon as pokemonApi } from "../../api/pokemon";
import Image from "next/image";
import type { NextPage } from "next";
import { PokemonDetails } from "../../types/pokemon";

type PokemonProps = {
  pokemon: PokemonDetails;
};

export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { data: pokemon } = await pokemonApi.get(`pokemon/${params.id}.json`);

  return {
    props: {
      pokemon,
    },
  };
};

const Pokemon: NextPage<PokemonProps> = ({ pokemon }) => {
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
          height={250}
          width={250}
        />
      )}
    </div>
  );
};

export default Pokemon;
