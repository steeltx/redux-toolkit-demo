import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

// funcion que regresa funcion asincrona para obtener datos de http
export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        // llamar al inicio de carga
        dispatch(startLoadingPokemons());
        // peticion http
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        // establecer los datos obtenidos
        dispatch(setPokemons({pokemons: data.results, page: page + 1}));
    }
}