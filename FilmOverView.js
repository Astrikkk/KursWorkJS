const FilmKey = "current-Film";
const itemsKey = "list-films";
let selectedFilm = new Film();
let films = [];
load();
loadFilm();


document.getElementById('Video').src = films[selectedFilm].VideoUrl;
document.getElementById('ScreenShot1').innerHTML = `<img src="${films[selectedFilm].Scr1Url}" alt="ScreenShot 1">`;
document.getElementById('ScreenShot2').innerHTML = `<img src="${films[selectedFilm].Scr2Url}" alt="ScreenShot 2">`;
document.getElementById('ScreenShot3').innerHTML = `<img src="${films[selectedFilm].Scr3Url}" alt="ScreenShot 3">`;
document.getElementById('Description').textContent = films[selectedFilm].description;

console.log(films[selectedFilm].name, films[selectedFilm].year);


function load() {
    films = JSON.parse(localStorage.getItem(itemsKey));
}
function loadFilm() {
    film = JSON.parse(localStorage.getItem(FilmKey));
}




class Film {
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
    }
}