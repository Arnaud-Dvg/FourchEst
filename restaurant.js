/*

ETAPE 1---------------------------------LE TABLEAU D'OBJETS---------------------------------------------------------------------------------------------------------------------------------

Le but : avoir un tableau d'objets "restaurant" avec leurs renseignements, qui nous servira de base de donnée

- Créer des objets restaurant :

=> const restaurant {string Nom, image, string Ville, bool isVegetarian, bool isLocal, float score}

- En créer une vingtaine (pour en avoir 5 pour chaque ville environ), en renseignant des paramètres végétarien, local, note variés
- Tout regrouper dans un tableau 

VOIR la quête principale DOM, ça donnera quelque chose comme ça :

const restaurantList = [
{
    name: "la choucroute dorée",
    picture: "",
    city: "Nancy",
    isVegetarian: "true",
    isLocal: "true",
    score: "4.5",

},
{
    name: "Au bon bretzel",
    picture: "",
    city: "Strasbourg",
    isVegetarian: "false",
    isLocal: "true",
    score: "4.9",

},
]

ETAPE 2--------------------------------LE FILTRE------------------------------------------------------------------------------------------------------------------------------------------

Le but : on prend le tableau complet restaurantList et on applique les filtres suivants :
city => est égal à "Nancy", "Strasbourg", "Reims"....
isVegetarian => est égal à true ou false
isLocal => est égal à true ou false

- HTML : Besoin de formulaires HTML (cf chapitre 7 HTML) pour transmettre au JS, les paramètres de filtre choisis

city => menu déroulant <select>
isVegetarian => forumlaire radio ou checkbox (type="radio" ou type="checkbox")
isLocal => formulaire radio ou checkbox (type="radio" ou type="checkbox")


- JS : On appelle la fonction de filtre quand on clique sur un bouton "valider le choix de filtre" ce qui prend en compte tous les parametres renseignés
Voir JS intermédiaire 02 & 02bis

function SortingByCity(cityToDisplay)
{
    return tableSortedByCity = restaurantList.filter((restaurant) => restaurant.city == cityToDisplay);
}

function SortingByLocalFood(isLocal)
{
    return tableSortedByLocalFood = restaurantList.filter((restaurant) => restaurant.isLocal == isLocal);
}

etc pour les autres filtres...
=> A la fin on obtiendra un tableau let restaurantToDisplay qui ne contient que les restaurants qui auront passé les différents filtres


BONUS : tri par score----------------

On prend le tableau de restaurant à afficher (restaurantToDisplay), et on le tri selon la valeur de la variable "score"

Il y a une fonction toute faite array.toSort()
Si cette fonction n'est pas applicable, on le fait à la main avec une boucle


ETAPE 3----------------------------------L'AFFICHAGE--------------------------------------------------------------------------------------------------------------------------------------------

- Grâce au JS, on crée et affiche dans le HTML uniquement les restaurants triés
- Idem quête principale DOM ci-dessous :

function createCard(animal) {
  const { picture, name } = animal;

  const card = document.createElement("figure");
  card.classList.add("card");
  cards.appendChild(card);

  const cardImg = document.createElement("img");
  cardImg.src = picture;
  cardImg.alt = name;
  cardImg.classList.add("card-img");
  card.appendChild(cardImg);
  }

En gros : for each restaurant in restaurantToDisplay 

=> create element
=> assign class
=> changer valeur innerHTML / source img si besoin
=> append child

*/
