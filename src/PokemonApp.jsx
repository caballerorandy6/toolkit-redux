import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <h1>Pokemon APP</h1>
      <hr />

      <span>Loading: {isLoading ? "True" : "False"} </span>

      <ul>
        {pokemons?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading === true}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  );
};

export default PokemonApp;
