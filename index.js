const quizData = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correctAnswer: "Islamabad",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote the national anthem of Pakistan?",
    options: [
      "Allama Iqbal",
      "Hafeez Jullundhri",
      "Faiz Ahmed Faiz",
      "Ahmed Faraz",
    ],
    correctAnswer: "Hafeez Jullundhri",
  },
  {
    question: "What is the smallest ocean in the world?",
    options: [
      "Indian Ocean",
      "Arctic Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Arctic Ocean",
  },
  {
    question: "Who is known as the Father of Computers?",
    options: [
      "Alan Turing",
      "Charles Babbage",
      "John von Neumann",
      "Blaise Pascal",
    ],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "What is the national animal of Pakistan?",
    options: ["Markhor", "Tiger", "Lion", "Snow Leopard"],
    correctAnswer: "Markhor",
  },
];

var question = document.getElementById("question-container");
var option = document.getElementById("option");
var indexNo = 0;
var correctAnswer=0;
var wrongAns=0;
var Button = document.getElementById("btn")

function quizHandler() {
  var UiQuestion = quizData[indexNo].question;
  question.innerHTML = UiQuestion;
  var UiOption = quizData[indexNo].options;
  option.innerHTML = "";
  // console.log(UiOption)
  for (var opt of UiOption) {
    option.innerHTML += `<li onclick='checkHandler(this)'>${opt}</li>`;
  }
}

function nextQuestion(){
  console.log(quizData.length)
  if(indexNo < quizData.length-1){
    indexNo++;
    quizHandler();
  }
  else{
    Button.innerHTML="Submit";
  }
}

function checkHandler(ele) {
  var allLi = option.children
  var checkans = quizData[indexNo].correctAnswer;
  var result = checkans == ele.innerHTML;
  if (result) {
    ele.style.backgroundColor = "green";
    ele.style.color = "white";
    correctAnswer++;
  } else {
    ele.style.backgroundColor = "red";
    ele.style.color = "white";
    wrongAns++;
  }
  
  for (var opt = 0; opt < allLi.length; opt++) {
    allLi[opt].style.pointerEvents = "none";
  }
}
