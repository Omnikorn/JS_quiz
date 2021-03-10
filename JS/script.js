// variables used in the quiz

var questEl = document.querySelector("#questText");
var aEl= document.querySelector("#a");
var bEl= document.querySelector("#b");
var cEl= document.querySelector("#c");
var dEl= document.querySelector("#d");
var currentQuestion=0;
var timeEl=document.querySelector("#time");
var timeLeft= 120;
var score= 0;
var scoreEl=document.querySelector("#score");
var startEl=document.querySelector("#start_btn");
var hideEl=document.querySelector("body > main > section.wrapper > div.hide");
var finalScoreEl=document.querySelector("#finalScaor");
var answerAreaEl=document.querySelector("body > main > section.wrapper > div.answer_area");


let question =[
    {
        text: "paris is the capital of ?",
        ansA: "UK",
        ansB: "France",
        ansC: "Germany",
        ansD: "Canada",
        correctAnswer: "b",
    },
    {
        text: "The longest river in the world is ?",
        ansA: "Nile",
        ansB: "Amazon",
        ansC: "Thames",
        ansD: "Danube",
        correctAnswer: "a",
    },
    {
    text: "what is the highest mountain in the world",
    ansA: "Mount Fuji",
    ansB: "Mount Kelimanjaro",
    ansC: "Mount Snowdin",
    ansD: "The Himalaya",
    correctAnswer: "d",
    }
]




function hideTheStart (){
    hideEl.setAttribute("style", "display: none");  
}


// main functions used in the quiz

function Quiz() {
    // hideTheStart()
    console.log("this is the main quiz");
    console.log (question.length);
    if (currentQuestion < question.length && timeLeft > 0){
    questionRender();
    }
    else { endGame ();}
    
}
// this renders questions
function questionRender(){
    console.log("this is question render")
questEl.textContent =(question[currentQuestion].text);
aEl.textContent = (question[currentQuestion].ansA);
bEl.textContent = (question[currentQuestion].ansB);
cEl.textContent = (question[currentQuestion].ansC);
dEl.textContent = (question[currentQuestion].ansD);
}

// this checks for the clicked answer and runs appropriate function. 
function checkAnswer(clicked_id) {
    console.log(clicked_id)
if (clicked_id === question[currentQuestion].correctAnswer) {
    console.log(clicked_id);
    correctQuestion ();
}
else {wrongQuestion();}
}

// if the player gets the correct answer 
function correctQuestion() {
    // soem sort of message is needed to say you are correct.
    currentQuestion ++;
    score = score + 10;
    scoreEl.textContent=(score)
    console.log ("currentquestion number ::" +currentQuestion);
    console.log ("score ::" + score);
    Quiz(); 
}

// if the player gets the wrong answer 
function wrongQuestion() {
    // some sort of message to say you are wrong.
    currentQuestion ++;
    timeLeft = timeLeft - 20;
    Quiz();
}

function endGame (){
    localStorage.setItem("score", score);
    answerAreaEl.setAttribute("style", "display: none");
    finalScoreEl.setAttribute("style", "visibilty: visible");
    hideEl.setAttribute("style", "display: flex");
    finalScoreEl.setAttribute("style","color: rgb(164,87,105); font-size: 36px");
    
  

    // finalScoreEl.classList.add("endGame");
    
    finalScoreEl.textContent=(score);

    // calculate score form score
    // input initial and save them to local storage along with the score 
}

function setTime() {
    console.log("in the timer function")
    timeEl.textContent = (timeLeft);
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent =(timeLeft + " seconds left" )
  
      if(timeLeft === 0) {
        
        clearInterval(timerInterval);
        
      }
  
    }, 1000);
  }


 
// the start button for the quiz - calls the main game and time functions then hides the start button. 

startEl.addEventListener("click", function(event){
    event.preventDefault();
    Quiz();
    setTime();
    hideTheStart();
})
