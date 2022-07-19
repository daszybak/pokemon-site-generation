export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export interface PokemonDetails {
  name: string;
  type: string[];
  stats: { name: string; value: string }[];
  image: string;
}
