import { imprimirCard, imprimirmovie , cardData, mostrarMensajeSinResultado } from "./funciones.js";



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
    const search = location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const movieSelection = movies.find(movie => movie.id == id);
    
    const contenedorDetalles = document.getElementById('contenedorDetalles');
    
    imprimirCard( [movieSelection] , contenedorDetalles , imprimirmovie )

    })
    .catch(err => console.log('Error al traer los datos de la API', err))