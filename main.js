const filmList = document.getElementById('film-list');

// const createTab = document.querySelector('#create-video-tab');
const updateBtn = document.querySelector('#update');
//const addVideo = document.querySelector('#add-video');
var films = [];




function addFilmToList(item) {
    filmList.innerHTML += `
    <div class="col mb-4">
        <div class="card bg-dark text-light">
            <img src="${item.url}" class="card-img-top"
                alt="${item.name}">
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

export { films, Film };







// const filmList = document.querySelector('.row');
// const addVideo = document.querySelector('#add-video');
// const films = [];


// const form = document.forms.create_video;
// const nameIn = form.elements.name;
// const yearIn = form.elements.year;
// const tagsIn = form.elements.tags;
// const authorIn = form.elements.author;
// const countryIn = form.elements.country;
// const timeIn = form.elements.time;
// const ratingIn = form.elements.rating;
// const urlIn = form.elements.url;


// document.getElementById('searchByNameBtn').onclick = () => {
//     const searchTerm = searchInp.value.toLowerCase();
//     loadProductsToTable(films.filter(x => x.name.toLowerCase().includes(searchTerm)));
// };


// addVideo.onclick = (event) => {

//     event.preventDefault();
//     // if (nameIn.value && urlIn.value) {
//     let item = new Film(nameIn.value, +yearIn.value, tagsIn.value.split(' '), authorIn.value, countryIn.value, timeIn.value, ratingIn.value, urlIn.value);
//     films.push(item);
//     addFilmToList(item);
//     // console.log(films);
//     // } else
//     //     alert("Enter all info");
// }

// function addFilmToList(item) {
//     filmList.innerHTML += `
//         <div class="col mb-4">
//             <div class="card bg-dark text-light">
//                 <img src="${item.imageUrl}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${item.name}</h5>
//                     <p class="card-text">${item.year}</p>
//                 </div>
//             </div>
//         </div>`;
// }

// function loadProductsToTable(items) {
//     filmList.innerHTML = "";
//     for (const film of items) {
//         addFilmToList(film);
//     }
// }



// class Film {
//     static count = 0;
//     constructor(name, year, tags, author, country, time, rating, url) {
//         this.name = name;
//         this.year = year;
//         this.tags = tags;
//         this.author = author;
//         this.country = country;
//         this.time = time;
//         this.rating = rating;
//         this.url = url;
//     }


//     addTags(tag) {
//         this.tags.push(tag);
//     }
// }




// // class Film {
// //     static count = 0;
// //     constructor(name, year, imageUrl) {
// //         this.name = name;
// //         this.year = year;
// //         this.imageUrl = imageUrl;
// //     }
// // }