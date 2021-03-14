// variables used in the quiz

var questEl = document.querySelector("#questText")
var aEl = document.querySelector("#a")
var bEl = document.querySelector("#b")
var cEl = document.querySelector("#c")
var dEl = document.querySelector("#d")
var currentQuestion = 0
var timeEl = document.querySelector("#time")
var timeLeft = 120
var finalTime = 0
var score = 0
var scoreEl = document.querySelector("#score")
var startEl = document.querySelector("#start_btn")
var hideEl = document.querySelector(
    "body > main > section.wrapper > div.hide"
)
var finalScoreEl = document.querySelector("#finalScaor")
var answerAreaEl = document.querySelector(
    "body > main > section.wrapper > div.answer_area"
)
var initialEl = document.querySelector("#initials")
var previousEl = document.querySelector("#previous_score")
var submitEl = document.querySelector("#submit")
var showEl = document.querySelector("body > main > section.wrapper > div.show")
var retakeEl = document.querySelector("#retake")

let question = [
    {
        text: "Inside which HTML element do we Javascript?",
        ansA: "scripting",
        ansB: "script",
        ansC: "js",
        ansD: "javascript",
        correctAnswer: "b",
    },
    {
        text: "How would you write 'hello world' in an alert box",
        ansA: "aler('hello world')",
        ansB: "msg('hello world')",
        ansC: "alertBox('hello world')",
        ansD: "msgBox('hello world')",
        correctAnswer: "a",
    },
    {
        text: "which of these is not used to declare a variable",
        ansA: "var",
        ansB: "const",
        ansC: "let",
        ansD: "variable",
        correctAnswer: "d",
    },

    {
        text: "how would you write an if statement in Javascript",
        ansA: "if i = 5",
        ansB: "if i == 5 then",
        ansC: "if i = 5",
        ansD: "if (i==5)",
        correctAnswer: "d", 
    },
    {
        text: "how to write an if statement for saying i is not equal to 5",
        ansA: "if (i !=5)",
        ansB: "if i <> 5",
        ansC: "if i =! 5 then",
        ansD: "if (i<>5)",
        correctAnswer: "a",     
    }
]

function hideTheStart() {
    hideEl.setAttribute("style", "display: none")
}

// main functions used in the quiz

function Quiz() {
    
    hideTheStart()
    
    console.log("this is the main quiz")
    console.log(question.length)
    if (currentQuestion < question.length && timeLeft > 0) {
        questionRender()
    } else {
        endGame()
    }
}
// this renders questions
function questionRender() {
    console.log("this is question render")
    questEl.textContent = question[currentQuestion].text
    aEl.textContent = question[currentQuestion].ansA
    bEl.textContent = question[currentQuestion].ansB
    cEl.textContent = question[currentQuestion].ansC
    dEl.textContent = question[currentQuestion].ansD
}

// this checks for the clicked answer and runs appropriate function.
function checkAnswer(clicked_id) {
    console.log(clicked_id)
    if (
        clicked_id === question[currentQuestion].correctAnswer
    ) {
        console.log(clicked_id)
        correctQuestion()
    } else {
        wrongQuestion()
    }
}

// if the player gets the correct answer
function correctQuestion() {
    // soem sort of message is needed to say you are correct.
    currentQuestion++
    score = score + 10
    scoreEl.textContent = score
    console.log("currentquestion number ::" + currentQuestion)
    console.log("score ::" + score)
    Quiz()
}

// if the player gets the wrong answer
function wrongQuestion() {
    // some sort of message to say you are wrong.
    currentQuestion++
    timeLeft = timeLeft - 20
    Quiz()
}

// this function runs when the game ends
function endGame() {
    // localStorage.setItem("score", score)
    answerAreaEl.setAttribute("style", "display: none")
    // finalScoreEl.setAttribute("style", "visibilty: visible")
    // hideEl.setAttribute("style", "display: flex")
    finalScoreEl.setAttribute(
        "style",
        "color: rgb(164,87,105); font-size: 50px"
    )

    showEl.style.display = "unset"

    finalTime = timeLeft

    finalScoreEl.textContent = score

    renderMessage()
}

function setTime() {
    console.log("in the timer function")
    timeEl.textContent = timeLeft
    var timerInterval = setInterval(function () {
        timeLeft--
        timeEl.textContent = timeLeft + " seconds left"

        if (finalTime > 0) {

            timeEl.textContent = "You had " + finalTime + " seconds left."
            clearInterval(timerInterval)

        }

        if (timeLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

// the start button for the quiz - calls the main game and time functions then hides the start button.

startEl.addEventListener("click", function (event) {
    
    event.preventDefault()
    Quiz()
    setTime()
    hideTheStart()
})

function renderMessage() {
    var PreviousHighScore = JSON.parse(
        localStorage.getItem("highScore")
    ) || [];

    var highestScore = 0; 
    var highestScoreDisplay = "";
    for (var i = 0; i< PreviousHighScore.length; i++){
        var score = PreviousHighScore[i].finalScore;
        if(score > highestScore){
            highestScoreDisplay = PreviousHighScore[i].initials + ":" + PreviousHighScore[i].finalScore;
        }
    }

     if (highestScoreDisplay.length > 0) {
        previousEl.textContent = highestScoreDisplay
        
     } else {
         previousEl.textContent = "You are the first person to take the quiz...so you win"
     }
}

submitEl.addEventListener("click", function (event) {
    event.preventDefault()
    var highScores = JSON.parse(
        localStorage.getItem("highScore")
    ) || [];
    var initials = initialEl.value.trim()
    console.log(initials)
    var newScore = {
        initials: initials,
        finalScore: score,
    }
highScores.push(newScore)

    localStorage.setItem(
        "highScore",
        JSON.stringify(highScores)
    )
})
retakeEl.addEventListener("click", function(){
    window.location.reload();
})
