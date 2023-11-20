import { imprimirCard, listaGeneros, opcionesGenero, filtrarGeneroYTitulo, mostrarResultado, mostrarMensajeSinResultado, imprimirmovie, cardData, } from "./funciones.js";
const url = 'https://moviestack.onrender.com/api/movies'
const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
const options = {
    headers: {
        'x-api-key': apiKey
    }
}
let movies

fetch(url, options)
    .then(res => res.json())
    .then(data => {
        movies = data.movies
        const moviesContenedor = document.getElementById("cardMoviescontenedor");
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

        let idFavoritos = []
        
        function agregarFavoritos(id) {
            // agregamos el id al arreglo de favoritos
        
            if (idFavoritos.includes(id)) {
                // Si el id ya esta dentro del arreglo de id, NO lo agregamos
                return;
            }
        
            idFavoritos.push(id);
        
            // aca convertimos el arreglo en string
            let arrayFavoritosString = JSON.stringify(idFavoritos);
        
            // Save the JSON string in localStorage with a specific key (e.g., "favoritos")
            localStorage.setItem('favoritos', arrayFavoritosString);
        
            let mostrar = localStorage.getItem('favoritos');
        }

        
    })
    .catch(err => console.log('Error al traer los datos de la API', err))

