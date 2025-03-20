const form = document.querySelector("#form");
const forename = document.querySelector("#forename");

form.onsubmit = function (event) {
    event.preventDefault();
    alert("Merci " + forename.value + ", votre message a été envoyé !");
};
