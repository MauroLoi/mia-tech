
const $nome = document.querySelector("#nome");
const $cognome = document.querySelector("#cognome");
const $form = document.querySelector("#form");


$form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = $nome.value;
    const cognome = $cognome.value;

    if (nome === "" || cognome === "") {
        alert("Compila tutti i campi.");
    } else {
        alert("Form inviato con successo!");
    }
});




