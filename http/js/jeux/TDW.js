const questions = [
    {
        question: "Quelle est la balise pour creer un corps sur une page HTML ?",
        reponses: ["body", "Head", "img ", "HTML"],
        reponseCorrecte: "body"
    },
    {
        question: "Quelle est le nom du langage qui est plus compact que le JS en HTML ?",
        reponses: ["Javascript", "Python", "Jquery", "Json"],
        reponseCorrecte: "Jquery"
    },
    {
        question: "Comment appelle-t-on une image en HTML ?",
        reponses: ["<img src='Nom de l'image'> ", "<link rel='stylesheet' href='Nom de l'image ' />", "<img></img>", "<script></script>"],
        reponseCorrecte: "<img src='Nom de l'image'> "
    },
    {
        question: "En CSS avec quelle 'fonction' la police d'écriture est-elle modifiable?",
        reponses: ["Font-size", "policy", "fontcolor", "font-family"],
        reponseCorrecte: "font-family"
    },
    {
        question: "Est-il possible de directement coder en JS et en CSS dans un code d'une Page HTML ?",
        reponses: ["Oui", "Non"],
        reponseCorrecte: "Oui"
    },
    {
        question: "En JS quelle est la commande qui permettrait d'ajouter une classe Question à une constante test par exemple?",
        reponses: ["Class.add(test).question", "C'est impossible en JS ", "test.classList.add('Question');", "test.class.add('Question');"],
        reponseCorrecte: "test.classList.add('Question');"
    },
];

let score = 0; // Initialisation du score
let indexQuestionActuelle = 0;

const boxAllQuestions = document.getElementById("boxAllQuestions");

function creerQuestion(question) {
    const boxQuestion = document.createElement("div");
    boxQuestion.classList.add("boxQuestion");

    const questionParagraphe = document.createElement("p");
    questionParagraphe.textContent = question.question;

    const reponsesDiv = document.createElement("div");
    reponsesDiv.classList.add("reponses");

    question.reponses.forEach(reponse => {
        const reponseBoutton = document.createElement("button");
        reponseBoutton.classList.add("reponse-button");
        reponseBoutton.textContent = reponse;
        reponseBoutton.addEventListener('click', () => evaluerReponse(reponse));
        reponsesDiv.appendChild(reponseBoutton);
    });

    boxQuestion.appendChild(questionParagraphe);
    boxQuestion.appendChild(reponsesDiv);

    return boxQuestion;
}

function afficherQuestion() {
    if (indexQuestionActuelle < questions.length) {
        const question = questions[indexQuestionActuelle];
        const questionElement = creerQuestion(question);
        boxAllQuestions.innerHTML = '';
        boxAllQuestions.appendChild(questionElement);
    } else {
        if (score === questions.length) {
            alert(`Felicitations ! Vous avez repondu correctement a toutes les questions. Votre score est de ${score}/${questions.length}`);
			localStorage.setItem("jeuWEB", "true");
			window.location.href = "../pages/jeu.html";
        } else {
            alert(`Vous avez termine le jeu. Votre score est de ${score}/${questions.length} recommence pour un score parfait`);
			indexQuestionActuelle=0;
			afficherQuestion();
        }
        score = 0;
        indexQuestionActuelle = 0;
    }
}

function evaluerReponse(reponseUtilisateur) {
    const question = questions[indexQuestionActuelle];
    if (reponseUtilisateur === question.reponseCorrecte) {
        alert("Bonne reponse !");
        score++;
    } else {
        alert("Mauvaise reponse.");
    }

    indexQuestionActuelle++;
    afficherQuestion();
}

// Afficher la première question
afficherQuestion();
