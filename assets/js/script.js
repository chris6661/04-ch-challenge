//constants for quiz
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choice = document.getElementById("A"); 
const choice = document.getElementById("B"); 
const choice = document.getElementById("C"); 
const choice = document.getElementById("D"); 
const counter = document.getElementById("counter");
const timeGuage = document.getElementById("timeGuage");
const progress = document.getElementById("progress");
const score = document.getElementById("score");

//question creation
var questions = [
    {
        question: "What is a for loop used for?",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }, {
            question: "",
            choiceA: "",
            choiceB: "",
            choiceC: "",
            choiceD: "",
            correct: ""
        }, {
            question: "",
            choiceA: "",
            choiceB: "",
            choiceC: "",
            choiceD: "",
            correct: ""
        },
];
//variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

//questions function
function renderQuestion () {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceA.innerHTML = q.choiceB;
    choiceA.innerHTML = q.choiceC;
    choiceA.innerHTML = q.choiceD;

}