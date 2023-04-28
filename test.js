// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let formulaire = document.querySelector('#formulaire');
let error =  document.querySelector('#small');

// Etape 2 - Cacher l'erreur
error.style.display = "none";


// Etape 3 - Générer un nombre aléatoire entre 0 et 1000
let nombreAleatoire = Math.floor(Math.random() * 1001);


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = "inline";
        error.style.color = "#E74646";
    }
    else {
        error.style.display = "none";
    }
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!isNaN(input.value) && input.value == ""){
        input.style.borderColor = "#E74646"
    }
    else {
        input.style.borderColor = "green";
    }
});

formulaire.addEventListener('click', function() {

    setTimeout(function() {
        input.style.borderColor = "";
      }, 200); // La couleur de fond disparaîtra après 100 millisecondes
})



// Etape 5 - Agir à l'envoi du formulaire

// Etape 6 - Créer la fonction vérifier