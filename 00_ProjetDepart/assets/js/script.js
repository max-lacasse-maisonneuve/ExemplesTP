/**
 * Le jeu de
 * @autor : Écrire votre nom ici
 */

//Variables globales
//Titre, nombre de points de vie, temps etc

//Sélection HTML
const oPanneauIntroHTML = document.querySelector("#introduction");
const oPanneauJeuHTML = document.querySelector("#jeu");
const oBoutonDemarrerHTML = document.querySelector("#bouton-demarrer");

/**
 * Initialisation du jeu. Fonction appelée au chargement de la page
 * On ajoute les écouteurs d'événement de la page, on charge des images, etc
 */
function initialisation() {
    //Le CSS contient une classe "invisible" qui sert à cacher des éléments
    oBoutonDemarrerHTML.classList.remove("invisible");
    oBoutonDemarrerHTML.addEventListener("click", afficherJeu);

    afficherIntro();
}

/**
 * Affiche l'écran d'introduction et démarre l'animation du titre
 */
function afficherIntro() {
    oPanneauIntroHTML.classList.remove("invisible");
}

/**
 * Affiche l'écran de jeu et démarre le jeu après un délai de 2 secondes
 */
function afficherJeu() {
    oPanneauIntroHTML.classList.add("invisible");
    oPanneauJeuHTML.classList.remove("invisible");
    setTimeout(demarrerJeu, 2000);
}

/**
 * Démarre le jeu
 */
function demarrerJeu() {
    // Tout le code servant au démarrage du jeu devrait être ici
    //Démarrer la musique, afficher les éléments,
    console.log("Le jeu est démarré");
}

//Fonction qui redémarre la page en rechargeant la page
function redemarrerPage() {
    document.location.reload();
}

// Exécution du code au chargement de la page. GARDER À LA FIN
window.addEventListener("load", initialisation);
