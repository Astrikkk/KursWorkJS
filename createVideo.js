const itemsKey = "list-films";
let films = [];

const form = document.getElementById('create_form');

if (form) {
    form.onsubmit = (event) => {
        event.preventDefault();

        const nameIn = form.elements.name.value;
        const yearIn = form.elements.year.value;
        const tagsIn = form.elements.tags.value.split(',');
        const authorIn = form.elements.author.value;
        const countryIn = form.elements.country.value;
        const timeIn = form.elements.time.value;
        const ratingIn = form.elements.rating.value;
        const urlIn = form.elements.url.value;

        load();
        let film = new Film(nameIn, yearIn, tagsIn, authorIn, countryIn,
            timeIn, ratingIn, urlIn);
        films.push(film);
        save();
        window.location.href = 'HomePage.html'; // Make sure the path is correct
    };
} else {
    console.error('Форма create_form не знайдена');
}

function save() {
    localStorage.setItem(itemsKey, JSON.stringify(films));
}

function load() {
    const storedFilms = localStorage.getItem(itemsKey);
    films = storedFilms ? JSON.parse(storedFilms) : [];
}

class Film {
    constructor(name, year, tags, author, country, time, rating, url) {
        this.name = name;
        this.year = year;
        this.tags = tags;
        this.author = author;
        this.country = country;
        this.time = time;
        this.rating = rating;
        this.url = url;
    }

    addTags(tag) {
        this.tags.push(tag);
    }
}
