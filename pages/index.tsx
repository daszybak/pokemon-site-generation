import { pokemon as pokemonApi } from "../api/pokemon";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import type { Pokemon } from "../types/pokemon";

type HomeProps = {
  pokemon: Pokemon[];
};

export const getServerSideProps = async () => {
  const { data: pokemon } = await pokemonApi.get("index.json");

  return {
    props: {
      pokemon,
    },
  };
};

const Home: NextPage<HomeProps> = ({ pokemon }) => {
  const renderedPokemon = pokemon.map(({ id, name, image }) => {
    return (
      <Link key={id} href={`/pokemon/${id}`}>
        <article>
          <h1>{name}</h1>
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${image}`}
            alt={name}
            height={500}
            width={500}
          />
        </article>
      </Link>
    );
  });

  return (
    <div>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <main>{renderedPokemon}</main>
    </div>
  );
};

export default Home;
