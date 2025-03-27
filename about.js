const form = document.querySelector("#form");
const forename = document.querySelector("#forename");
const alert = document.querySelector(".alertDisplay");
const alertText = document.querySelector("#textDisplay");

form.onsubmit = function (event) {
    event.preventDefault();
    alert.classList.remove("hidden");
    alertText.innerHTML = "Merci " + forename.value + ", votre message a bien été transmis à l'équipe !"
};
