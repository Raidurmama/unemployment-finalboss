const questions = [
  {
    question: "Which one is Tralarelo Tralala",
    answers: [
      { img: "https://i.namu.wiki/i/fIriGHQbl1mcC1Z_sKQVFKGB_JXoBAXIgcsNe5R1uLu9HzvKrzZrcUfitTbUodwPyS7H6MWQiIQc_uvi-euWt_62qmxweUb8JJtZsLxnqp0Dp5l--2uUfIAsv_LE_-xhjZmY0chUiP8e0K4gJAN09Q.webp", correct: true },
      { img: "https://i.namu.wiki/i/Udn12ZnencdYP7SW3yWD_co43GiX00WjT4dwbTEQa4KFikUPcBxPKp7v3kP-zs5_8xxAoVP4N9m1YY5uvyBKB2S8Z5t701MLYNi5Gv0UZ08Is_6RYCoXhI5v5om4VrQG1x6AqA4lGXQ-bxg2u_GTEg.webp", correct: false },
      { img: "https://i.namu.wiki/i/NxHjI20gW9FnL3pw-GIU0lH1yvGbQk5_5xj4h_EV5UbPdVb9gNpZZNyRSCaUe1hmoTgtWOo0__kNs10lIrHt-QCqwN1T0xOsKMpL47rfDj4UrYzuSui8IfUaykXhqPUZitXoYryW4URNsLCnjnZ2rg.webp", correct: false },
      { img: "https://i.namu.wiki/i/ov09lyEwlrPyR7iyW0ZEqr7E9Zl_Ew0YmJII1N5lqByDMGfcMMNRanY-S7vlR-8oj71OJm6lTDPW1k8rqmv0dv61GOKVAtRz6Skcb__bRigkuXxDGo0RPlZJwkrTJkB2Da82dhG7vjhQaV433iyUEQ.webp", correct: false },
    ]
  },
  {
    question: "Which one is Boneca Ambalabu?",
    answers: [
      { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cappucino_assasino.webp/576px-Cappucino_assasino.webp.png", correct: false },
      { img: "https://static.wikitide.net/italianbrainrotwiki/thumb/3/3e/Boneka-Ambalabu.png/600px-Boneka-Ambalabu.png", correct: true },
      { img: "https://static.wikitide.net/italianbrainrotwiki/thumb/1/19/Ta_ta_ta_ta_ta_ta_ta_ta_sahur.png/600px-Ta_ta_ta_ta_ta_ta_ta_ta_sahur.png", correct: false },
      { img: "https://static.wikitide.net/italianbrainrotwiki/f/fa/Tung_tung_tung_sahur.png", correct: false },
    ]
  },
    {
    question: "Which one is Bombombini Gusini?",
    answers: [
      { img: "https://i.namu.wiki/i/VtrSfjFBA1lELaRhwqlWj9KcEnrMj08EC7J7N4qq6NIfEF7aGV64VpvIVC8aMze4fCyH31zq1jwOSgQ07Rv4B5-VW-iGXDp6MGa4N9XmIkIKUlGaFZUXNwprWzpw1fBk3-9oPftO8XyikiffgWVCTw.webp", correct: false },
      { img: "https://i.namu.wiki/i/n8nuqjSz_2AD2QQ0Zy46P4avmTbJHtsX9WxDDRGOgdbUCEOWTLI7NoY47KGEwcAjp59iURqjciQPRvg4Vtdmy5nuVxyugKl7IqY-XyaTgcVCT2qeOfe5CTi3nE0ZGXrAsbyDex_WhhqVVVaEu7t-tg.webp", correct: false },
      { img: "https://i.namu.wiki/i/hrQOS2x6MFdhKwKu0Sc1VSHXkpqJx-62Hi9bXWmYiNl-vvXMl3dwoj_ypS9mGUpNf81kLee-5EIzoZwfuyYnDOcPG5C_LCiob5Z_umu6aA6Tfv7WvFHR7dX3jJgGYmwQL9tLsfYUYk6qvIDXZKXqWA.webp", correct: true },
      { img: "https://i.namu.wiki/i/jOjHButEasgoXEvJnjevDk5XPz_BJ2V0jWwZrCeSotCPDTQkpv__677dyb36KzUYTyu68UO6JgYhkLDco1vtsvr59VGFhsJZhPyzpnEhY4JzsGL6B0577Pq95ghySULACRU6Hg2tRu9FEnMlVoTBnA.webp", correct: false },
    ]
  },
    {
    question: "Which one is Frigo Camelo?",
    answers: [
      { img: "https://preview.redd.it/drop-your-favourite-italian-brainrot-v0-am5xkfg0t7xe1.png?width=640&crop=smart&auto=webp&s=e38f428b16790069cc248461df71b07853fdea78", correct: false },
      { img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Frigo_Camelo.png", correct: true },
      { img: "https://ih1.redbubble.net/image.5818673541.5798/flat,750x,075,f-pad,750x1000,f8f8f8.jpg", correct: false },
      { img: "https://i.namu.wiki/i/jOjHButEasgoXEvJnjevDk5XPz_BJ2V0jWwZrCeSotCPDTQkpv__677dyb36KzUYTyu68UO6JgYhkLDco1vtsvr59VGFhsJZhPyzpnEhY4JzsGL6B0577Pq95ghySULACRU6Hg2tRu9FEnMlVoTBnA.webp", correct: false },
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
  scoreElement.innerText = `${score}/${questions.length}(${percentage}%)`;
  nextButton.style.display = "none";
}