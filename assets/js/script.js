
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
        var timeLeft = 300;
        
        var timeInterval = setInterval(function() {
            if (timeLeft > 0) {
            timerEl.textContent = 'Time:' + timeLeft;
            timeLeft--;
            } else {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
            displayMessage();
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

        document.querySelector('#body').appendChild(welcomeCard);
        document.querySelector(".card").appendChild(welcomeCardHead);
        document.querySelector(".card").appendChild(welcomeCardText);
        document.querySelector(".card").appendChild(clickMe);
}

//This is the timer
var timerEl = document.querySelector('#timer');
// var clickMe = document.querySelector('#clickMe');



 

/* Once the welcome card goes away, I need a for loop with an
if statement saying that if the body is empty, then access 
the array of questions */
