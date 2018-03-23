alert('Welcom to the Quiz Ninja!');


//const message = 'Hello World!';
//alert(message);

//const question = "What is Superman's real name?";
//const answer = prompt(question);
//alert('You answered ${answer}');

const quiz = [  // quiz array including questions and answers
    ["What is superman's real name?", "Clark Kent"],
    ["What is wonder woman's real name?", "Diana Prince"],
    ["what is batman's real name?", "Bruce Wayne"]
];

let score = 0 // initialise score

for (const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct');
        score++;
    } else {
        alert(`wrong! the correct answer was ${answer}`);
    }
}

// At the end of the game, report the player's score.
    alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`);


