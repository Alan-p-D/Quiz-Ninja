alert('Welcom to the Quiz Ninja!');

/*const quiz = [  // quiz array including questions and answers
    ["What is superman's real name?", "Clark Kent"],
    ["What is wonder woman's real name?", "Diana Prince"],
    ["what is batman's real name?", "Bruce Wayne"]
];*/

const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Dianna Prince"},
    {name: "Batman", realName: "Bruce Wayne"},
];

// View object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

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
        view.render(view.question,question);
        const response = prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',
        { 'class': 'correct'});
            alert('Correct!');
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,
        {'class': 'wrong'});
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        view.render(view.info,`Game over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        alert(`Game over, You scored ${this.score} points${this.score !== 1 ? 's' : ''}`);
    }
}

game.start(quiz);