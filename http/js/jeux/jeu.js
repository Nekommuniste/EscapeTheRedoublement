// Cree par EUSOP Maxence 18/01/2024 + CARTIERE Matthieu 2/02/2024

window.onload = buttonStatu;
// -----------------------------------------------------------------------------

var tableauIdEpreuve = ["jeuGraphe", "jeuAnglais", "jeuC", "jeuJava", "jeuWeb"];
var tabStatuEpreuve = ["jeuGrapheBtn", "jeuAnglaisBtn", "jeuCBtn", "jeuJavaBtn", "jeuWebBtn"];
var compteur = 0;

// -----------------------------------------------------------------------------

// Fonction qui met à jour les informations du joueur :
function updateInformationPlayer(){
    if(localStorage.getItem("nomJoueur") == null || localStorage.getItem("prenomJoueur") == null || localStorage.getItem("ageJoueur") == null){
        window.location.href = "../pages/index.html";
    }
    else{
        document.getElementById("pPrenom").innerHTML = "<b>Prénom : </b>" + getPrenomJoueur();
        document.getElementById("pNom").innerHTML = "<b>Nom : </b>" + getNomJoueur();
        document.getElementById("pAge").innerHTML = "<b>Age : </b>" + getAgeJoueur() + " ans";
    }
}

// -----------------------------------------------------------------------------

// Fonction qui MAJ le menu des épreuves en cas de réussite :
function updateEpreuveMenu(){
    for(let i = 0; i < tableauIdEpreuve.length; i++){
        var mot = document.getElementById(tableauIdEpreuve[i]);
        if(localStorage.getItem(tableauIdEpreuve[i]) == "true"){
            compteur++;
            mot.textContent = "Validé";
            mot.className ="green-text";
        }
        else{
            mot.textContent = "A faire";
            mot.className = "red-text";
        }
    }
}

// -----------------------------------------------------------------------------

// Fonction qui remet le jeu à zéro :
function restartGame(reset){
    if (reset)
        localStorage.clear();
    window.location.href = "../pages/index.html";
}

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

// Fonction qui affiche/désafiche le dialogue pour quitter
function dispLeaveBox(show){
    var box = document.getElementById("leave-box");
    if(show){
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
// -----------------------------------------------------------------------------

// Fonction qui permet de revenir à la page de jeu
function goBack(){
    window.location.href = "../pages/jeu.html";
}
// -----------------------------------------------------------------------------


// Fonction qui mets à jour les status des boutons d'épreuves
function buttonStatu(){
    for (let i = 0; i < tabStatuEpreuve.length; i++){
        var btn = document.getElementById(tabStatuEpreuve[i]);
        if (localStorage.getItem(tabStatuEpreuve[i]) == "true"){
            btn.disabled = false;
            btn.innerText = "Commencer";
            btn.addEventListener("click", () => {
                window.location.href= "../pages/" + tableauIdEpreuve[i] + ".html";
            });
        } else {
            btn.style.color = "grey";
            btn.style.cursor = "default";
            btn.disabled = true;
        }
    }
}