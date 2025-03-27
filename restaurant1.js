// Variables-------------------------------------------------------
const citySelector = document.getElementById("city-select");
const buttonValider = document.getElementById("valider");

const buttonVege = document.getElementById("vege");
const buttonCuisine = document.getElementById("cuisine");

const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");

// Tableau de restaurants-----------------------------------------------------
const restaurantTable = [
    {
        nameOf: "Brasserie Excelsior",
        city: "Nancy",
        img: "./assetes/images/resto1.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: true,
        score: "4.7",
    },
    {
        nameOf: "Aux Armes de Strasbourg",
        city: "Strasbourg",
        img: "./assetes/images/resto2.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: true,
        score: "4.1",
    },
    {
        nameOf: "La fine Bulle",
        city: "Reims",
        img: "./assetes/images/resto3.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: true,
        score: "4.6",
    },
    {
        nameOf: "The Drunky Stork Social Club",
        city: "Strasbourg",
        img: "./assetes/images/resto4.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: true,
        score: "3.9",
    },
    {
        nameOf: "Au Vieux Strasbourg",
        city: "Strasbourg",
        img: "./assetes/images/resto5.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: true,
        score: "4.2",
    },
    {
        nameOf: "La Grande Georgette",
        city: "Metz",
        img: "./assetes/images/resto6.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: false,
        score: "4.0",
    },
    {
        nameOf: "Le Stan'",
        city: "Nancy",
        img: "./assetes/images/resto7.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: true,
        score: "4.8",
    },
    {
        nameOf: "Caveau Des Rois",
        city: "Reims",
        img: "./assetes/images/resto8.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: false,
        score: "3.8",
    },
    {
        nameOf: "L'Aloyau",
        city: "Metz",
        img: "./assetes/images/resto9.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: true,
        score: "4.5",
    },
    {
        nameOf: "Grabrielle Reims",
        city: "Reims",
        img: "./assetes/images/resto10.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: false,
        score: "4.1",
    },
    {
        nameOf: "Le Coq Rouge",
        city: "Reims",
        img: "./assetes/images/resto11.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: false,
        score: "3.7",
    },
    {
        nameOf: "Restaurant L'ExtrA",
        city: "Reims",
        img: "./assetes/images/resto12.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: true,
        score: "4.5",
    },
    {
        nameOf: "Le Majeur",
        city: "Nancy",
        img: "./assetes/images/resto13.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: false,
        score: "4.0",
    },
    {
        nameOf: "Le Bouche A Oreille",
        city: "Nancy",
        img: "./assetes/images/resto14.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: false,
        score: "4.3",
    },
    {
        nameOf: "La Maison Dans le Parc",
        city: "Nancy",
        img: "./assetes/images/resto15.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: true,
        score: "4.9",
    },
    {
        nameOf: "La Table Du Gayot",
        city: "Strasbourg",
        img: "./assetes/images/resto16.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: true,
        score: "4.1",
    },
    {
        nameOf: "Restaurant Les Chauvins",
        city: "Strasbourg",
        img: "./assetes/images/resto17.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: true,
        score: "4.8",
    },
    {
        nameOf: "Au Petit Louis",
        city: "Metz",
        img: "./assetes/images/resto18.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: true,
        score: "4.6",
    },
    {
        nameOf: "La Fleure de Ly",
        city: "Metz",
        img: "./assetes/images/resto19.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: true,
        isLocal: false,
        score: "3.9",
    },
    {
        nameOf: "La Popote",
        city: "Metz",
        img: "./assetes/images/resto20.jpg",
        imgNote: "./assetes/images/star.png",
        isVegetarian: false,
        isLocal: true,
        score: "4.4",
    },

];

// Partie Filtre---------------------------------------------------
function restaurantFilter(table) {
    let filteredTable = [...table]; // Faire une copie du tableau d'origine pour ne pas le modifier directement

    // Filtre par ville
    if (citySelector.value !== "Ville") {
        filteredTable = filteredTable.filter((restaurant) => restaurant.city === citySelector.value);
    }

    // Filtre par végétarien
    if (buttonVege.checked) {
        filteredTable = filteredTable.filter((restaurant) => restaurant.isVegetarian);
    }

    // Filtre par cuisine locale
    if (buttonCuisine.checked) {
        filteredTable = filteredTable.filter((restaurant) => restaurant.isLocal);
    }

    // Filtre par recherche (nom ou ville)
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredTable = filteredTable.filter((restaurant) =>
            restaurant.nameOf.toLowerCase().includes(searchTerm) || 
            restaurant.city.toLowerCase().includes(searchTerm)
        );
    }

    return filteredTable.sort((a, b) => b.score - a.score); // Tri par score
}

// Affichage----------------------------------------------------------------
function createdCard(restaurantCard) {
    const card = document.createElement("article");
    card.classList.add("deleteResto", "block", "rounded-lg", "bg-white/95", "shadow-2xl", "w-[220px]", "h-auto", "max-w-sm", "mx-auto", "mb-10", "transition", "duration-300", "hover:scale-120");

    // Création de la balise <a></a> ppur que la carte soit cliquable
    const link = document.createElement("a");
    link.href = "order.html";
    card.appendChild(link);

    // Ajout des images resto 
    const imgResto = document.createElement("img");
    imgResto.classList.add("rounded-t-lg", "w-[220px]", "h-[146px]", "object-cover");
    imgResto.src = restaurantCard.img;
    imgResto.alt = restaurantCard.nameOf;
    link.appendChild(imgResto);

    // Création de la balise <div></div>
    const textContainer = document.createElement("div");
    textContainer.classList.add("p-1", "py-2", "text-surface", "dark:to-black", "text-center");
    link.appendChild(textContainer);
    
    // Création de la balise <h2></h2>
    const titreResto = document.createElement("h2");
    titreResto.classList.add("mb-2", "text-xl", "font-medium", "leading-tight");
    titreResto.textContent = restaurantCard.nameOf;
    textContainer.appendChild(titreResto);

    // Conteneur spécifique pour l'étoile (avec score à gauche)
    const starContainer = document.createElement("div");
    starContainer.classList.add("flex", "items-center", "justify-center", "my-2");

    // Ajouter le score à gauche de l'étoile
    const scoreText = document.createElement("span");
    scoreText.classList.add("text-s", "font-semibold", "mr-2", "text-[#191998]");
    scoreText.textContent = restaurantCard.score; // Afficher le score du restaurant
    starContainer.appendChild(scoreText);

    // Ajout de l'image étoile
    const noteEtoile = document.createElement("img");
    noteEtoile.classList.add("w-5");
    noteEtoile.src = restaurantCard.imgNote;
    noteEtoile.alt = restaurantCard.score;
    starContainer.appendChild(noteEtoile);
    
    textContainer.appendChild(starContainer);

    // Ligne séparatrice
    const ligne = document.createElement("hr");
    ligne.classList.add("my-2", "h-px", "border-t-0", "bg-transparent", "bg-gradient-to-r" , "from-transparent" , "via-neutral-500", "to-transparent", "opacity-75", "dark:via-neutral-800");
    textContainer.appendChild(ligne);

    const cityResto = document.createElement("h2");
    cityResto.textContent = restaurantCard.city;
    textContainer.appendChild(cityResto);

    cardContainer.appendChild(card);
}

// Clean de l'écran------------------------------------------------
function cleanScreen() {
    const restoDelete = document.querySelectorAll(".deleteResto");
    restoDelete.forEach(resto => resto.remove()); // Supprime toutes les cartes affichées
}

// Déclenchement des filtres et recherche-----------------------------------
buttonValider.addEventListener('click', function () {
    const filteredRestaurants = restaurantFilter(restaurantTable);
    cleanScreen(); // Nettoyer l'écran
    filteredRestaurants.forEach(createdCard); // Afficher les cartes filtrées
});

// Recherche par input------------------------------------------------------
searchInput.addEventListener('input', function () {
    const filteredRestaurants = restaurantFilter(restaurantTable);
    cleanScreen(); // Nettoyer l'écran
    filteredRestaurants.forEach(createdCard); // Afficher les cartes filtrées
});

if (localStorage.getItem("citySelected") != null) {
    citySelector.value = localStorage.getItem("citySelected");
}

for (restaurant of restaurantFilter(restaurantTable)) {

    createdCard(restaurant);
}

// Bouton retour haut de page
document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector("[data-role='scroll-arrow']");

    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollButton.classList.remove("hidden");
        } else {
            scrollButton.classList.add("hidden");
        }
    });
});


  