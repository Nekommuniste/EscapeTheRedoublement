var Question = function (questionObj) {
  this.value = {
    text: "Question",
    answers: []
  };

  this.selectedAnswer = null;
  this.html = null;
  this.questionText = null;
  this.questionAnswers = null;
  this.questionFeedback = null;

  this.value = Object.assign(this.value, questionObj);

  this.onQuestionAnswered = ({ detail }) => {
    this.selectedAnswer = {
      value: detail.answer,
      html: detail.answerHtml
    };
    this.update();

    document.dispatchEvent(
      new CustomEvent("question-answered", {
        detail: {
          question: this,
          answer: detail.answer
        }
      })
    );
  };

  this.create = function () {
    this.html = document.createElement("div");
    this.html.classList.add("question");

    this.questionText = document.createElement("h2");
    this.questionText.textContent = this.value.text;

    this.questionAnswers = document.createElement("div");
    this.questionAnswers.classList.add("answers");

    for (let i = 0; i < this.value.answers.length; i++) {
      const ansObj = this.value.answers[i];
      let answer = createAnswer(ansObj);

      answer.onclick = (ev) => {
        if (this.selectedAnswer !== null) {
          this.selectedAnswer.html.classList.remove("selected");
        }

        answer.classList.add("selected");

        this.html.dispatchEvent(
          new CustomEvent("question-answered", {
            detail: {
              answer: ansObj,
              answerHtml: answer
            }
          })
        );
      };

      this.questionAnswers.appendChild(answer);
    }

    this.questionFeedback = document.createElement("div");
    this.questionFeedback.classList.add("question-feedback");

    this.html.appendChild(this.questionText);
    this.html.appendChild(this.questionAnswers);
    this.html.appendChild(this.questionFeedback);

    this.html.addEventListener("question-answered", this.onQuestionAnswered);

    return this.html;
  };

  this.disable = function () {
    this.html.classList.add("disabled");
    this.html.onclick = (ev) => {
      ev.stopPropagation();
    };

    this.html.removeEventListener("question-answered", this.onQuestionAnswered);

    let answers = this.html.querySelectorAll(".answer");
    for (let i = 0; i < answers.length; i++) {
      let answer = answers[i];
      answer.onclick = null;
    }
  };

  this.remove = function () {
    let children = this.html.querySelectorAll("*");
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      this.html.removeChild(child);
    }

    this.html.removeEventListener("question-answered", this.onQuestionAnswered);

    this.html.parentNode.removeChild(this.html);
    this.html = null;
  };

  this.update = function () {
    let correctFeedback, incorrectFeedback;
    this.html = this.html || document.createElement("div");

    correctFeedback = "Tu as eu bon .";
    incorrectFeedback = "Tu as eu faux .";

    if (this.selectedAnswer !== null) {
      if (this.selectedAnswer.value.isCorrect) {
        this.html.classList.add("correct");
        this.html.classList.remove("incorrect");
        this.questionFeedback.innerHTML = correctFeedback;
      } else {
        this.html.classList.add("incorrect");
        this.html.classList.remove("correct");
        this.questionFeedback.innerHTML = incorrectFeedback;
      }
    }
  };

  function createAnswer(obj) {
    this.value = {
      text: "Answer",
      isCorrect: false
    };

    this.value = Object.assign(this.value, obj);

    this.html = document.createElement("button");
    this.html.classList.add("answer");

    this.html.textContent = this.value.text;

    return this.html;
  }
};

let questionsData = [
  {
    text: "Quel est la methode en CSS pour changer la police d'ecriture ",
    answers: [
      {
        text: "font-family",
        isCorrect: true
      },
      {
        text: "justify-content",
        isCorrect: false
      },
      {
        text: "css-policy",
        isCorrect: false
      },
	  {
        text: "heigth",
        isCorrect: false
      }
    ]
  },
  {
    text: "Quelle est la balise du corps de la page HTML",
    answers: [
      {
        text: "body",
        isCorrect: false
      },
      {
        text: "<html></html>",
        isCorrect: false
      },
      {
        text: "<body></body>",
        isCorrect: true
      },
      {
        text: "<head></head>",
        isCorrect: false
      }
    ]
  },
  {
    text: "Un CSS sert avant tout :",
    answers: [
      {
        text: "a creer des fonctions pour la page HTML ",
        isCorrect: false
      },
      {
        text: 'A creer la page web',
        isCorrect: false
      },
      {
        text: "A donner un style a la page web",
        isCorrect: true
      },
	  {
        text: "A heberger le serveur de la page web",
        isCorrect: false
      }
    ]
  },
  {
    text: "j'ai un script js qui s'apelle main.js comment je le lie a la page web ?",
    answers: [
      {
        text: "  <script src='main.js'></script>",
        isCorrect: true
      },
      {
        text: "<script src='lib.js'></script>",
        isCorrect: false
      },
      {
        text: "<h2 id='main.js'>Epreuve</h2>",
        isCorrect: false
      },
      {
        text: "on le met directement dans la page web ",
        isCorrect: false
      }
    ]
  },
  {
    text: "Qu'est ce que le Jqwery ",
    answers: [
      {
        text: "C'est une version simplifie du Javascript pour HTML",
        isCorrect: true
      },
      {
        text: "Une extension HTML pour coder en C",
        isCorrect: false
      },
      {
        text: "Ca n'existe pas pour le HTML",
        isCorrect: false
      },
      {
        text: "C'est un systeme de langage qui condense le HTML le CSS et le JS",
        isCorrect: false
      },
    ]
  },
  {
    text: "Quelle note pour ce SUPERBE projet ",
    answers: [
      {
        text: "20",
        isCorrect: true
      },
      {
        text: "20",
        isCorrect: true
      },
      {
        text: "20",
        isCorrect: true
      },
      {
        text: "20",
        isCorrect: true
      }
	  ]
  }
];

/**
 * Shuffles array in place. ES6 version
 * @param {Array} arr items An array containing the items.
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function startQuiz() {
  // variables initialization
  let questions = [];
  let score = 0,
    answeredQuestions = 0;
  let appContainer = document.getElementById("questions");
  let scoreContainer = document.getElementById("score");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
  // Clear previous questions
  appContainer.innerHTML = '';

  shuffle(questionsData);

  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });

    appContainer.appendChild(question.create());
    questions.push(question);
  }

  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }

    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();

    if (answeredQuestions == questions.length) {
      setTimeout(function () {
        if (score == questions.length) {
          alert(`Congratulations! You got a perfect score: ${score}/${questions.length}`);
		  localStorage.setItem("jeuTDW", "true");
        window.location.href = "../pages/jeu.html";
        } else {
          alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
          startQuiz(); // Restart the quiz
        }
      }, 100);
    }
  });
}

startQuiz(); // Start the quiz initially

