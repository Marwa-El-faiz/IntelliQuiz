const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Tech Modern Language", correct: false },
      { text: "Hyper Transfer Mark Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false },
    ],
  },
  {
    question: "Which property is used in CSS to change text color?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "background-color", correct: false },
    ],
  },
  {
    question: "Which language is used to add interactivity to a website?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: true },
      { text: "SQL", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    answers: [
      { text: "<h6>", correct: false },
      { text: "<heading>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<head>", correct: false },
    ],
  },
  {
    question: "Which CSS property controls the size of text?",
    answers: [
      { text: "text-size", correct: false },
      { text: "font-size", correct: true },
      { text: "size", correct: false },
      { text: "font-style", correct: false },
    ],
  },
  {
    question: "Inside which HTML tag do we put JavaScript?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<code>", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false },
      { text: "**", correct: false },
    ],
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: [
      { text: "class", correct: false },
      { text: "style", correct: true },
      { text: "font", correct: false },
      { text: "styles", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to change background color?",
    answers: [
      { text: "bgcolor", correct: false },
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "background-style", correct: false },
    ],
  },
  {
    question: "How do you write 'Hello' in an alert box in JavaScript?",
    answers: [
      { text: "msg('Hello')", correct: false },
      { text: "alert('Hello')", correct: true },
      { text: "alertBox('Hello')", correct: false },
      { text: "msgBox('Hello')", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to display images?",
    answers: [
      { text: "<image>", correct: false },
      { text: "<img>", correct: true },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false },
    ],
  },
  {
    question: "Which CSS property is used for spacing inside elements?",
    answers: [
      { text: "margin", correct: false },
      { text: "padding", correct: true },
      { text: "spacing", correct: false },
      { text: "border", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "int", correct: false },
      { text: "string", correct: false },
      { text: "declare", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to create a list?",
    answers: [
      { text: "<list>", correct: false },
      { text: "<ul>", correct: true },
      { text: "<li>", correct: false },
      { text: "<ol-item>", correct: false },
    ],
  },
  {
    question: "Which CSS property controls the width of an element?",
    answers: [
      { text: "size", correct: false },
      { text: "width", correct: true },
      { text: "length", correct: false },
      { text: "w", correct: false },
    ],
  },
  {
    question: "How do you write a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true },
      { text: "def myFunction()", correct: false },
      { text: "func myFunction()", correct: false },
      { text: "create myFunction()", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used for paragraphs?",
    answers: [
      { text: "<p>", correct: true },
      { text: "<para>", correct: false },
      { text: "<text>", correct: false },
      { text: "<pg>", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to make text bold?",
    answers: [
      { text: "font-weight", correct: true },
      { text: "text-bold", correct: false },
      { text: "bold", correct: false },
      { text: "font-style", correct: false },
    ],
  },
  {
    question: "Which JavaScript method is used to select an element by ID?",
    answers: [
      { text: "getElementById()", correct: true },
      { text: "querySelectorAll()", correct: false },
      { text: "getElements()", correct: false },
      { text: "selectById()", correct: false },
    ],
  },
];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;


startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz); 
function startQuiz() {
  
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}
function showQuestion() {
  
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}