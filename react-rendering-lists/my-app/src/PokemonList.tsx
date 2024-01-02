type Pokemon = {
  number: string;
  name: string;
};
type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const pokeList = pokedex.map((p) => <li key={p.number}>{p.name}</li>);
  return <ul>{pokeList}</ul>;
}
