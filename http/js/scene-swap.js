// document.getElementById("dialogBoxId").textContent = tableauDialog[1]; -> Cette ligne sert pour l'affichage des dialogues en fonction de la page :

function replaceImage(target) {
    // Remplace l'image et la map en fonction de la cible
    if (target === 'un') {
        document.getElementById('image').src = "../img/scenes/EntreeDuBatiment.jpeg";
        document.getElementById('image').useMap = "#workmap";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } else if (target === 'deux') {
        document.getElementById('image').src = "../img/scenes/EntreeDuBatiment.jpeg";
        document.getElementById('image').useMap = "#entreeDuBatMap";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[2];
    } else if (target === 'trois') {
        document.getElementById('image').src = "../img/scenes/CouloirVuBas.jpeg";
        document.getElementById('image').useMap = "#choixMap";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } else if (target == 'quatre') {
        document.getElementById('image').src = "../img/scenes/couloir.jpg";
        document.getElementById('image').useMap = "#couloir";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } else if (target == 'cinq') {
        document.getElementById('image').src = "../img/scenes/etage.jpg";
        document.getElementById('image').useMap = "#etage";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } else if (target == 'cinq') {
        document.getElementById('image').src = "../img/scenes/etage.jpg";
        document.getElementById('image').useMap = "#etage";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'six') {
        document.getElementById('image').src = "../img/scenes/epreuve1.jpg";
        document.getElementById('image').useMap = "#epreuve";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'sept') {
        document.getElementById('image').src = "../img/scenes/fond.jpg";
        document.getElementById('image').useMap = "#fond";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    } else if (target == 'huit') {
        document.getElementById('image').src = "../img/scenes/epreuve1.jpg";
        document.getElementById('image').useMap = "#epreuve2";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'neuf') {
        document.getElementById('image').src = "../img/scenes/porte-200D.jpg";
        document.getElementById('image').useMap = "#porteD";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'dix') {
        document.getElementById('image').src = "../img/scenes/enfoncement.jpg";
        document.getElementById('image').useMap = "#enfoncement";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'onze') {
        document.getElementById('image').src = "../img/scenes/epreuve3.jpg";
        document.getElementById('image').useMap = "#epreuve3";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'douze') {
        document.getElementById('image').src = "../img/scenes/epreuve3.jpg";
        document.getElementById('image').useMap = "#epreuve4";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'treize') {
        document.getElementById('image').src = "../img/scenes/porte-200G.jpg";
        document.getElementById('image').useMap = "#porteG";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    else if (target == 'quatorze') {
        document.getElementById('image').src = "../img/scenes/epreuve3.jpg";
        document.getElementById('image').useMap = "#epreuve5";
        //document.getElementById("dialogBoxId").textContent = tableauDialog[1];
    }
    // Supprime l'événement onclick pour éviter la répétition
    document.getElementById('image').onclick = null;
}