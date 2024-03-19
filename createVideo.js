import { films as cpoyFilms, Film } from "./main";

const form = document.getElementById('create_form');

const form = document.getElementById('create_form'); // Змінено на 'create_form'436b45645h5h75
if (form) {
    form.onsubmit = (event) => {
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



