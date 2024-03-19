import { films as cpoyFilms, Film } from "./main";


const form = document.getElementById('create_form'); // Змінено на 'create_form'436b45645h5h75
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
        let item = 10;

        window.location.href = 'HomePage.html';
        cpoyFilms.push(item);
        console.log(films);
        // addFilmToList(item);
    }
} else {
    console.error('Форма create_form не знайдена');
}



