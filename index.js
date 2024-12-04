const quizData = [
  {
    question: "What does the 'var' keyword do in JavaScript?",
    options: [
      "Defines a variable",
      "Defines a function",
      "Defines a class",
      "Defines a loop",
    ],
    correctAnswer: "Defines a variable",
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'string'"],
    correctAnswer: "'object'",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Mozilla", "Netscape", "Apple"],
    correctAnswer: "Netscape",
  },
  {
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    correctAnswer: ".push()",
  },
  {
    question: "What does 'NaN' represent in JavaScript?",
    options: ["Not a Null", "Not a Number", "Not a Name", "None"],
    correctAnswer: "Not a Number",
  },
  {
    question: "How do you declare a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "function:myFunction() {}",
      "func myFunction() {}",
    ],
    correctAnswer: "function myFunction() {}",
  },
  {
    question: "Which method converts a JSON object to a string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toString()",
      "JSON.convert()",
    ],
    correctAnswer: "JSON.stringify()",
  },
  {
    question:
      "What is the default value of an uninitialized variable in JavaScript?",
    options: ["null", "undefined", "0", "NaN"],
    correctAnswer: "undefined",
  },
  {
    question: "What is the purpose of `this` keyword in JavaScript?",
    options: [
      "Refers to the current object",
      "Refers to the global object",
      "Refers to a function",
      "Refers to a class",
    ],
    correctAnswer: "Refers to the current object",
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "/* This is a comment",
      "<!-- This is a comment-->",
    ],
    correctAnswer: "// This is a comment",
  },
  {
    question: "What does the 'var' keyword do in JavaScript?",
    options: [
      "Defines a variable",
      "Defines a function",
      "Defines a class",
      "Defines a loop",
    ],
    correctAnswer: "Defines a variable",
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'string'"],
    correctAnswer: "'object'",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Mozilla", "Netscape", "Apple"],
    correctAnswer: "Netscape",
  },
  {
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    correctAnswer: ".push()",
  },
  {
    question: "What does 'NaN' represent in JavaScript?",
    options: ["Not a Null", "Not a Number", "Not a Name", "None"],
    correctAnswer: "Not a Number",
  },
  {
    question: "How do you declare a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "function:myFunction() {}",
      "func myFunction() {}",
    ],
    correctAnswer: "function myFunction() {}",
  },
  {
    question: "Which method converts a JSON object to a string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toString()",
      "JSON.convert()",
    ],
    correctAnswer: "JSON.stringify()",
  },
  {
    question:
      "What is the default value of an uninitialized variable in JavaScript?",
    options: ["null", "undefined", "0", "NaN"],
    correctAnswer: "undefined",
  },
  {
    question: "What is the purpose of `this` keyword in JavaScript?",
    options: [
      "Refers to the current object",
      "Refers to the global object",
      "Refers to a function",
      "Refers to a class",
    ],
    correctAnswer: "Refers to the current object",
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "/* This is a comment",
      "<!-- This is a comment",
    ],
    correctAnswer: "// This is a comment",
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["==", "===", "=", "!=="],
    correctAnswer: "===",
  },
  {
    question:
      "Which function is used to parse a string as a JSON object in JavaScript?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toJSON()",
    ],
    correctAnswer: "JSON.parse()",
  },
  {
    question: "Which of the following is a valid JavaScript array?",
    options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "[1:2:3]"],
    correctAnswer: "[1, 2, 3]",
  },
  {
    question:
      "Which of the following is used to define a block of code that only runs when a condition is true?",
    options: ["if statement", "for loop", "while loop", "switch statement"],
    correctAnswer: "if statement",
  },
  {
    question: "What does the `push()` method do in JavaScript?",
    options: [
      "Removes the last element",
      "Adds an element at the end",
      "Adds an element at the beginning",
      "Removes the first element",
    ],
    correctAnswer: "Adds an element at the end",
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "const", "var", "final"],
    correctAnswer: "const",
  },
  {
    question: "What does the `isNaN()` function do in JavaScript?",
    options: [
      "Checks if a variable is a number",
      "Checks if a variable is not a number",
      "Converts a variable to a number",
      "Converts a variable to a string",
    ],
    correctAnswer: "Checks if a variable is not a number",
  },
  {
    question:
      "How do you declare a variable that can change its value in JavaScript?",
    options: ["var", "let", "const", "final"],
    correctAnswer: "let",
  },
  {
    question: "Which of the following is a valid JavaScript string?",
    options: [
      "'Hello, world!'",
      "Hello, world!",
      "Hello world!",
      "Hello world!",
    ],
    correctAnswer: "'Hello, world!'",
  },
  {
    question: "Which of the following is NOT a data type in JavaScript?",
    options: ["String", "Integer", "Boolean", "Object"],
    correctAnswer: "Integer",
  },
  {
    question:
      "Which method is used to remove the first element from an array in JavaScript?",
    options: [".shift()", ".pop()", ".unshift()", ".push()"],
    correctAnswer: ".shift()",
  },
  {
    question: "How can you check if a variable is an array in JavaScript?",
    options: [
      "Array.isArray()",
      "Array.isObject()",
      "typeof variable",
      "variable instanceof Array",
    ],
    correctAnswer: "Array.isArray()",
  },
  {
    question: "What will `alert(2 + '2')` output in JavaScript?",
    options: ["4", "22", "undefined", "NaN"],
    correctAnswer: "22",
  },
  {
    question: "Which of the following is used to stop a loop in JavaScript?",
    options: ["stop", "exit", "continue", "break"],
    correctAnswer: "break",
  },
  {
    question:
      "Which of the following JavaScript methods can be used to round a number?",
    options: [
      "Math.floor()",
      "Math.ceil()",
      "Math.round()",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "What will the following code output? `console.log(typeof NaN)`",
    options: ["'number'", "'undefined'", "'NaN'", "'object'"],
    correctAnswer: "'number'",
  },
  {
    question: "What does the `filter()` method do in JavaScript?",
    options: [
      "Filters elements in an array",
      "Sorts the array",
      "Creates a new array with the selected items",
      "Removes all elements",
    ],
    correctAnswer: "Creates a new array with the selected items",
  },
  {
    question: "Which event is triggered when an HTML element is clicked?",
    options: ["onchange", "onclick", "onfocus", "onmouseover"],
    correctAnswer: "onclick",
  },
  {
    question:
      "Which of the following is NOT a valid way to create a JavaScript object?",
    options: [
      "var obj = {}",
      "var obj = new Object()",
      "var obj = object()",
      "var obj = Object.create()",
    ],
    correctAnswer: "var obj = object()",
  },
  {
    question:
      "Which method is used to join all elements of an array into a string in JavaScript?",
    options: [".split()", ".join()", ".concat()", ".toString()"],
    correctAnswer: ".toString()",
  },
];

var question = document.getElementById("question-container");
var option = document.getElementById("option");
var indexNo = 0;
var correctAnswer = 0;
var wrongAns = 0;
var Button = document.getElementById("btn");
var resultPara = document.getElementById("resultPara");
var result = document.getElementById("result");
var quizBody = document.getElementById("container");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var second = 60;
var minutes = 15;
// var percentage = (correctAnswer / quizData.length) * 100;
var startContainer = document.getElementById("start");
var interval;

var allLi = option.children;

function quizHandler() {
  var UiQuestion = quizData[indexNo].question;
  var UiOption = quizData[indexNo].options;
  question.innerHTML = UiQuestion;
  option.innerHTML = "";
  // console.log(UiOption)
  for (var opt of UiOption) {
    option.innerHTML += `<li onclick='checkHandler(this)'>${opt}</li>`;
  }
}

function nextQuestion() {
  // console.log(quizData.length)
  if (indexNo < quizData.length - 1) {
    indexNo++;
    quizHandler();
    if (indexNo == quizData.length - 1) {
      Button.innerHTML = "Submit";
    }
  } else {
    clearInterval(interval);
    result.style.display = "block";
    quizBody.style.display = "none";
    var percentage = (correctAnswer / quizData.length) * 100;
    resultPara.innerHTML = `Correct: ${correctAnswer}<br>Wrong: ${wrongAns}<br>Percentage: ${percentage}%`;
  }
}

function checkHandler(ele) {
  var allLi = option.children;
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
    for (var li of allLi) {
      if (li.innerHTML == checkans) {
        li.style.backgroundColor = "green";
        li.style.color = "white";
      }
    }
  }
  for (var opt = 0; opt < allLi.length; opt++) {
    allLi[opt].style.pointerEvents = "none";
  }
}

function quizTime() {
  second--;
  sec.innerHTML = `:${second}`;
  // console.log(second);
  if (second == 0) {
    second = 60;
    minutes--;
    min.innerHTML = minutes;
  } else if (minutes == 0) {
    clearInterval(interval);
    result.style.display = "block";
    quizBody.style.display = "none";
    var percentage = (correctAnswer / quizData.length) * 100;
    resultPara.innerHTML = `Correct: ${correctAnswer}<br>Wrong: ${wrongAns}<br>Percentage: ${percentage}%`;
  }
}
function start() {
  startContainer.style.display = "none";
  interval = setInterval(quizTime, 1000);
  quizBody.style.display = "block";
}
