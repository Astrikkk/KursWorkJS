const filmList = document.querySelector('.row');
const searchInp = document.forms.search_form.elements.search_input;
const films = [];

document.getElementById('searchByNameBtn').onclick = () => {
    const searchTerm = searchInp.value.toLowerCase();
    loadProductsToTable(films.filter(x => x.name.toLowerCase().includes(searchTerm)));
};

function addFilmToList(item) {
    filmList.innerHTML += `
        <div class="col mb-4">
            <div class="card bg-dark text-light">
                <img src="${item.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.year}</p>
                </div>
            </div>
        </div>`;
}




function loadProductsToTable(items) {
    filmList.innerHTML = "";
    for (const film of items) {
        addFilmToList(film);
    }
}

class Film {
    static count = 0;
    constructor(name, year, imageUrl) {
        this.name = name;
        this.year = year;
        this.imageUrl = imageUrl;
    }
}