import { imprimirCard, listaGeneros, opcionesGenero, filtrarGeneroYTitulo, mostrarResultado, mostrarMensajeSinResultado, imprimirmovie, cardData, } from "./funciones.js";
const url = 'https://moviestack.onrender.com/api/movies'
const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const options = {
    headers: {
        'x-api-key': apiKey
    }
}
let movies
const moviesContenedor = document.getElementById("cardMoviescontenedor");

fetch(url, options)
    .then(res => res.json())
    .then(data => {
        movies = data.movies
        const busquedaGeneros = document.getElementById('generosSelect');
        const searchTitleAndGenre = document.getElementById('generoInput');
        const todosGeneros = movies.flatMap(movie => movie.genres);
        const generosSet = new Set(todosGeneros);


        let sinRepetirGeneros = Array.from(generosSet).sort(function (a, b) {
            if (b < a) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });

        opcionesGenero(sinRepetirGeneros, busquedaGeneros, listaGeneros);

        // Evento de cambio en el filtro por género
        busquedaGeneros.addEventListener('change', busqueda)

        // Evento de entrada en el campo de búsqueda por título
        searchTitleAndGenre.addEventListener("input", busqueda)

        function busqueda() {
            const genero = busquedaGeneros.value;
            const titulo = searchTitleAndGenre.value;
            const filtrado = filtrarGeneroYTitulo(movies, genero, titulo);
            mostrarResultado(filtrado, moviesContenedor, cardData);
        }

        mostrarMensajeSinResultado(moviesContenedor)
    })
    .catch(err => console.log('Error al traer los datos de la API', err))


let favoritos = []

moviesContenedor.addEventListener('click', (event) => {
    const dataset = event.target.dataset.id
    console.log(dataset)

    if (dataset) {
        if (!favoritos.includes(dataset)) {
            favoritos.push(dataset)
            localStorage.setItem('favoritos', JSON.stringify(favoritos))
        } else {
            favoritos = favoritos.splice(favoritos.indexOf(dataset), 1)
        }
    }
    console.log(favoritos)
})






