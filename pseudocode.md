start button 
    -hide the start div 
    -start the timer
    -start the first question 


question variables 
    array with question objects 
    question=[ 
        { q: text
          choiceA: ......
          choiceB: ......
          choiceC: .......
          correct: A

        }
    ]

question render 
    ?populat the questions and answers into variable 

Showr render 
    show the populated question on the screen
    ?textContent
    ?innerHTML
    ?appenChild()

answer render 
    event listers (click - value ) from each option button.

Answer checker
    Check value from button against the correct populated answer
    if correct move on to next question. 
    if not deduct 10 seconds then move on form the timer then move on 

Timer 
    to display time on screen 

Scoor keerper 
    store the score in a variable 
    store it in on the local storage 
    retreive the last score stored 