import { movies } from "./data.js";
import { imprimirCard, imprimirmovie } from "./funciones.js";

const search = location.search;
const params = new URLSearchParams(search);
const id = params.get('id');
const movieSelection = movies.find(movie => movie.id == id);

const contenedorDetalles = document.getElementById('contenedorDetalles');

imprimirCard( [movieSelection] , contenedorDetalles , imprimirmovie )
