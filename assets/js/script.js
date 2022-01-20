
var timeLeft = 60;

body.onload = function() {
    // load initial welcome card
    var welcomeCard = document.createElement("card");
        welcomeCard.textContent = "";
        welcomeCard.className = "card";

    var welcomeCardHead = document.createElement("h1");
        welcomeCardHead.textContent = "Coding Quiz";
        welcomeCardHead.className = "cardHead";

    var welcomeCardText = document.createElement("h2");
        welcomeCardText.textContent = "Click the button below to begin the quiz!";
        welcomeCardText.className = "cardText";

    var clickMe = document.createElement("button");
        clickMe.textContent = "Begin";
        clickMe.className = "btn clickMe";

    // begin timer when Begin button is clicked
    function countdown() {
        //var timeLeft = 60;
        
        var timeInterval = setInterval(function() {
            if (timeLeft > 0) {
            timerEl.textContent = 'Time:' + timeLeft;
            timeLeft--;
            } else {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
            //displayMessage(); Change this to results
            }
        }, 1000);
    };
    
    clickMe.addEventListener('click', countdown);

    // Delete Card when Begin button is clicked
    function deleteItem() {
        console.log(this);
        welcomeCard.remove();
    };
    
    clickMe.addEventListener('click', deleteItem);

    //Load Question Cards when Begin Button is clicked
    /*function qCards() {
        document.querySelector("#body-div").appendChild(qCardOne);
    };  */  
    clickMe.addEventListener('click', createCards);

    document.querySelector('#body-div').appendChild(welcomeCard);
    document.querySelector(".card").appendChild(welcomeCardHead);
    document.querySelector(".card").appendChild(welcomeCardText);
    document.querySelector(".card").appendChild(clickMe);
};

//This is the timer
var timerEl = document.querySelector('#timer');

//the for-loop to go through the cards
/*var qCards = function() {
    for(var i = 0; i < questions.length; i++) {
        document.querySelector('#body').appendChild(questions[i]);
    }
};*/
function createCards() {

    var qCardOne = document.createElement('card');
        qCardOne.textContent = "This is the first question. What's the answer?";
        qCardOne.className = "card qCard qOne";

        //buttons
        //wrong
    var CardOneA = document.createElement('button');
        CardOneA.textContent = "This one is wrong";
        CardOneA.className = "wrong btn";
        //wrong
    var CardOneB = document.createElement('button');
        CardOneB.textContent = "This one is wrong";
        CardOneB.className = "wrong btn";
        //right
    var CardOneC = document.createElement('button');
        CardOneC.textContent = "This one is right";
        CardOneC.className = "right btn";
        //wrong
    var CardOneD = document.createElement('button');
        CardOneD.textContent = "This one is wrong";
        CardOneD.className = "wrong btn";

    document.querySelector('#body-div').appendChild(qCardOne);
    document.querySelector(".qOne").appendChild(CardOneA);
    document.querySelector(".qOne").appendChild(CardOneB);
    document.querySelector(".qOne").appendChild(CardOneC);
    document.querySelector(".qOne").appendChild(CardOneD);


    document.querySelector(".wrong").addEventListener('click', wrongAnswer);
    document.querySelector(".wrong").addEventListener('click', subTime);

    document.querySelector(".right").addEventListener('click', rightAnswer);

        // when the wrong answer is selected

    function wrongAnswer() {
        var wrong = document.createElement('p');
        wrong.textContent = "Wrong!";
        wrong.className = "response";

        document.querySelector("#boolean").appendChild(wrong);
    };

    function rightAnswer() {
        var correct = document.createElement('p');
        correct.textContent = "Correct!";
        correct.className = "response";

        document.querySelector('#boolean').appendChild(correct);
    }

    function subTime() {
        timeLeft -= 5;
    };
}
  



 

/* Once the welcome card goes away, I need a for-loop with an
if statement saying that if the body is empty, then access 
the array of questions 

If what? If the body card is empty, then load the cards in 
this array. So I need an array.

What do I need this to do? 
1) I need a new card to be loaded (appendChild).
2) I need 
*/