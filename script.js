const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');


// function to fetch movie details from OMDb API
const getMovieDetails = async (movie) => {
    const myAPIkey = '6e4a1d22';
    const url = `https://www.omdbapi.com/?apikey=${myAPIkey}&t=${movie}`;


    try {
        const response = await fetch(url); // Await the fetch call
        if (!response.ok) {
            throw new Error('Movie not found'); // Handle non-200 responses
        }
        const data = await response.json(); // Await the JSON parsing
        console.log(data); // Log the movie details


        showMovieDetails(data); // calls the function to display movie details
    } catch (error) {
        console.error('Error fetching movie details:', error); // Handle errors
        showErrorMessage('Movie not found'); // Display error message
    }
};


// Updated function to display movie details on the page
const showMovieDetails = (data) => {
    movieContainer.innerHTML = ''; // clears previous movie details
    movieContainer.classList.remove('noBackground'); // removes background class
   
    // using destructuring to extract data from the object
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster, Director, Year } = data;
   
    // Convert the movie container to the new format
    movieContainer.className = 'movie-details-page';
   
    // Create backdrop image element - use Poster as backdrop
    const backdropImg = document.createElement('img');
    backdropImg.src = Poster;
    backdropImg.className = 'movie-backdrop';
   
    // Create movie content container
    const contentDiv = document.createElement('div');
    contentDiv.className = 'movie-content';
   
    // Format the director names
    const directors = Director.split(',').map(name => name.trim());
   
    // Format the actors names
    const cast = Actors.split(',').map(name => name.trim());
   
    // Format genres
    const genres = Genre.split(',').map(genre => genre.trim());
   
    // Calculate runtime in minutes
    const runtimeMinutes = Runtime.replace(' min', '');
   
    // Get year from Released date
    const releaseYear = Year || new Date(Released).getFullYear();
   
    contentDiv.innerHTML = `
        <h1 class="movie-title">${Title}</h1>
       
        <div class="movie-meta">
            <span>${runtimeMinutes} min</span>
            <span>${releaseYear}</span>
            <span class="imdb-rating">
                <i class="fab fa-imdb" style="color: black; margin-right: 5px;"></i> ${imdbRating}
            </span>
        </div>
       
        <div class="info-section">
            <h3>Genres</h3>
            <div class="genres-list">
                ${genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
            </div>
        </div>
       
        <div class="info-section">
            <h3>Directors</h3>
            <div class="directors-list">
                ${directors.map(dir => `<span>${dir}</span>`).join('')}
            </div>
        </div>
       
        <div class="info-section">
            <h3>Cast</h3>
            <div class="cast-list">
                ${cast.map(actor => `<span>${actor}</span>`).join('')}
            </div>
        </div>
       
        <div class="info-section">
            <h3>Summary</h3>
            <p class="summary-text">${Plot}</p>
        </div>
       
        <div class="action-buttons">
            <button class="action-btn"><i class="fas fa-play"></i> Watch Trailer</button>
            <button class="action-btn"><i class="fas fa-plus"></i> Add to Library</button>
        </div>
    `;
   
    // Append elements to movie container
    movieContainer.appendChild(backdropImg);
    movieContainer.appendChild(contentDiv);
};


// function to display error message
const showErrorMessage = (message) => {
    movieContainer.className = 'movie-container noBackground';
    movieContainer.innerHTML = `<h2>${message}</h2>`;
}


// function that handles the search form submissions
const handleFormSubmission = (e) => {
    e.preventDefault();
    const movieName = inputBox.value.trim(); // get the value from the input box
    if (movieName !== ''){
        showErrorMessage("Fetching Movie Information..."); // display this  message while fetching the movie
        getMovieDetails(movieName);
    }
    else{
        showErrorMessage('Please enter a movie name');
    }


}
// adding event listeners to the search form
searchForm.addEventListener('submit', handleFormSubmission);








