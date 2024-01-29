// Cree par EUSOP Maxence 17/01/2024

// -----------------------------------------------------------------------------

var compteur = 0;

// -----------------------------------------------------------------------------

// Fonction qui verifie si une reponse est cochée :
function reponseChecked(radioName){
    var recuperationReponse = document.getElementsByName(radioName);
    for(var i = 0; i < recuperationReponse.length; i++){
        if(recuperationReponse[i].checked){
            return recuperationReponse[i].value;
        }
    }
}

// -----------------------------------------------------------------------------

// Fonction qui ajoute une couleur en fonction de la réponse du joueur, de plus en cas de victoire le jeu s'arrete :
function verificationReponse(){
    var questions = [reponseChecked("Reponse1"), reponseChecked("Reponse2"), reponseChecked("Reponse3"), reponseChecked("Reponse4")];
    for(var i = 0; i < questions.length; i++){
        if(questions[i] == 'true'){
            if(i == 0){
                document.getElementById("boxQuestion1").style.background = "green";
            }
            if(i == 1){
                document.getElementById("boxQuestion2").style.background = "green";
            }
            if(i == 2){
                document.getElementById("boxQuestion3").style.background = "green";
            }
            if(i == 3){
                document.getElementById("boxQuestion4").style.background = "green";
            }
        }
        else{
            if(i == 0){
                document.getElementById("boxQuestion1").style.background = "red";
            }
            if(i == 1){
                document.getElementById("boxQuestion2").style.background = "red";
            }
            if(i == 2){
                document.getElementById("boxQuestion3").style.background = "red";
            }
            if(i == 3){
                document.getElementById("boxQuestion4").style.background = "red";
            }
        }
    }
    compteur = compteur + 1;
    if(questions[0] == 'true' && questions[1] == 'true' && questions[2] == 'true' && questions[3] == 'true'){
        alert("Bien joué tu as répondu correctement à toutes les questions en " + compteur + " essais !");
        localStorage.setItem("jeuGraphe", "true");
        window.location.href = "../pages/jeu.html";
    }
    else{
        alert("Recommence");
    }
}
