async function search() {
  
  const inp = document.getElementById("search__bar").value;
  const movies = await fetch(`http://www.omdbapi.com/?apikey=7f31329f&s=${inp}
    `);
  const moviesData = await movies.json();
  const moviesDataArray = moviesData.Search;
  const moviesList = document.querySelector(".movie-list");
  moviesList.innerHTML = moviesDataArray
    .map((movie) =>  movieHTML(movie))
    .join("");
  const res = document.querySelector(".results__text")
  res.innerHTML = `<h2>Search results for <span class="blue">${inp}</span>:</h2>
  `
  movieWrapper.classList.remove('movie__loading')

}

function searchWait(){
  const movieWrapper  = document.querySelector(".movie-list")
  movieWrapper.classList += ' movie__loading'
  console.log(document.body.classList);
  new Promise((resolve) => {
    setTimeout(() => {
      search()
    },1000);
  })

}

function movieHTML(movie) {
  return `
    <div class="movie">
    
    <img class="movie__poster" src="${movie.Poster}" alt="">
    <div class="movie__bg"> </div>
    <div class="movie__desc">
                  <div class="movie__title">
                    <h1>${movie.Title}</h1>
                  </div>
                  <div class="movie__year">
                    <p>${movie.Year}</p>
                  </div>
                </div>
    </div>
    `;

}
