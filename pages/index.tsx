import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useGetPokemonsQuery } from "../redux/api/pokemonApi";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: pokemon } = useGetPokemonsQuery();

  const renderedPokemon = pokemon?.map(({ id, name, image }) => {
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
