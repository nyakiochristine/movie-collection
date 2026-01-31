async function loadMovies() {
  const response = await fetch('js/data/movies.json');
  const movies = await response.json();
  console.log(movies);
}

loadMovies();
