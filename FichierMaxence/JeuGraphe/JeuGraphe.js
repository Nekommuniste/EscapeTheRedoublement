function reponseChecked(radioName){
    var recuperationReponse = document.getElementsByName(radioName);
    for(var i = 0; i < recuperationReponse.length; i++){
        if(recuperationReponse[i].checked){
            return recuperationReponse[i].value;
        }
    }
}

function after(){
    document.querySelector(".boxOverall").style.display = "none";
    document.querySelector("img").style.filter ="none";
}

var compteur = 0;

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
        after();
    }
    else{
        alert("Recommence");
    }
}