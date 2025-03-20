const buttonsAddList = document.querySelectorAll(".buttonAdd");
const mealList = document.querySelector(".mealList");
const itemNumber = document.querySelector(".itemNumber");
const totalPrice = document.querySelector(".totalPrice");

// Coût total de la commande
let totalP = 0;

// Fonction des boutons "Ajouter au panier" pour tous les plats affichés
for (const button of buttonsAddList) {

    // Quand on appuie sur le bouton "ajouter au panier"...
    button.onclick = function (event) {

        // Pas de reload de la page
        event.preventDefault();

        // Message plat ajouté & ajoute +1 au nombre de plats commandés
        alert("'" + button.name + "'" + " ajouté au panier");
        itemNumber.innerHTML++;

        // Augmente le prix de la commande (arrondi à 2 décimales près)
        totalP = parseFloat(totalP) + parseFloat(button.value)
        totalPrice.innerHTML = Math.round(totalP * 100) / 100;

        // Creation d'une nouvelle li
        const newMeal = document.createElement("li");

        // Modification du texte du li avec le nom du plat
        newMeal.innerHTML = button.name;

        // A ajouter classe custom => newMeal.classList quand on aura du CSS

        // Ajout du li au ul existant
        mealList.appendChild(newMeal);
    };
}


