const backHomeBtn = document.querySelector('#Back-Home');
const films = [];
const filmsKey = "list-films";

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



const form = document.getElementById('create_form'); // Змінено на 'create_form'436b45645h5h75

function save() {
    localStorage.setItem(filmsKey, JSON.stringify(films));
}


backHomeBtn.onclick = (event) => {

    event.preventDefault();
    save();
    window.location.href = 'HomePage.html';
}
if (form) {
    const nameIn = form.elements.name;
    const yearIn = form.elements.year;
    const tagsIn = form.elements.tags;
    const authorIn = form.elements.author;
    const countryIn = form.elements.country;
    const timeIn = form.elements.time;
    const ratingIn = form.elements.rating;
    const urlIn = form.elements.url;

    form.onsubmit = (event) => { // Змінено з addVideo на form.onsubmit
        event.preventDefault();
        let item = new Film(nameIn.value, +yearIn.value, tagsIn.value.split(' '), authorIn.value, countryIn.value, timeIn.value, ratingIn.value, urlIn.value);

        films.push(item);
        console.log(films);
        // window.location.href = 'HomePage.html';
        // addFilmToList(item);
    }
} else {
    console.error('Форма create_form не знайдена');
}
export { films };


