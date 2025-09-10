const questions = [
  {
    question: "Which one is Tralarelo Tralala",
    answers: [
      { img: "image/q1r.webp", correct: true },
      { img: "image/q1w.webp", correct: false },
      { img: "image/q1w1.webp", correct: false },
      { img: "image/q1w2.webp", correct: false },
    ]
  },
  {
    question: "Which one is Boneca Ambalabu?",
    answers: [
      { img: "image/q2w.webp", correct: false },
      { img: "image/q2r.webp", correct: true },
      { img: "image/q2w1.webp", correct: false },
      { img: "image/Cappucino_assasino.png", correct: false },
    ]
  },
    {
    question: "Which one is Bombombini Gusini?",
    answers: [
      { img: "image/q3w.webp", correct: false },
      { img: "image/q3w1.webp", correct: false },
      { img: "image/q3r.webp", correct: true },
      { img: "image/q3w2.webp", correct: false },
    ]
  },
    {
    question: "Which one is Frigo Camelo?",
    answers: [
      { img: "image/q4w.webp", correct: false },
      { img: "image/Frigo_Camelo.png", correct: true },
      { img: "image/q4w2.jpg", correct: false },
      { img: "image/q3w2.webp", correct: false },
    ]
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("nextbtn");
const resultBox = document.getElementById("result");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;
// Load question function
startQuiz();

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.style.display = "none";
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    let imgTag = button.querySelector("img");
    if (!imgTag) {
      imgTag = document.createElement("img");
      button.appendChild(imgTag);
    }
    imgTag.src = currentQuestion.answers[index].img;
    button.dataset.correct = currentQuestion.answers[index].correct;
    button.onclick = selectAnswer;
    button.classList.remove("correct");
  });
}

function resetState() {
  nextButton.style.display = "none";
}

function selectAnswer(e) {
  const selectedBtn = e.currentTarget;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    score++;
    selectedBtn.classList.add("correct");
  }
  else{
    selectedBtn.classList.add("wrong");
    answerButtons.forEach(btn=>{
        if(btn.dataset.correct == "true"){
            btn.classList.add("correct");
        }
    });
  }
  // disable buttons after answer
  answerButtons.forEach(btn => {
    btn.onclick = null;
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.querySelector(".quizz").style.display="none";
  resultBox.style.display = "block";
  questionElement.innerText = "Quiz Finished!";
  let percentage = Math.round((score/ questions.length)* 100);
  scoreElement.innerText = `${score}/${questions.length}  (${percentage}%)`;
  // Show message based on score
  const message = document.createElement("p");
  if (percentage > 50) {
    message.innerText = "Congratulations! You are smarter than a 5-year-old!";
  } else {
    message.innerText = "Damn, you should go back to elementary school 😅";
  }
  resultBox.appendChild(message);
  nextButton.style.display = "none";
}