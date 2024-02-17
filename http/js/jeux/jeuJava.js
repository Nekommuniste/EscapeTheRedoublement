// Créé par FAUCONNIER Sarah, le 16/02/2024

//------------------Déclarations des variables---------------------

var reponse1 = "Scene scene = new Scene(new Group(), 1200, 300);";
var reponse2 = "scene.setFill(Color.LIGHTGREEN);";
var reponse3 = "root.getChildren().add(new ImageView(new Image('sprite.png')));";
var reponse4 = "imageView.setTranslateX(600); imageView.setTranslateY(150);";
var reponse5 = "new Alert(Alert.AlertType.INFORMATION, 'BRAVO').showAndWait();";
var reset1 = { value: "Bienvenue dans l'épreuve de Java ! On va se concentrer sur Java FX. Essayez d'abord de créer une scène en complétant la ligne de code ci-dessous :" };
var reset2 = { value: "Scene ... = new ...(new Group(), 1200, 300);" };

//-----------------------------------------------------------------

//-----Fonction verificationEpreuve(), qui est la base du jeu------

function verificationEpreuve() {
    var reponseConsole = document.getElementById("console").value.toLowerCase();
    var resultat1 = false;
    var resultat2 = false;
    var resultat3 = false;
    var resultat4 = false;
    var resultat5 = false;

    if (reponseConsole === reponse1.toLowerCase()) {
        resultat1 = true;
    }
    if (reponseConsole === reponse2.toLowerCase()) {
        resultat2 = true; 
    }
    if (reponseConsole === reponse3.toLowerCase()) {
        resultat3 = true;      
    }
    if (reponseConsole === reponse4.toLowerCase()) {
        resultat4 = true;
    }
    if (reponseConsole === reponse5.toLowerCase()) {
        resultat5 = true;
    }

    if (resultat1) {
        document.getElementById("scene").src = "../img/java/frame1.png";
        reset1.value = "Ok, mais la scène est assez morose dans cette couleur... Essayez de la mettre en vert clair en complétant le code ci-dessous :";
        reset2.value = "scene.setFill(...);"
        document.getElementById("dialogue").textContent = reset1.value;
        document.getElementById("console").value = reset2.value;
    } else if (resultat2) {
        document.getElementById("scene").src = "../img/java/frame2.png";
        reset1.value = "Super, mais c'est un peu vide non ? Rajoutons un sprite en complétant cette ligne de code :";
        reset2.value = "root.getChildren().add(new ...(new ...('sprite.png')));";
        document.getElementById("dialogue").textContent = reset1.value;
        document.getElementById("console").value = reset2.value;
    } else if (resultat3) {
        document.getElementById("scene").src = "../img/java/frame3.png";
        reset1.value = "Parfait ! Nous avons notre petit personnage, mais il est dans le coin supérieur gauche de notre scène. Recentrez-le en complétant la ligne de code suivante (pour rappel, la scène fait 1200*300px) :";
        reset2.value = "imageView.setTranslateX(...); imageView.setTranslateY(...);";
        document.getElementById("dialogue").textContent = reset1.value;
        document.getElementById("console").value = reset2.value;
    } else if (resultat4) {
        document.getElementById("scene").src = "../img/java/frame4.png";
        reset1.value = "Très bien ! Pour finir, on voudrait ajouter un message BRAVO. Complétez la ligne de code ci-dessous :";
        reset2.value = "new ...(Alert.AlertType.INFORMATION, 'BRAVO').showAndWait();";
        document.getElementById("dialogue").textContent = reset1.value;
        document.getElementById("console").value = reset2.value;
    } else if (resultat5) {
        document.getElementById("scene").src = "../img/java/frame5.png";
        reset1.value = "Félicitations !";
        reset2.value = "Génial ! Vous avez réussi !";
        document.getElementById("dialogue").textContent = reset1.value;
        document.getElementById("console").value = "Génial ! Vous avez réussi !";
        localStorage.setItem("jeuJava", "true");
        window.location.href = "../pages/jeu.html";
        
    } else {
        document.getElementById("dialogue").textContent = "Ce n'est pas bon, cliquez sur reset pour avoir de nouveau l'énoncé et le code à compléter";
    }
}

function reset(){
    document.getElementById("dialogue").textContent = reset1.value;
    document.getElementById("console").value = reset2.value;
}

