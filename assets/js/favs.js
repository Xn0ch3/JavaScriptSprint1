import { imprimirCard, cardData, } from "./funciones.js"

const url = 'https://moviestack.onrender.com/api/movies'
const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const options = {
    headers: {
        'x-api-key': apiKey
    }
}

const contenedorFavs = document.getElementById('contenedorFavs')

let allMovies

let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []

fetch(url, options)
    .then(response => response.json())
    .then(data => {
        const movies = data.movies.filter(movie => favoritos.includes(movie.id));
        console.log(movies)
        imprimirCard(movies, contenedorFavs, cardData)
        allMovies = data.movies
    })
    .catch(err => console.log('Error al traer los datos de la API', err));


contenedorFavs.addEventListener("click", (event) => {
    const dataset = event.target.dataset.id;
    console.log(dataset)
    if (dataset) {
        if (!favoritos.includes(dataset)) {
            favoritos.push(dataset);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));

        } else {
            favoritos.splice(favoritos.indexOf(dataset), 1);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    const movies = data.movies.filter(movie => favoritos.includes(movie.id));
                    console.log(movies)
                    imprimirCard(movies, contenedorFavs, cardData)
                })
                .catch(err => console.log('Error al traer los datos de la API', err));
        }
    }
})