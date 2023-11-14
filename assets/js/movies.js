import {imprimirCard, listaGeneros,opcionesGenero, filtrarGeneroYTitulo , mostrarResultado ,  mostrarMensajeSinResultado, imprimirmovie, cardData} from "./funciones.js";
import { movies } from "./data.js";
const moviesContenedor = document.getElementById("cardMoviescontenedor");



imprimirCard( movies, moviesContenedor , cardData );

imprimirmovie(movies , moviesContenedor)


const busquedaGeneros = document.getElementById('generosSelect');
const searchTitleAndGenre = document.getElementById('generoInput');


const todosGeneros = movies.flatMap(movie => movie.genres);
const generosSet = new Set(todosGeneros);
let sinRepetirGeneros = Array.from(generosSet).sort();



opcionesGenero(sinRepetirGeneros, busquedaGeneros, listaGeneros);



// Evento de cambio en el filtro por género
busquedaGeneros.addEventListener('change', function () {
    const titulo = searchTitleAndGenre.value;
    const genero = busquedaGeneros.value;
    const filtrado = filtrarGeneroYTitulo(movies, genero, titulo);
    mostrarResultado(filtrado, moviesContenedor);
});

// Evento de entrada en el campo de búsqueda por título
searchTitleAndGenre.addEventListener("input", () => {
    const titulo = searchTitleAndGenre.value;
    const genero = busquedaGeneros.value;
    const filtrado = filtrarGeneroYTitulo(movies, genero, titulo);
    mostrarResultado(filtrado, moviesContenedor);
});

mostrarMensajeSinResultado(moviesContenedor)

