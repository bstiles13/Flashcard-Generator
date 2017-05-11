var inquirer = require('inquirer');

var cards = [];
var randomArray = [];
var count = 0;
var correct = 0;
var basic = require('./basiccard.js');
var cloze = require('./clozecard.js');

//QUESTIONS
cards.push(basic.BasicCard('What planet is Luke raised on?', 'Tatooine'));
cards.push(cloze.ClozeCard('Padme is 5 years older than Anakin.', '5'));
cards.push(cloze.ClozeCard('Darth Sidious, also known as The Emperor, disguised himself as Chancellor Palpatine.', 'Palpatine'));
cards.push(cloze.ClozeCard('The rebel base on Hoth was called Echo Base.', 'Echo'));
cards.push(basic.BasicCard('What year was "A New Hope" released?', "1977"));
cards.push(basic.BasicCard('What color is Luke\'s second lightsaber?', 'Green'));
cards.push(basic.BasicCard('What color is Mace Windu\'s lightsaber?', 'Purple'));
cards.push(basic.BasicCard('The movement of the AT-AT Imperial Walker is inspired by what animal?', 'Elephant'));
cards.push(cloze.ClozeCard('Rey force persuades a stormtrooper cameoed by actor Daniel Craig in The Force Awakens.', 'Daniel Craig'));

// console.log(cards);

function randomize() {
    var placeholder = cards;
    while (placeholder.length > 0) {
        var uproot = placeholder[Math.floor(Math.random() * placeholder.length)];
        randomArray.push(uproot);
        placeholder.splice(placeholder.indexOf(uproot), 1);
    }

    // console.log(randomArray);
    count = randomArray.length - 1;
}

randomize();

function start() {
    inquirer.prompt([{
        type: 'list',
        message: 'Star Wars Flashcards',
        choices: ['Play', 'Exit'],
        name: 'play'
    }]).then(function(user) {
        if (user.play === "Exit") {
            return;
        } else if (user.play === "Play") {
            play();
        }
})
}

start();


function play() {
            var question;
            var answer;
            if (randomArray[count].front != null) {
                question = randomArray[count].front;
                answer = randomArray[count].back;
            } else if (randomArray[count].partial != null) {
                question = randomArray[count].partial;
                answer = randomArray[count].cloze;
            }
            inquirer.prompt([{
                type: 'input',
                message: question,
                name: 'guess',
            }]).then(function(user) {
                if (user.guess.toLowerCase() === answer.toLowerCase()) {
                    console.log('Correct!');
                    correct++;
                } else {
                    console.log('Wrong!');
                    console.log('Answer: ' + answer);
                }
                if (count > 0) {
                    count--;
                    play();
                } else {
                    console.log('Game over. You answered ' + correct + ' of ' + randomArray.length + ' questions correctly.');
                    start();
                }
            })

}