const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');

// function to fetch movie details from OMDb API
const getMovieDetails = async (movie) => {
    const myAPIkey = '6e4a1d22';
    const url = `http://www.omdbapi.com/?apikey=${myAPIkey}&t=${movie}`;

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

    // funtion to display movie details on the page 
const showMovieDetails = (data) => {
    movieContainer.innerHTML = ''; // clears previous movie details
    movieContainer.classList.remove('noBackground'); // adds class to remove background
        // using destructuring to extract data from the object
        const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data;
        
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-details');
        movieElement.innerHTML = `<h2>${Title}</h2>
                                  <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;

        const movieGenreElement = document.createElement('div');
        movieGenreElement.classList.add('movie-genre');
        
        Genre.split(",").forEach(element => {
            const p = document.createElement('p');
            p.innerText = element;
            movieGenreElement.appendChild(p);

        });

        movieElement.appendChild(movieGenreElement);

        movieElement.innerHTML += `<p><strong>Released Date: </strong>${Released}</p>
                                  <p><strong>Runtime: </strong>${Runtime}</p>
                                  <p><strong>Actors: </strong>${Actors}</p>
                                  <p><strong>Plot: </strong>${Plot}</p>`;

        // creating a div for movie poster
        const moviePosterElement = document.createElement('div');
        moviePosterElement.classList.add('movie-poster');
        moviePosterElement.innerHTML = `<img src="${Poster}"/>`;
        
        movieContainer.appendChild(moviePosterElement);
        movieContainer.appendChild(movieElement);

};


// function to display error message
const showErrorMessage = (message) => {
    movieContainer.innerHTML = `<h2>${message}</h2>`; // Display message if no input
    movieContainer.classList.add('noBackground'); // adds a class to show background  
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

