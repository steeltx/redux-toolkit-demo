import axios from 'axios';

//todas las peticiones inician con el base url y solo se debe de poner el complemento de la url
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});