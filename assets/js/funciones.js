
export function imprimirmovie(movie) {
    return `<article
        class="flex flex-col place-content-around bg-white text-black items-center border solid border-white justify-items-center h-[40rem] w-[70rem] border-solid-5 p-5 rounded-lg hover:bg-black hover:text-white ">

        <div class="flex flex-wrap justify-between gap-10 ">

            <img class="bg-black h-[20rem] w-[30rem] rounded-lg " src="${movie.image}" alt="${movie.title}">
            <div class="flex flex-col flex-wrap justify-around gap-2 ">
                <h2 class="font-extrabold ">${movie.title} </h2>
                <h3 class="font-semibold w-[25rem] ">${movie.tagline}</h3>
                <p class="font-medium w-[25rem] ">${movie.overview}</p>
            </div>

        </div>

        <div class="flex flex-wrap justify-between w-[80%] p-5 gap-5 rounded-md ">
            <table class="border-black text-black bg-white p-10 gap-5 rounded-md text-center w-[20rem] h-[10rem] border-solid-black ">
                <tbody>
                    <tr>
                        <th>Original Language</th>
                        <td>${movie.original_language}</td>
                    </tr>
                    <tr>
                        <th>Release Date</th>
                        <td>${movie.release_date}</td>
                    </tr>
                    <tr>
                        <th>Runtime</th>
                        <td>${movie.runtime}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${movie.status}</td>
                    </tr>
                </tbody>
            </table>

            <table class="border-black text-black bg-white p-10 gap-5 rounded-md text-center w-[20rem] h-[10rem] border-solid  ">
                <tbody>
                    <tr>
                        <th>Vote Average</th>
                        <td>${movie.vote_average}</td>
                    </tr>
                    <tr>
                        <th>Budget</th>
                        <td>${movie.budget}</td>
                    </tr>
                    <tr>
                        <th>Revenue</th>
                        <td>${movie.revenue}</td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div class="flex flex-wrap justify-between font-semibold w-[80%] " >
            <a class="rounded-md bg-black text-white hover:bg-white hover:text-black p-5 " href="/index.html">Home Moviestack</a>
            <a class="rounded-md bg-black text-white hover:bg-white hover:text-black p-5 "  href="/assets/pages/movies.html">Movies</a>
        </div>
    </article>`;
}

export function cardData(movie) {
    return `<article class="flex flex-col space-around bg-white text-black items-center border solid border-white justify-items-center h-[25rem] w-[20rem] border-solid-5 p-5 rounded-lg hover:bg-black hover:text-white">
        <img class="h-[10rem] w-[15rem] rounded-md" src="${movie.image}" alt="${movie.title}">
        <h2 class="font-extrabold">${movie.title}</h2>
        <div class="text-left">
            <h3 class="text-left line-clamp-1">${movie.tagline}</h3>
            <p class="line-clamp-3">${movie.overview}</p>
        </div>
        <a class="border bg-black text-white rounded-md hover:bg-white hover:text-black p-1" href="./detalle.html?id=${movie.id}">Movie Details</a>
    </article>`;
}

export function imprimirCard(moviesArray, contenedor) {
    let auxdiv = " ";
    for (const movie of moviesArray) {
        const article = cardData(movie);
        auxdiv += article;
    }
    contenedor.innerHTML += auxdiv;
}

export function listaGeneros(creadorGenero) {
    return `<option class="text-black" value="${creadorGenero}">${creadorGenero}</option>`;
}

export function opcionesGenero(array, contenedor, funct) {
    let aux = "";
    for (const elementoIterado of array) {
        aux += funct(elementoIterado);
    }
    contenedor.innerHTML += aux;
}

export function filtrarGeneroYTitulo(moviesArray, genero, titulo) {
    const filtro = moviesArray.filter(movie =>
        movie.genres.includes(genero) &&
        movie.title.toLowerCase().includes(titulo.toLowerCase())
    );
    return filtro;
}

export function mostrarResultado(resultados , contenedor) {
    contenedor.innerHTML = "";
    if (resultados.length > 0) {
        imprimirCard(resultados, contenedor);
    } else {
        mostrarMensajeSinResultado(contenedor);
    }
}

export function mostrarMensajeSinResultado(contenedor) {
    const mensajeSinResultados = document.createElement('p');
    mensajeSinResultados.textContent = 'No results found.';
    contenedor.appendChild(mensajeSinResultados);
}
