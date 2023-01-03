let dataQuiz = [
  { 
   question: "who is the best player in the history?" ,
   a :"Messi" ,
   b :"Ronaldo" ,
   c :"Maradona" ,
   d :" Peli" ,
   correct :"a"
  } ,
  { 
   question: "who is the biggest country in Africa ?" ,
   a :"Tunisia" ,
   b :"Morocco" ,
   c :"Algeria" ,
   d :"South Africa" ,
   correct :"c"
  } ,
  { 
   question: "What is the popular programming language in 2022 ?" ,
   a :"Python" ,
   b :"Java" ,
   c :"C++" ,
   d :"JavaScript" ,
   correct :"d"
  } ,
  { 
   question: "Who won the world cup in 2022 ?" ,
   a :"France" ,
   b :"Argentina" ,
   c :"Morroco" ,
   d :"Croitia" ,
   correct :"b"
  } , 
  { 
   question: "Which is the only continent in the world without desert  ?" ,
   a :"North America " ,
   b :"Europe" ,
   c :"Africa" ,
   d :"Asia" ,
   correct :"b"
  } ,
  { 
   question: "what is the best movie in the history  ?" ,
   a :"The godfather" ,
   b :"Inception" ,
   c :"The shawshank" ,
   d :"Titanic" ,
   correct :"c"
  }
]

const questionText = document.querySelector(".question");
let anser_a = document.querySelector(".a");
let anser_b = document.querySelector(".b");
let anser_c = document.querySelector(".c");
let anser_d = document.querySelector(".d");
let inputs = document.querySelectorAll(".input");
const sendBtn = document.querySelector(".sendbtn");
const gameCard = document.querySelector(".game-card");
const rightAnswer = document.querySelector(".rightanswer");

window.addEventListener("load" , showAnswers);
let currentQuetion = 0 ;
let score = 0;
function showAnswers() {
  let pageQuiz= dataQuiz[currentQuetion];
  questionText.textContent = pageQuiz.question;
  anser_a.textContent = pageQuiz.a;
  anser_b.textContent = pageQuiz.b;
  anser_c.textContent = pageQuiz.c;
  anser_d.textContent = pageQuiz.d;

  inputs.forEach( (input) => {
    input.checked = false ;  //remove previous input checked
  })
}

//check input
function getAnswer() {
  let answer = undefined;
  inputs.forEach(input => {
    if(input.checked) {
      answer = input.id ;
    }
  })
  return answer ;
}

sendBtn.addEventListener("click" ,sendAnswer)

function sendAnswer() {
  let answer = getAnswer();

  if(answer) {

    if(answer === dataQuiz[currentQuetion].correct) {
     score++; //number of right answers
     rightAnswer.textContent = `${score} of ${dataQuiz.length} Questions`;
    }
    nextQuestion()
  }
}

function nextQuestion() {
  currentQuetion++;
    if  (currentQuetion >= dataQuiz.length) {
      gameCard.innerHTML =  `
      <h4 class="score"> You have answered ${score}/${dataQuiz.length} from questions
      </h4>
      <button onclick="reload()">Restart</button>`;
    } else {
      showAnswers()
    }
}
//restart the game
function reload() {
  window.location.reload()
}
const timeLeft = document.querySelector(".timeleft")
let countDown = 10;
function quizTime() {
  sendBtn.addEventListener("click" , ()=> {
    countDown = 10;
  })
  countDown--
  if(countDown < 0) {
    nextQuestion()
    countDown = 10;
  } 
  if(countDown < 4) {
    timeLeft.style.color = "#b104c0"
  } else {
    timeLeft.style.color = "#000"
  }
  timeLeft.textContent = countDown + "s"
}
setInterval(quizTime,1000)