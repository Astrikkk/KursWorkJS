const filmList = document.getElementById('film-list');

const createTab = document.querySelector('#create-video-tab');






//const addVideo = document.querySelector('#add-video');
const clearFilms = document.getElementById('clear-films');


const sortByName = document.getElementById('sort-name');
const sortByDate = document.getElementById('sort-date');
const sortByRating = document.getElementById('sort-rating');

const genreAction = document.getElementById('Action');
const genreComedy = document.getElementById('Comedy');
const genreDrama = document.getElementById('Drama');
const genreHorror = document.getElementById('Horror');
const genreAdventure = document.getElementById('Adventure');
const genreScienceFiction = document.getElementById('Science Fiction');
const genreThriller = document.getElementById('Thriller');
const genreRomance = document.getElementById('Romance');
const genreCrime = document.getElementById('Crime');
const genreMystery = document.getElementById('Mystery');
const genreFantasy = document.getElementById('Fantasy');
const genreHistorical = document.getElementById('Historical');
const genreWar = document.getElementById('War');
const genreDocumentary = document.getElementById('Documentary');
const genreAnimation = document.getElementById('Animation');

const itemsKey = "list-films";
const currentFilm = "current-film";
let films = [];
load();
loadProductsToTable(films);

// Створюємо об'єкт, що містить ідентифікатори кожного жанру і відповідні функції сортування

const genres = {
    'Action': () => SortByGenre('Action'),
    'Comedy': () => SortByGenre('Comedy'),
    'Drama': () => SortByGenre('Drama'),
    'Horror': () => SortByGenre('Horror'),
    'Adventure': () => SortByGenre('Adventure'),
    'Science Fiction': () => SortByGenre('Science Fiction'),
    'Thriller': () => SortByGenre('Thriller'),
    'Romance': () => SortByGenre('Romance'),
    'Crime': () => SortByGenre('Crime'),
    'Mystery': () => SortByGenre('Mystery'),
    'Fantasy': () => SortByGenre('Fantasy'),
    'Historical': () => SortByGenre('Historical'),
    'War': () => SortByGenre('War'),
    'Documentary': () => SortByGenre('Documentary'),
    'Animation': () => SortByGenre('Animation')
};

Object.keys(genres).forEach(genre => {
    const genreElement = document.getElementById(genre);
    if (genreElement) {
        genreElement.addEventListener('click', genres[genre]);
    }
});

let filmId = 0;

// genreCrime.onclick = () => {
//     SortByGanre('Crime')
// }
clearFilms.onclick = () => {
    films = [];
    loadProductsToTable(films);
    localStorage.removeItem(itemsKey);
}

sortByName.onclick = () => {
    films.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    loadProductsToTable(films);
};


sortByDate.onclick = () => {
    films.sort((a, b) => a.year - b.year);

    loadProductsToTable(films);
};



sortByRaiting.onclick = () => {
    films.sort((a, b) => a.rating - b.rating);

    loadProductsToTable(films);
};






function SortByGenre(genre) {
    const newFilms = [];
    films.forEach(element => {
        if (element.ganre === genre)
            newFilms.push(element);
    });

    loadProductsToTable(newFilms);
}



function addFilmToList(item) {
    filmList.innerHTML += `
    <div class="col mb-4">
        <a href="FilmOverview.html?filmId=${item.id}" class="text-decoration-none text-light">
            <div class="card bg-dark text-light">
                <img src="${item.imgUrl}" class="card-img-top" alt="${item.name}">
                <div class="card-body"> 
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.year}</p>
                </div>
            </div>
        </a>
    </div>`;
}


function loadProductsToTable(items) {
    filmList.innerHTML = "";
    for (const film of items) {
        addFilmToList(film);
    }
}

function load() {
    films = JSON.parse(localStorage.getItem(itemsKey));
}




