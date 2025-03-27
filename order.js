document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".addMeal");
  const mealList = document.querySelector("#mealList");
  const itemCount = document.querySelector("#itemCount");
  const totalPrice = document.querySelector("#totalPrice");
  const cartPopup = document.querySelector("#cartPopup");
  const cartButton = document.querySelector("#cartButton");
  const closeCart = document.querySelector("#closeCart");
  const orderButton = document.querySelector("#orderButton");

  let total = 0;
  let cart = {}; // Objet pour stocker les articles (ex: { "Burger": { price: 5.5, quantity: 2 } })

  // Ajout d'un article au panier
  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      const mealName = button.dataset.name;
      const mealPrice = parseFloat(button.dataset.price);
      
      if (cart[mealName]) {
        cart[mealName].quantity += 1;
      } else {
        cart[mealName] = { price: mealPrice, quantity: 1 };
      }
      updateCart();
    });
  });

  ////////////////////////// Mise à jour du panier0 //////////////////////////////
  function updateCart() {
    // Mise à jour du nombre d'articles et du total
    itemCount.textContent = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    total = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.textContent = total.toFixed(2);

    // Reconstruction de la liste du panier
    mealList.innerHTML = "";
    for (const [mealName, mealData] of Object.entries(cart)) {
      const newMeal = document.createElement("li");
      newMeal.classList.add("flex", "justify-between", "items-center", "mb-2");
      newMeal.innerHTML = `
        <span class="mr-4">${mealName} (x${mealData.quantity})</span>
        <div class="flex gap-2">
          <button class="decreaseMeal bg-[#191968] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500" data-name="${mealName}">-</button>
          <button class="increaseMeal bg-[#191968] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500" data-name="${mealName}">+</button>
          <button class="removeMeal text-red-500  hover:text-red-700" data-name="${mealName}">✖</button>
        </div>
      `;
      mealList.appendChild(newMeal);
    }
  }

  ////////////////////////// Gestion des clics sur les boutons du panier //////////////////////////////
  mealList.addEventListener("click", (event) => {
    const mealName = event.target.dataset.name;
    if (event.target.classList.contains("removeMeal")) {
      delete cart[mealName];
    } else if (event.target.classList.contains("increaseMeal")) {
      cart[mealName].quantity += 1;
    } else if (event.target.classList.contains("decreaseMeal")) {
      if (cart[mealName].quantity > 1) {
        cart[mealName].quantity -= 1;
      } else {
        delete cart[mealName];
      }
    }
    updateCart();
  });

  ////////////////////////// Gestion des clics sur les boutons du panier //////////////////////////////
  cartButton.addEventListener("click", () => {
    cartPopup.classList.remove("hidden");
  });
  closeCart.addEventListener("click", () => {
    cartPopup.classList.add("hidden");
  });

  ////////////////////////// Au clickj sur "commander" -> redirection final-order.html //////////////////////////////
  orderButton.addEventListener("click", () => {
    localStorage.setItem("cartData", JSON.stringify(cart));
    window.location.href = "final-order.html";
  });
});