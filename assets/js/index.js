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
        console.log(data)
        movies = data.movies
        console.log(movies)
        const movieImages = movies.map(movie => movie.image);
        const movieTitles = movies.map(movie => movie.title);

        
        const bannerImages = movieImages;
        const bannerTexts = movieTitles;
        
        console.log(bannerImages)
        console.log(bannerTexts)
        let currentIndex = 0;

        function changeBanner() {
            currentIndex = (currentIndex + 1) % bannerImages.length;
            document.getElementById("bannerImage").src = bannerImages[currentIndex];
            document.getElementById("bannerText").textContent = bannerTexts[currentIndex];
        }

        setInterval(changeBanner, 5000); // Cambia la imagen y el texto cada 5 segundos

    })
    .catch(err => console.log('Error al traer los datos de la API', err))




