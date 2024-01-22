function replaceImage(target) {
    // Remplace l'image et la map en fonction de la cible
    if (target === 'un') {
        document.getElementById('image').src = "../img/scenes/test.jpg";
        document.getElementById('image').useMap = "#workmap";
    } else if (target === 'deux') {
        document.getElementById('image').src = "../img/scenes/Entree du bat.png";
        document.getElementById('image').useMap = "#entreeDuBatMap";
    } else if (target === 'trois') {
        document.getElementById('image').src = "../img/scenes/choixescaliercouloir.jpg";
        document.getElementById('image').useMap = "#choixMap";
    } else if (target == 'quatre') {
        document.getElementById('image').src = "../img/scenes/couloir.jpg";
        document.getElementById('image').useMap = "#couloir";
    } else if (target == 'cinq') {
        document.getElementById('image').src = "../img/scenes/etage.jpg";
        document.getElementById('image').useMap = "#etage";
    } else if (target == 'cinq') {
        document.getElementById('image').src = "../img/scenes/etage.jpg";
        document.getElementById('image').useMap = "#etage";
    }
    else if (target == 'six') {
        document.getElementById('image').src = "../img/scenes/epreuve1.jpg";
        document.getElementById('image').useMap = "#epreuve";
    }
    else if (target == 'sept') {
        document.getElementById('image').src = "../img/scenes/fond.jpg";
        document.getElementById('image').useMap = "#fond";
    } else if (target == 'huit') {
        document.getElementById('image').src = "../img/scenes/epreuve1.jpg";
        document.getElementById('image').useMap = "#epreuve2";
    }
    else if (target == 'neuf') {
        document.getElementById('image').src = "../img/scenes/porte-200D.jpg";
        document.getElementById('image').useMap = "#porteD";
    }
    else if (target == 'dix') {
        document.getElementById('image').src = "../img/scenes/enfoncement.jpg";
        document.getElementById('image').useMap = "#enfoncement";
    }
    else if (target == 'onze') {
        document.getElementById('image').src = "../img/scenes/epreuve3.jpg";
        document.getElementById('image').useMap = "#epreuve3";
    }
    else if (target == 'douze') {
        document.getElementById('image').src = "../img/scenes/epreuve3.jpg";
        document.getElementById('image').useMap = "#epreuve4";
    }
    else if (target == 'treize') {
        document.getElementById('image').src = "../img/scenes/porte-200G.jpg";
        document.getElementById('image').useMap = "#porteG";
    }
    else if (target == 'quatorze') {
        document.getElementById('image').src = "../img/scenes/epreuve3.jpg";
        document.getElementById('image').useMap = "#epreuve5";
    }
    // Supprime l'événement onclick pour éviter la répétition
    document.getElementById('image').onclick = null;
}