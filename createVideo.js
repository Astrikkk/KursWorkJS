const itemsKey = "list-films";
let films = [];

const form = document.getElementById('create_form');

if (form) {
    form.onsubmit = (event) => {
        event.preventDefault();

        const nameIn = form.elements.name.value;
        const yearIn = form.elements.year.value;
        const authorIn = form.elements.author.value;
        const ratingIn = form.elements.rating.value;
        const imgUrlIn = form.elements.imgUrlIn.value;
        const VideoUrlIn = form.elements.urlVideo.value;
        const Scr1UrlIn = form.elements.Scr1Url.value;
        const Scr2UrlIn = form.elements.Scr2Url.value;
        const Scr3UrlIn = form.elements.Scr3Url.value;
        const DescriptionIn = form.elements.description.value;

        load();
        let film = new Film(nameIn, yearIn, authorIn, ratingIn, imgUrlIn ,VideoUrlIn , Scr1UrlIn, Scr2UrlIn, Scr3UrlIn, DescriptionIn);
        films.push(film);
        save();
        window.location.href = 'HomePage.html';
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
    constructor(name, year, author, rating, url, urlVideo, urlScr1, urlScr2, urlScr3, desc) {
        this.name = name;
        this.year = year;
        this.author = author;
        this.rating = rating;
        this.imgUrlIn = url;
        this.VideoUrl = urlVideo;
        this.Scr1Url = urlScr1;
        this.Scr2Url = urlScr2;
        this.Scr3Url = urlScr3;
        this.description = desc;
    }
}
