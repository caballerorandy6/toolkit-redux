import { pokemonApi } from "../../../api/pokemonApi";
import { startLoadingPokemons, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //Realizar peticion http con fetch
    // const URL = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${
    //   page * 10
    // }`;
    // const response = await fetch(URL);
    // const data = await response.json();

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    console.log(data);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
