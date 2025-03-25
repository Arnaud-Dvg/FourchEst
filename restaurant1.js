// Variables-------------------------------------------------------
const citySelector = document.getElementById("city-select");
const buttonValider = document.getElementById("valider");

const buttonVege = document.getElementById("vege");
const buttonCuisine = document.getElementById("cuisine");

const cardContainer = document.getElementById("cardContainer");



// Tableau de restaurants-----------------------------------------------------

const restaurantTable = [
    {
        nameOf: "Brasserie Excelsior",
        city: "Nancy",
        img: "./assetes/images/resto1.jpg",
        isVegetarian: false,
        isLocal: true,
        score: "4.7",

    },
    {
        nameOf: "Aux Armes de Strasbourg",
        city: "Strasbourg",
        img: "./assetes/images/resto2.jpg",
        isVegetarian: true,
        isLocal: true,
        score: "4.1",

    },
    {
        nameOf: "La fine Bulle",
        city: "Reims",
        img: "./assetes/images/resto3.jpg",
        isVegetarian: true,
        isLocal: true,
        score: "4.6",

    },
    {
        nameOf: "Le Lorrain",
        city: "Strasbourg",
        img: "./assetes/images/resto4.jpg",
        isVegetarian: false,
        isLocal: true,
        score: "3.9",

    },
    {
        nameOf: "Au Vieux Strasbourg",
        city: "Strasbourg",
        img: "./assetes/images/resto5.jpg",
        isVegetarian: false,
        isLocal: true,
        score: "4.2",

    },
    {
        nameOf: "La Grande Georgette",
        city: "Metz",
        img: "./assetes/images/resto6.jpg",
        isVegetarian: false,
        isLocal: false,
        score: "4.0",

    },
    {
        nameOf: "Le Stan'",
        city: "Nancy",
        img: "./assetes/images/resto7.jpg",
        isVegetarian: true,
        isLocal: true,
        score: "4.9",

    },
    {
        nameOf: "Caveau Des Rois",
        city: "Reims",
        img: "./assetes/images/resto8.jpg",
        isVegetarian: true,
        isLocal: false,
        score: "3.8",

    },
    {
        nameOf: "L'Aloyau",
        city: "Metz",
        img: "./assetes/images/resto9.jpg",
        isVegetarian: true,
        isLocal: true,
        score: "4.5",

    },
];

// Partie Filtre---------------------------------------------------
function restaurantFilter(table) {

    if (citySelector.value != "Ville") {
        table = table.filter((restaurant) => restaurant.city == citySelector.value);
    }

    if (buttonVege.checked) {
        table = table.filter((restaurant) => restaurant.isVegetarian == buttonVege.checked);
    }

    if (buttonCuisine.checked) {
        table = table.filter((restaurant) => restaurant.isLocal == buttonCuisine.checked);
    }

    return table.sort((a, b) => b.score - a.score);
}


//  Affichage----------------------------------------------------------------

function createdCard(restaurantCard) {

    const card = document.createElement("article");
    card.classList.add("deleteResto");
    cardContainer.appendChild(card);

    const imgResto = document.createElement("img"); // on crée l'élement
    imgResto.src = restaurantCard.img; // on lui dit le texte qu'il contient
    card.appendChild(imgResto);

    const titreResto = document.createElement("h2"); // on crée l'élement
    titreResto.innerHTML = restaurantCard.nameOf; // on lui dit le texte qu'il contient
    card.appendChild(titreResto);

    const noteResto = document.createElement("p");
    noteResto.innerHTML = restaurantCard.score;
    card.appendChild(noteResto);

    const cityResto = document.createElement("h2"); // on crée l'élement
    cityResto.innerHTML = restaurantCard.city; // on lui dit le texte qu'il contient
    card.appendChild(cityResto);


    // titreResto.classList.add("card"); // on lui dit quel style il doit avoir class="RestoAsupprimer"
}

// Clean de l'écran------------------------------------------------

function cleanScreen() {
    const restoDelete = document.querySelectorAll(".deleteResto");

    for (resto of restoDelete)
    {
        resto.remove();
    }
}

// DEBUG-----------------------------
buttonValider.addEventListener('click', function () {

    cleanScreen();

    for (restaurant of restaurantFilter(restaurantTable)) {
        createdCard(restaurant);
    }

});

for (restaurant of restaurantFilter(restaurantTable)) {
    createdCard(restaurant);
}

