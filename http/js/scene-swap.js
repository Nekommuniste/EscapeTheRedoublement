// document.getElementById("dialogBoxId").textContent = tableauDialog[1]; -> Cette ligne sert pour l'affichage des dialogues en fonction de la page :

function replaceImage(target) {
    // Remplace l'image et la map en fonction de la cible
    if (target === 'un') {
        document.getElementById('image').src = "../img/scenes/EntreeDuBatimentFleche.jpeg";
        document.getElementById('image').useMap = "#EntreeDuBat";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } else if (target === 'deux') {
        document.getElementById('image').src = "../img/scenes/CouloirVuBasFleche.jpeg";
        document.getElementById('image').useMap = "#Choix";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[2];
    } else if (target === 'trois') {
        document.getElementById('image').src = "../img/scenes/CouloirEtage1Fleche.jpeg";
        document.getElementById('image').useMap = "#Couloir";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } else if (target == 'quatre') {
        document.getElementById('image').src = "../img/scenes/Salle.jpeg";
        document.getElementById('image').useMap = "#epreuve1";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } 
     else if (target == 'cinq') {
        document.getElementById('image').src = "../img/scenes/Salle2.jpeg";
        document.getElementById('image').useMap = "#epreuve2";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'six') {
        document.getElementById('image').src = "../img/scenes/HautDesEscaliersFleche.jpeg";
        document.getElementById('image').useMap = "#Haut";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'sept') {
        document.getElementById('image').src = "../img/scenes/CouloirHautFleche.jpeg";
        document.getElementById('image').useMap = "#Etage";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } else if (target == 'huit') {
        document.getElementById('image').src = "../img/scenes/CouloirHaut2Fleche.jpeg";
        document.getElementById('image').useMap = "#CouloirHaut";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'neuf') {
        document.getElementById('image').src = "../img/scenes/CouloirSalle200C200G3Fleche.jpeg";
        document.getElementById('image').useMap = "#PorteTP";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'dix') {
        document.getElementById('image').src = "../img/scenes/Salle3.jpeg";
        document.getElementById('image').useMap = "#Epreuve3";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'onze') {
        document.getElementById('image').src = "../img/scenes/Salle5.jpeg";
        document.getElementById('image').useMap = "#Epreuve4";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'douze') {
        document.getElementById('image').src = "../img/scenes/Salle200C.jpeg";
        document.getElementById('image').useMap = "#epreuve5";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    // Supprime l'événement onclick pour éviter la répétition
    document.getElementById('image').onclick = null;
}