alert('Welcom to the Quiz Ninja!');

const quiz = [  // quiz array including questions and answers
    ["What is superman's real name?", "Clark Kent"],
    ["What is wonder woman's real name?", "Diana Prince"],
    ["what is batman's real name?", "Bruce Wayne"]
];

const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"},
];

const game = {
    start(quiz){
        this.question = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.question){
            this.question = question;
            this.ask();
        }
        // end of main loop
        this.gameOver();
    },
    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
            alert('Correct!');
            this.score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        alert(`Game over, You scored ${this.score} points${this.score !== ? 's' : ''}`);
    }
}

game.start(quiz);



/*
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
    start(quiz); */
   