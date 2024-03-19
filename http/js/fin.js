function fin(){
var nomJoueur =  localStorage.getItem("nomJoueur");
var prenomJoueur =  localStorage.getItem("prenomJoueur");
   alert("Felicitations " + prenomJoueur + " " + nomJoueur+"  Tu as termine toutes les epreuves avec brio voici ton diplome.Pour recommencer le jeu clique sur le boutton");
}

function restartGame(){
    localStorage.clear();
    window.location.href = "../pages/index.html";
}
	
