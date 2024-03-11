// Créé par Esteban, modifié par Sarah le 15/02/2024 (implémentations des sons)
var pourcentagesZones = [
    "9.90%,50.92%,42.86%,38%",
    "16.45%,23.9%,61.7%,71.6%",
    "0%,77.5%,100%,100%",
    "29.63%,17%%,50.2%,56%",
    "55%,21.5%,70.8%,54.9%",
    "0%,77.5%,100%,100%",
	"38.68%,26.25%,42.8%,56.08%",
	"56.8%,33.4%,58.84%,51.31%",
	"26.7%,32.2%,69.55%,50.37%",
	"92.2%,33.41%,100%,72.8%",
	"53.5%,32.8%,92.2%,51.1%",
	"0%,77.5%,100%,100%",
	"0%,77.5%,100%,100%",
	"18.1%,29.23%,51.44%,54.3%",
	"74.9%,38.8%,97.1%,80%",
	"32.1%,26.85%,57.61%,71.6%",
	"0.5%,27%,8%,82%",
	"0%,77.5%,100%,100%",
	"73.6%,25.08%,82.71%,100%",
	"24.7%,26.9%,70.8%,46.8%",
	"21%,29.23%,28.8%,53%",
	"78.2%,48.9%,87.25%,52%",
	"26.7%,32.2%,69.55%,50.37%",
	"92.2%,33.41%,100%,72.8%",
	"0%,77.5%,100%,100%",
	"58.02%,28.04%,83.5%,76.37%",
	"0%,77.5%,100%,100%",
	"21.4%,43.56%,81.5%,56.1%"
];
// Déclarations des bruits de pas et de porte :
var SonPas = document.createElement("audio");
SonPas.src = "../sons/pas.wav";
var SonPorte= document.createElement("audio");
SonPorte.src = "../sons/porte.wav";
//SonPorte.play(); SonPas.play(); pour que les sons se jouent
// document.getElementById("dialogBoxId").textContent = tableauDialog[1]; -> Cette ligne sert pour l'affichage des dialogues en fonction de la page :

function replaceImage(target) {
    // Remplace l'image et la map en fonction de la cible
    if (target === 'deux') {
        document.getElementById('image').src = "../img/scenes/EntreeDuBatimentFleche.jpeg";
        document.getElementById('image').useMap = "#EntreeDuBat";
        document.getElementById("dialogBoxId").textContent = tableauDialog[1];
        localStorage.setItem("position", "deux");
        SonPas.play();
    } else if (target === 'trois') {
        document.getElementById('image').src = "../img/scenes/CouloirVuBasFleche.jpeg";
        document.getElementById('image').useMap = "#Choix";
        document.getElementById("dialogBoxId").textContent = tableauDialog[2];
        localStorage.setItem("position", "trois");
        SonPas.play();
        SonPorte.play();
        /* Tests pour les sons de pas et de porte
        SonPorte.addEventListener("ended", function() {
            console.log("Le son de porte s'est joué.");
        });
        SonPas.addEventListener("ended", function() {
            console.log("Le son de pas s'est joué.");
        });*/
    } else if (target === 'quatre') {
        document.getElementById('image').src = "../img/scenes/CouloirEtage1Fleche.jpeg";
        document.getElementById('image').useMap = "#Couloir";
        document.getElementById("dialogBoxId").textContent = tableauDialog[3];
        localStorage.setItem("position", "quatre");
        SonPas.play();
    } else if (target == 'cinq') {
        document.getElementById('image').src = "../img/scenes/SalleFleche.jpeg";
        document.getElementById('image').useMap = "#epreuve1";
        document.getElementById("dialogBoxId").textContent = tableauDialog[12];
        localStorage.setItem("position", "cinq");
        SonPas.play();
        SonPorte.play();
    } 
     else if (target == 'six') {
        document.getElementById('image').src = "../img/scenes/Salle2Fleche.jpeg";
        document.getElementById('image').useMap = "#epreuve2";
        document.getElementById("dialogBoxId").textContent = tableauDialog[11];
        localStorage.setItem("position", "six");
        SonPas.play();
        SonPorte.play();
    }
    else if (target == 'sept') {
        document.getElementById('image').src = "../img/scenes/HautDesEscaliersFleche.jpeg";
        document.getElementById('image').useMap = "#Haut";
        document.getElementById("dialogBoxId").textContent = tableauDialog[4];
        localStorage.setItem("position", "sept");
        SonPas.play();
    }
    else if (target == 'huit') {
        document.getElementById('image').src = "../img/scenes/CouloirHautFleche.jpeg";
        document.getElementById('image').useMap = "#Etage";
        document.getElementById("dialogBoxId").textContent = tableauDialog[5];
        localStorage.setItem("position", "huit");
        SonPas.play();
    } else if (target == 'neuf') {
        document.getElementById('image').src = "../img/scenes/CouloirHaut2Fleche.jpeg";
        document.getElementById('image').useMap = "#CouloirHaut";
        document.getElementById("dialogBoxId").textContent = tableauDialog[7];
        localStorage.setItem("position", "neuf");
        SonPas.play();
    }
    else if (target == 'dix') {
        document.getElementById('image').src = "../img/scenes/CouloirSalle200C200G2Fleche.jpeg";
        document.getElementById('image').useMap = "#PorteTP";
        document.getElementById("dialogBoxId").textContent = tableauDialog[6];
        localStorage.setItem("position", "dix");
        SonPas.play();
    }
    else if (target == 'onze') {
        document.getElementById('image').src = "../img/scenes/Salle3Fleche.jpeg";
        document.getElementById('image').useMap = "#Epreuve3";
        document.getElementById("dialogBoxId").textContent = tableauDialog[8];
        localStorage.setItem("position", "onze");
        SonPas.play();
        SonPorte.play();
    }
    else if (target == 'douze') {
        document.getElementById('image').src = "../img/scenes/Salle5Fleche.jpeg";
        document.getElementById('image').useMap = "#Epreuve4";
        document.getElementById("dialogBoxId").textContent = tableauDialog[9];
        localStorage.setItem("position", "douze");
        SonPas.play();
        SonPorte.play();
    }
    else if (target == 'treize') {
        document.getElementById('image').src = "../img/scenes/Salle200CFleche.jpeg";
        document.getElementById('image').useMap = "#epreuve5";
        document.getElementById("dialogBoxId").textContent = tableauDialog[10];
        localStorage.setItem("position", "treize");
        SonPas.play();
        SonPorte.play();
    }
    // Supprime l'événement onclick pour éviter la répétition
    document.getElementById('image').onclick = null;
}
function creerZonesCliquables() {
    var imageWidth = document.querySelector('.center img').offsetWidth;
    var imageHeight = document.querySelector('.center img').offsetHeight;
    var areas = document.querySelectorAll('area');

    pourcentagesZones.forEach(function(pourcentage, index) {
        var coordsEnPourcentage = pourcentage.split(',');

        var coordsEnPixels = coordsEnPourcentage.map(function(coord, index) {
            if (index % 2 === 0) {
                return (parseFloat(coord) / 100) * imageWidth;
            } else {
                return (parseFloat(coord) / 100) * imageHeight;
            }
        });

        areas[index].coords = coordsEnPixels.join(',');
    });
}

// Appel de la fonction pour créer les zones cliquables au chargement de la page
window.onload = creerZonesCliquables;

