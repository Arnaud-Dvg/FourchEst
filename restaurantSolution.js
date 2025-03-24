// VARIABLES-------------A RELIER AUX FORM !------------------------------------
const cityName = document.getElementById("city-select");// l'id est celui du formulaire de la page d'accueil
let isVegan = document.getElementById("vegetarianCheckBox");// l'id est celui de la checkbox vegetarien
let isLocal = document.getElementById("localFoodCheckBox");// l'id est celui de la checkbox cuisine locale

const restaurantSection = document.querySelector(".restaurantSection"); // Linker la section HTML qui contiendra tous les articles
const listGeneratorButton = document.querySelector(".listGenerator"); // Linker le bouton qui génère la liste des restos (si le bouton existe)

// ETAPE 1---------------------------------LE TABLEAU D'OBJETS-----------
const restaurantList = [
    { nameOf: "Resto0", picture: "https://urlr.me/yBuxC7", city: "Nancy", isVegetarian: true, isLocal: true, score: "4.5", },
    { nameOf: "Resto1", picture: "https://urlr.me/yBuxC7", city: "Nancy", isVegetarian: true, isLocal: false, score: "4.5", },
    { nameOf: "Resto2", picture: "https://urlr.me/yBuxC7", city: "Nancy", isVegetarian: true, isLocal: true, score: "4.5", },
    { nameOf: "Resto3", picture: "https://urlr.me/yBuxC7", city: "Nancy", isVegetarian: false, isLocal: true, score: "1.5", },
    { nameOf: "Resto4", picture: "https://urlr.me/yBuxC7", city: "Nancy", isVegetarian: false, isLocal: false, score: "4.5", },
    { nameOf: "Resto5", picture: "https://urlr.me/yBuxC7", city: "Nancy", isVegetarian: false, isLocal: true, score: "3.8", },
    { nameOf: "Resto6", picture: "https://urlr.me/yBuxC7", city: "Reims", isVegetarian: true, isLocal: true, score: "4.5", },
    { nameOf: "Resto7", picture: "https://urlr.me/yBuxC7", city: "Reims", isVegetarian: true, isLocal: false, score: "4.5", },
    { nameOf: "Resto8", picture: "https://urlr.me/yBuxC7", city: "Reims", isVegetarian: true, isLocal: true, score: "4.5", },
    { nameOf: "Resto9", picture: "https://urlr.me/yBuxC7", city: "Reims", isVegetarian: false, isLocal: true, score: "1.5", },
    { nameOf: "Resto10", picture: "https://urlr.me/yBuxC7", city: "Reims", isVegetarian: false, isLocal: false, score: "4.5", },
    { nameOf: "Resto11", picture: "https://urlr.me/yBuxC7", city: "Reims", isVegetarian: false, isLocal: true, score: "3.8", },
    { nameOf: "Resto12", picture: "https://urlr.me/yBuxC7", city: "Strasbourg", isVegetarian: true, isLocal: true, score: "4.5", },
    { nameOf: "Resto13", picture: "https://urlr.me/yBuxC7", city: "Strasbourg", isVegetarian: true, isLocal: false, score: "4.5", },
    { nameOf: "Resto14", picture: "https://urlr.me/yBuxC7", city: "Strasbourg", isVegetarian: true, isLocal: true, score: "4.5", },
    { nameOf: "Resto15", picture: "https://urlr.me/yBuxC7", city: "Strasbourg", isVegetarian: false, isLocal: true, score: "1.5", },
    { nameOf: "Resto16", picture: "https://urlr.me/yBuxC7", city: "Strasbourg", isVegetarian: false, isLocal: false, score: "4.5", },
    { nameOf: "Resto17", picture: "https://urlr.me/yBuxC7", city: "Strasbourg", isVegetarian: false, isLocal: true, score: "3.8", }];


// ETAPE 2--------------------------------LE FILTRE---------------------

// Filtre selon les critères définis + tri par ordre croissant de note
function applySorting(restaurantList) {

    // Filtre par valeur du form & valeur de la chackbox si elle est cochée

    // // Affiche toutes les villes si rien de défini
    if ((cityName.value == "Nancy") || (cityName.value == "Reims") || (cityName.value == "Strasbourg")) {
        restaurantList = restaurantList.filter((restaurant) =>
            restaurant.city == cityName.value);
    }

    // Affiche les restau vegetarien si la case est cochée
    if (isVegan.checked) {
        restaurantList = restaurantList.filter((restaurant) =>
            restaurant.isVegetarian == isVegan.checked);
    }

    // Affiche les restau cuisine locale si la case est cochée
    if (isLocal.checked) {
        restaurantList = restaurantList.filter((restaurant) =>
            restaurant.isLocal == isLocal.checked);
    }

    // Sorting par score
    return restaurantList.sort((a, b) => b.score - a.score);
}

// ETAPE 3----------------------------------L'AFFICHAGE----------------

// Affiche au propre sur l'écran toutes les cartes de restaurant crées
function displayAllRestaurants(restaurantList) {
    cleanDisplay();

    for (restaurant of restaurantList) {
        createRestaurant(restaurant);
    }
}

// Crée un restau HTML selon les critères définis JS
function createRestaurant(restaurant) {
    const restaurantArticle = document.createElement("article");
    restaurantArticle.classList.add("restaurantArticle"); // Ajouter la classe du container (background, flex etc) !Important pour CleanDisplay!
    restaurantSection.appendChild(restaurantArticle);

    const articleName = document.createElement("p");
    articleName.innerHTML = restaurant.nameOf;
    articleName.classList.add("articleName"); // Ajouter la classe du titre (couleur, taille de police etc)
    restaurantArticle.appendChild(articleName);

    const articlePhoto = document.createElement("img");
    articlePhoto.src = restaurant.picture;
    articlePhoto.classList.add("articlePhoto"); // Ajouter la classe de l'image
    restaurantArticle.appendChild(articlePhoto);

    const articleScore = document.createElement("p");
    articleScore.innerHTML = restaurant.score;
    articleScore.classList.add("articleScore"); // Ajouter la classe de la note du restaurant (couleur, taille de police etc)
    restaurantArticle.appendChild(articleScore);

}

// Supprime les resto précédemment affichés sur la page
function cleanDisplay() {
    let restaurantsToDelete = document.querySelectorAll(".restaurantArticle"); // Nom de la classe à adapter si besoin!

    for (restaurantToDelete of restaurantsToDelete) {
        restaurantToDelete.remove();
    }
}

// APPEL VIA CLIC SUR LE BOUTON------------------------------------------

listGeneratorButton.addEventListener("click", function () {
    displayAllRestaurants(applySorting(restaurantList));
});



