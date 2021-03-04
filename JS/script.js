// questions
// this might  need to go in an array 
questions=[
    q1 {
    text:" where is the eiffel tower located ?";
    options: ["Paris", "London", "Moscow", "Berlin"];
    correctAnswer:"Paris"
},

    q2 {
    text:"Where is the Beetham tower located ?";
    options: ["london", "Manchester", "New Castle", "Hull"];
    correctAnswer:"Manchester";
},
];

for (var i=0; i<question.length; i++ ) {
    let askQuestion=getElementById("questionHere");
    askQuestion.appendChild(questions[i].text);
    
    for (var j=0, j<questions[i].options[j], j++) {
        
    }

}