
function start (quiz) {
    let score = 0; // initialise score
}
    // main loop game
for (const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
}

    // end of main game loop
    
    gameOver();

    // function declarations
   function ask(question) {
        return prompt(question);
    }

    function check(response,answer) {
        if (response === answer) {
            alert ('correct');
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        alert(`Game over, you scored ${score} point${score != 1 ? 's' : ''}`);
    }
    start(quiz); 
   