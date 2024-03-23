const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('id');
console.log(ID);


const itemsKey = "list-films";
let selectedFilm = new Film();
let films = [];
load();




document.getElementById('Video').src = films[ID].VideoUrl;
document.getElementById('ScreenShot1').innerHTML = `<img src="${films[ID].Scr1Url}" alt="ScreenShot 1">`;
document.getElementById('ScreenShot2').innerHTML = `<img src="${films[ID].Scr2Url}" alt="ScreenShot 2">`;
document.getElementById('ScreenShot3').innerHTML = `<img src="${films[ID].Scr3Url}" alt="ScreenShot 3">`;
document.getElementById('Description').textContent = films[ID].description;

console.log(films[ID].name, films[ID].year);


function load() {
    films = JSON.parse(localStorage.getItem(itemsKey));
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