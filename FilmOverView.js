const urlParams = new URLSearchParams(window.location.search);
const filmId = urlParams.get('filmId');

const films = JSON.parse(localStorage.getItem('list-films'));
const selectedFilm = films.find(film => film.id === parseInt(filmId));

// if (selectedFilm) {
document.getElementById('Video').src = selectedFilm.VideoUrl;
document.getElementById('ScreenShot1').innerHTML = `<img src="${selectedFilm.Scr1Url}" alt="ScreenShot 1">`;
document.getElementById('ScreenShot2').innerHTML = `<img src="${selectedFilm.Scr2Url}" alt="ScreenShot 2">`;
document.getElementById('ScreenShot3').innerHTML = `<img src="${selectedFilm.Scr3Url}" alt="ScreenShot 3">`;
document.getElementById('Description').textContent = selectedFilm.description;
// } else {
//     // Обробляйте випадок, коли фільм з визначеним filmId не знайдено
//     console.error('Фільм з визначеним ID не знайдено');
// }





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