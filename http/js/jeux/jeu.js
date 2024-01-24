// Cree par EUSOP Maxence 18/01/2024

// -----------------------------------------------------------------------------

var tableauIdEpreuve = ["jeuGraphe", "jeuAnglais", "jeuC", "jeuJava", "jeuWeb"];

// -----------------------------------------------------------------------------

// Fonction qui met à jour les informations du joueur :
function updateInformationPlayer(){
    if(localStorage.getItem("nomJoueur") == null /*|| localStorage.getItem("prenomJoueur") == null || localStorage.getItem("ageJoueur") == null */){
        window.location.href = "..\\index.html";
    }
    else{
        //document.getElementById("pPrenom").innerHTML = "<b>Prénom : </b>" + getPrenomJoueur();
        document.getElementById("pNom").innerHTML = "<b>Nom : </b>" + getNomJoueur();
        //document.getElementById("pAge").innerHTML = "<b>Age : </b>" + getAgeJoueur() + " ans";
    }
}

// -----------------------------------------------------------------------------

// Fonction qui MAJ le menu des épreuves en cas de réussite :
function updateEpreuveMenu(){
    for(let i = 0; i < tableauIdEpreuve.length; i++){
        var mot = document.getElementById(tableauIdEpreuve[i]);
        if(localStorage.getItem(tableauIdEpreuve[i]) == "true"){
            mot.textContent = "Réussie";
            mot.className ="green-text";
        }
        else{
            mot.textContent = "A faire";
            mot.className = "red-text";
        }
    }
}
