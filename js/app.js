let allMovies = [];

async function loadMovies() {
  const response = await fetch('js/data/movies.json');
  allMovies = await response.json();
  populateGenreFilter(allMovies);
  renderMovies(allMovies);
}

function renderMovies(movies) {
  const grid = document.getElementById('movieGrid');
  grid.innerHTML = '';

  movies.forEach(movie => {
    const card = document.createElement('article');
    card.className = 'movie-card';

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-info">
        <h2>${movie.title}</h2>
        <div class="movie-meta">${movie.year} • ${movie.genre}</div>
        <p class="movie-description">${movie.description}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

function populateGenreFilter(movies) {
  const select = document.getElementById('genreFilter');
  const genres = Array.from(new Set(movies.map(m => m.genre)));

  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    select.appendChild(option);
  });

  select.addEventListener('change', () => {
    const value = select.value;
    if (value === 'all') {
      renderMovies(allMovies);
    } else {
      const filtered = allMovies.filter(m => m.genre === value);
      renderMovies(filtered);
    }
  });
}

loadMovies();


