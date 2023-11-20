import { imprimirCard, cardData, mostrarMensajeSinResultado , } from "./funciones.js"

const url = 'https://moviestack.onrender.com/api/movies'
const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const options = {
    headers: {
        'x-api-key': apiKey
    }
}
let movies;
let storedArrayString = localStorage.getItem('favoritos');
let idFavoritos2 = JSON.parse(storedArrayString);

fetch(url, options)
    .then(res => res.json())
    .then(data => {
        movies = data.movies;

        const containerFavs = document.getElementById("contenedorFavs");

        const search = location.search;
        const params = new URLSearchParams(search);

        const id = params.get('id'); // Corregir el acceso a los parámetros de la URL

        const pelisPorId = movies.filter(movie => idFavoritos2.includes(movie.id));
        console.log(pelisPorId);

        imprimirCards(pelisPorId, containerFavs, cardData);
    })
    .catch(err => console.log('Error al traer los datos de la API', err));


