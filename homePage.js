// Cree par EUSOP Maxence 18/01/2024

// -----------------------------------------------------------------------------

// Fonction qui enregistre le nom du joueur :
function setNomJoueur(nomJoueur){
    localStorage.setItem("nomJoueur", nomJoueur);
    return;
}

// Fonction qui donne le nom du joueur :
function getNomJoueur(){
    return localStorage.getItem("nomJoueur");
}

// -----------------------------------------------------------------------------

// Fonction qui enregistre le prenom du joueur :
function setPrenomJoueur(prenomJoueur){
    localStorage.setItem("prenomJoueur", prenomJoueur);
    return;
}

// Fonction qui donne le prenom du joueur :
function getPrenomJoueur(){
    return localStorage.getItem("prenomJoueur");
}

// -----------------------------------------------------------------------------

// Fonction qui enregistre l'age du joueur :
function setAgeJoueur(ageJoueur){
    localStorage.setItem("ageJoueur", ageJoueur);
    return;
}

// Fonction qui donne l'age du joueur :
function getAgeJoueur(){
    return localStorage.getItem("ageJoueur");
}

// -----------------------------------------------------------------------------

// Fonction qui verifie l'entree des donnees dans les inputs :
function verifieValeurInput(idInput){
    var inputVerif = document.getElementById(idInput).value;
    if(inputVerif.trim() != ""){
        console.log("La valeur de l'input (" + idInput + ") est bonne.");
        return true;
    }
    else{
        alert("Veuillez saisir quelque chose de valide.");
        return false;
    }
}

// -----------------------------------------------------------------------------

// Fonction qui lance le jeu :
function lancerJeu(){
    var nom = document.getElementById("nomJoueur").value;
    //var prenom = document.getElementById("prenomJoueur").value;
    //var age = document.getElementById("ageJoueur").value;
    if(verifieValeurInput("nomJoueur") == true /*&& document.getElementById("ageJoueur") == true && document.getElementById("prenomJoueur") == true*/){
        setNomJoueur(nom);
        window.location.href = "../Projet/jeu.html";
    }
    else{
        return;
    }
}

// -----------------------------------------------------------------------------

// Fonction qui charge les donnees deja existantes :
function update(){
    if(localStorage.getItem("nomJoueur")){
        document.getElementById("nomJoueur").value = localStorage.getItem("nomJoueur");
        document.getElementById("nomJoueur").disabled = true;
    }
    //(localStorage.getItem("prenomJoueur")){
    //    document.getElementById("prenomJoueur").value = localStorage.getItem("prenomJoueur");
    //    document.getElementById("prenomJoueur").disabled = true;
    //}
    //if(localStorage.getItem("ageJoueur")){
    //    document.getElementById("ageJoueur").value = localStorage.getItem("ageJoueur");
    //    document.getElementById("ageJoueur").disabled = true;
    //}
    return;
}

// -----------------------------------------------------------------------------

// Fonction qui supprime toutes les donnees :
function supprimerLocalStorage(){
    localStorage.clear();
    document.getElementById("nomJoueur").disabled = false;
    document.getElementById("nomJoueur").value = "";
    //document.getElementById("prenomJoueur").disabled = false;
    //document.getElementById("prenomJoueur").value = "";
    //document.getElementById("ageJoueur").disabled = false;
    //document.getElementById("ageJoueur").value = "";
    return;
}