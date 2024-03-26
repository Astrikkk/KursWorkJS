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
        const ganreIn = form.elements.ganre.value;
        const imgUrlIn = form.elements.imgUrl.value;
        const videoUrlIn = form.elements.videoUrl.value;
        const scr1Url = form.elements.scr1Url.value;
        const scr2Url = form.elements.scr2Url.value;
        const scr3Url = form.elements.scr3Url.value;
        const Description = form.elements.description.value;

        load();
        let film = new Film(nameIn, yearIn, authorIn,
            ratingIn, ganreIn, imgUrlIn, videoUrlIn, scr1Url, scr2Url, scr3Url, Description);
        film.id = films.length;
        films.push(film);
        save();
        window.location.href = 'HomePage.html'; // Make sure the path is correct
    };
} else {
    //console.error('Форма create_form не знайдена');
}

function save() {
    localStorage.setItem(itemsKey, JSON.stringify(films));
}

function load() {
    const storedFilms = localStorage.getItem(itemsKey);
    films = storedFilms ? JSON.parse(storedFilms) : [];
}

class Film {

    static count = 0;
    constructor(name, year, author, rating, ganre, url, urlVideo, urlScr1, urlScr2, urlScr3, description) {
        this.name = name;
        this.year = year;
        this.author = author;
        this.rating = rating;
        this.ganre = ganre
        this.imgUrl = url;
        this.VideoUrl = urlVideo;
        this.Scr1Url = urlScr1;
        this.Scr2Url = urlScr2;
        this.Scr3Url = urlScr3;
        this.description = description;
        this.id = ++Film.count;
    }
}