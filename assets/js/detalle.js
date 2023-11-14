const search = location.search;
const params = new URLSearchParams(search);
const id = params.get('id');
const moviSelection = movies.find(movies => movies.id == id);

const contenedorDetalles = document.getElementById('contenedorDetalles');

contenedorDetalles.innerHTML = imprimirmovie(moviSelection);


// Utiliza un contenedor diferente para la segunda llamada

