
function cardData(movies) {
    return `<article class=" flex flex-col  bg-white text-black  items-center border solid  border-white  justify-items-center  h-[22rem] w-[18rem] border-solid-5 p-5 rounded-lg hover:bg-black hover:text-white " >
    <img class=" h-[10rem] w-[15rem] "  src="${movies.image}" alt="${movies.title}" >
    <h2 class=" font-extrabold " >${movies.title} </h2>
    <div class=" text-left >
    <h3 class=" text-left "  >${movies.tagline}</h3>
    <p class="line-clamp-5" >${movies.overview}</p>
    </div>
    </article>`;
}


function imprimirCard(movies, contenedor) {
    let auxdiv = " ";
    for (const movie of movies) {
        const article = cardData(movie);
        auxdiv += article;
    }
    contenedor.innerHTML += auxdiv;
}

imprimirCard( movies, contenedor )