/* Mes restaurants favoris */

const cards = document.querySelector("#cards");

const lastresto = [
    {
        date: '27 fevrier',
        nameofresto: 'Restaurant 3',
        picture: './assetes/images/kebab.jpg',
        descriimg: 'Kebab Royal',
        title: 'Le meilleur Kebab de tout Strasbourg',
        description: 'Généreux et riche en cholestérol !',
        lastread: '6 days ago',
    },
    {
        date: '12 mars',
        nameofresto: 'Restaurant 9',
        picture: './assetes/images/tacos_sushis.png',
        descriimg: 'Tacos sushi',
        title: 'Le seul et l’unique Tacos Sushi',
        description: 'Oserez-vous ce tacos unique au bon goût de la mer ?',
        lastread: '3 h read',
    },
    {
        date: '10 mars',
        nameofresto: 'Restaurant 1',
        picture: './assetes/images/kebab_choucroute.jpeg',
        descriimg: 'Kebab choucroute',
        title: 'Toute l’Alsace dans un kebab',
        description: 'Venez comme vous êtes et profitez du meilleur de la choucroute alsacienne et du meilleur kebab de tout Strasbourg.',
        lastread: '6 mins read',
    },
];

function createCard(resto) {
    const { date, picture, descriimg, nameofresto, title, description, lastread } = resto;

    // Création de la carte
    const card = document.createElement("div");
    card.classList.add("rounded", "overflow-hidden", "shadow-lg");
    card.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    card.style.padding = "10px";
    card.style.marginBottom = "15px";

    // Image
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("relative");

    const img = document.createElement("img");
    img.src = picture;
    img.alt = descriimg;
    img.classList.add("w-full", "card-img");
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.objectFit = "cover";

    // Effet de survol
    const hoverEffect = document.createElement("div");
    hoverEffect.classList.add(
        "hover:bg-transparent",
        "transition",
        "duration-300",
        "absolute",
        "bottom-0",
        "top-0",
        "right-0",
        "left-0",
        "bg-gray-900",
        "opacity-25"
    );

    imgContainer.appendChild(img);
    imgContainer.appendChild(hoverEffect);

    // Titre du restaurant
    const restoName = document.createElement("div");
    restoName.classList.add(
        "absolute",
        "bottom-0",
        "left-0",
        "bg-indigo-600",
        "px-4",
        "py-2",
        "text-white",
        "text-sm",
        "hover:bg-white",
        "hover:text-indigo-600",
        "transition",
        "duration-500",
        "ease-in-out"
    );
    restoName.textContent = nameofresto;

    // Date
    const dateDiv = document.createElement("div");
    dateDiv.classList.add(
        "text-sm",
        "absolute",
        "top-0",
        "right-0",
        "bg-indigo-600",
        "px-4",
        "text-white",
        "rounded-full",
        "h-16",
        "w-16",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "mt-3",
        "mr-3",
        "hover:bg-white",
        "hover:text-indigo-600",
        "transition",
        "duration-500",
        "ease-in-out"
    );

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("font-bold");
    dateSpan.textContent = date.split(" ")[0];

    const dateSmall = document.createElement("small");
    dateSmall.textContent = date.split(" ")[1];

    dateDiv.appendChild(dateSpan);
    dateDiv.appendChild(dateSmall);

    imgContainer.appendChild(restoName);
    imgContainer.appendChild(dateDiv);

    // Corps de la carte
    const cardBody = document.createElement("div");
    cardBody.classList.add("px-6", "py-4");

    const cardTitle = document.createElement("a");
    cardTitle.href = "#";
    cardTitle.classList.add(
        "font-semibold",
        "text-lg",
        "inline-block",
        "hover:text-indigo-600",
        "transition",
        "duration-500",
        "ease-in-out"
    );
    cardTitle.textContent = title;

    const cardDesc = document.createElement("p");
    cardDesc.classList.add("text-gray-500", "text-sm");
    cardDesc.textContent = description;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDesc);

    // Temps de lecture
    const readTimeDiv = document.createElement("div");
    readTimeDiv.classList.add("px-6", "py-4", "flex", "flex-row", "items-center");

    const readTime = document.createElement("span");
    readTime.classList.add("py-1", "text-sm", "font-regular", "text-gray-900", "mr-1", "flex", "flex-row", "items-center");
    readTime.textContent = lastread;

    readTimeDiv.appendChild(readTime);

    // Ajout des éléments dans la carte
    card.appendChild(imgContainer);
    card.appendChild(cardBody);
    card.appendChild(readTimeDiv);

    // Ajout de la carte dans la div #cards
    cards.appendChild(card);
}

// Génération dynamique des cartes
lastresto.forEach(createCard);

/* Mes derniers achats */

const orders = [
    {
        orderNumber: '13432',
        date: '21 mars 2025 à 10:34',
        restaurant: 'RESTO 2',
        items: [
            { name: 'Kebab Choucroute', price: '11.00€' },
            { name: 'Grande frite', price: '3.00€' },
            { name: 'Cola light', price: '2.00€' },
            { name: 'Menu enfant', price: '5.00€' },
            { name: 'Kebab', price: '8.00€' },
            { name: 'Petite frite', price: '1.50€' },
            { name: 'Carola', price: '2.00€' },
            { name: 'Elzas Cola', price: '3.00€' }
        ],
        total: '43.50€',
        discount: '-21.75€ (50%)',
        shipping: '4.00€',
        finalTotal: '25.75€',
        tax: '1.30€'
    },

    {
        orderNumber: '13432',
        date: '21 mars 2025 à 10:34',
        restaurant: 'RESTO 2',
        items: [
            { name: 'Kebab Choucroute', price: '11.00€' },
            { name: 'Grande frite', price: '3.00€' },
            { name: 'Cola light', price: '2.00€' },
            { name: 'Menu enfant', price: '5.00€' },
            { name: 'Kebab', price: '8.00€' },
            { name: 'Petite frite', price: '1.50€' },
            { name: 'Carola', price: '2.00€' },
            { name: 'Elzas Cola', price: '3.00€' }
        ],
        total: '43.50€',
        discount: '-21.75€ (50%)',
        shipping: '4.00€',
        finalTotal: '25.75€',
        tax: '1.30€'
    },

    {
        orderNumber: '13332',
        date: '20 mars 2025 à 18:55',
        restaurant: 'RESTO 2',
        items: [
            { name: 'Kebab Choucroute', price: '11.00€' },
            { name: 'Grande frite', price: '3.00€' },
            { name: 'Cola light', price: '2.00€' },
            { name: 'Menu enfant', price: '5.00€' },
            { name: 'Kebab', price: '8.00€' },
            { name: 'Petite frite', price: '1.50€' },
            { name: 'Carola', price: '2.00€' },
            { name: 'Elzas Cola', price: '3.00€' }
        ],
        total: '43.50€',
        discount: '-21.75€ (50%)',
        shipping: '4.00€',
        finalTotal: '25.75€',
        tax: '1.30€'
    },

    {
        orderNumber: '10432',
        date: '18 mars 2025 à 19:05',
        restaurant: 'RESTO 2',
        items: [
            { name: 'Kebab Choucroute', price: '11.00€' },
            { name: 'Grande frite', price: '3.00€' },
            { name: 'Cola light', price: '2.00€' },
            { name: 'Menu enfant', price: '5.00€' },
            { name: 'Kebab', price: '8.00€' },
            { name: 'Petite frite', price: '1.50€' },
            { name: 'Carola', price: '2.00€' },
            { name: 'Elzas Cola', price: '3.00€' }
        ],
        total: '43.50€',
        discount: '-21.75€ (50%)',
        shipping: '4.00€',
        finalTotal: '25.75€',
        tax: '1.30€'
    },
    // Add more orders as needed
];

function createOrderCard(order) {
    const { orderNumber, date, restaurant, items, total, discount, shipping, finalTotal, tax } = order;
    
    const card = document.createElement('div');
    card.classList.add('p-6', 'bg-gray-100/95', 'rounded-4xl', 'shadow-md');

    const orderDetails = `
        <div class="p-2 bg-gray-100 flex flex-col">
            <div class="py-4 px-4">
                <div class="flex flex-col space-y-2">
                    <h1 class="text-3xl">${orderNumber}</h1>
                    <p class="text-base text-gray-600">${date}</p>
                </div>
                <div class="mt-10 flex flex-col space-y-4">
                    <div class="flex flex-col bg-gray-50 px-4 py-4">
                        <p class="text-lg">Panier client</p>
                        <div class="mt-4 flex flex-col space-y-4">
                            <h3 class="text-xl">${restaurant}</h3>
                            <div class="flex flex-col space-y-2">
                                ${items.map(item => `
                                    <p class="text-sm text-gray-800"><span class="text-gray-300">${item.name}:</span> ${item.price}</p>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col bg-gray-50 px-4 py-6">
                        <h3 class="text-xl font-semibold text-gray-800">Résumé</h3>
                        <div class="border-b border-gray-200 pb-4 space-y-4">
                            <div class="flex justify-between">
                                <p class="text-base">Total</p>
                                <p class="text-base">${total}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-base">Réduction</p>
                                <p class="text-base">${discount}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-base">Expédition</p>
                                <p class="text-base">${shipping}</p>
                            </div>
                        </div>
                        <div class="flex justify-between font-semibold">
                            <p class="text-base">Total final</p>
                            <p class="text-base">${finalTotal}</p>
                        </div>
                        <div class="flex justify-between font-semibold">
                            <p class="text-base">Dont TVA 5.00%</p>
                            <p class="text-base">${tax}</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="py-5 w-96 bg-gray-800 text-white">Commander à nouveau</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    card.innerHTML = orderDetails;
    return card;
}

function renderOrders() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Clear previous content
    
    const ordersToDisplay = window.innerWidth > 768 ? orders : orders.slice(0, 2); // Show 4 orders on large screens, 2 on mobile
    
    ordersToDisplay.forEach(order => {
        const orderCard = createOrderCard(order);
        cardsContainer.appendChild(orderCard);
    });
}

// Handle "Voir toutes mes commandes" button click
document.getElementById('view-all-orders-btn').addEventListener('click', () => {
    renderOrders(); // Show all orders
    document.getElementById('view-all-orders-btn').style.display = 'none'; // Hide the button
});

// Handle "Télécharger la facture en PDF" button click
document.getElementById('download-btn').addEventListener('click', () => {
    alert('Téléchargement de la facture en PDF...');
    // Logic to generate PDF can be added here (jsPDF library can be used)
});

// Initial render of orders
renderOrders();

/* Information personnel du client */

// Function to handle editing personal info
document.getElementById('edit-personal-info-btn').addEventListener('click', () => {
    const email = prompt("Entrez votre nouvel email:", "bg-67@caramail.com");
    if (email) {
        // Update the email in the table
        const emailCell = document.querySelector("table tr td");
        emailCell.textContent = email;
    }
});

// Function to handle editing billing address
document.getElementById('edit-billing-address-btn').addEventListener('click', () => {
    const billingAddress = prompt("Entrez votre nouvelle adresse de facturation:", "6, rue des Grand hommes, 67000 Strasbourg");
    if (billingAddress) {
        // Update the billing address in the table
        const addressCell = document.querySelector("table tr td");
        addressCell.textContent = billingAddress;
    }
});

// Function to handle editing shipping address
document.getElementById('edit-shipping-address-btn').addEventListener('click', () => {
    const newShippingAddress = prompt("Entrez votre nouvelle adresse de livraison:");
    if (newShippingAddress) {
        // Create a new table row for the new shipping address
        const shippingTable = document.querySelectorAll("table")[1];
        const newRow = document.createElement("tr");
        const newCell = document.createElement("td");
        newCell.classList.add("px-4", "py-2");
        newCell.textContent = newShippingAddress;
        newRow.appendChild(newCell);
        shippingTable.appendChild(newRow);
    }
});

// Function to handle editing a comment on a shipping address
document.querySelectorAll('.edit-comment-btn').forEach(button => {
    button.addEventListener('click', function() {
        const currentComment = this.parentElement.previousElementSibling.textContent;
        const newComment = prompt("Modifiez votre commentaire:", currentComment);
        if (newComment) {
            // Update the comment in the table
            this.parentElement.previousElementSibling.textContent = newComment;
        }
    });
});


/* Information de paiement du client */

// Cibler le bouton "Ajouter une carte"
document.getElementById('add-card-btn').addEventListener('click', function() {
    // Récupérer les valeurs des champs de carte de crédit
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvv = document.getElementById('cvv').value;
    const holderName = document.getElementById('holder-name').value;

    // Effectuer une simple validation (c'est un exemple simple)
    if (cardNumber && expirationDate && cvv && holderName) {
        // Si les informations sont valides, afficher l'alerte
        alert("Tu veux pas 100 balles et un mars ?");

    } else {
        // Sinon, demander à l'utilisateur de remplir tous les champs
        alert("Veuillez remplir tous les champs pour ajouter une carte.");
    }

// Réinitialiser les champs après l'action de modification
document.getElementById('card-number').value = '';
document.getElementById('expiration-date').value = '';
document.getElementById('cvv').value = '';
document.getElementById('holder-name').value = '';

});