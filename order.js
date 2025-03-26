document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".addMeal");
  const mealList = document.querySelector("#mealList");
  const itemCount = document.querySelector("#itemCount");
  const totalPrice = document.querySelector("#totalPrice");
  const cartPopup = document.querySelector("#cartPopup");
  const cartButton = document.querySelector("#cartButton");
  const closeCart = document.querySelector("#closeCart");

  let total = 0;
  let cart = {}; // Un objet pour stocker les articles du panier

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mealName = button.dataset.name;
      const mealPrice = parseFloat(button.dataset.price);

      // Mettre à jour la quantité de l'article dans le panier
      if (cart[mealName]) {
        cart[mealName].quantity += 1;
      } else {
        cart[mealName] = { price: mealPrice, quantity: 1 };
      }
      // Mettre à jour l'interface
      updateCart();
    });
  });

  // Fonction pour mettre à jour le panier et l'affichage
  function updateCart() {
    itemCount.textContent = Object.values(cart).reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    total = Object.values(cart).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    totalPrice.textContent = total.toFixed(2);

    mealList.innerHTML = ""; // Réinitialiser la liste avant de la mettre à jour

    // Ajouter chaque article avec sa quantité et les boutons de contrôle
    for (const [mealName, mealData] of Object.entries(cart)) {
      const newMeal = document.createElement("li");
      newMeal.classList.add("flex", "justify-between", "items-center", "mb-2");
      newMeal.innerHTML = `
          <p>${mealName} (x${mealData.quantity})</p>
          <button class="decreaseMeal bg-[#191968] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500" data-name="${mealName}">-</button>
          <button class="increaseMeal bg-[#191968] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500" data-name="${mealName}">+</button>
          <button class="removeMeal text-red-500 hover:text-red-700" data-name="${mealName}">✖</button>
        `;
      mealList.appendChild(newMeal);
    }
  }

  // Fonction pour gérer les clics sur les boutons dans la liste des plats
  mealList.addEventListener("click", (event) => {
    const mealName = event.target.dataset.name;

    if (event.target.classList.contains("removeMeal")) {
      // Supprimer l'article du panier
      delete cart[mealName];

      // Augmenter la quantité
    } else if (event.target.classList.contains("increaseMeal")) {
      cart[mealName].quantity += 1;

      // Diminuer la quantité (sans tomber en dessous de 1)
    } else if (event.target.classList.contains("decreaseMeal")) {
      if (cart[mealName].quantity > 1) {
        cart[mealName].quantity -= 1;
      } else {
        // Si la quantité atteint 0, on supprime l'article
        delete cart[mealName];
      }
    }

    updateCart(); // Met à jour l'affichage du panier
  });

  cartButton.addEventListener("click", () => {
    cartPopup.classList.remove("hidden");
  });

  closeCart.addEventListener("click", () => {
    cartPopup.classList.add("hidden");
  });
});
