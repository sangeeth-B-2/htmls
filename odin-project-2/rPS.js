
let human = 0;
let computer = 0;
//PROCESS OF GAME:

function rpsGame(ourChoiceNow, compChoiceNow) {
    let results = ["ROCK", "PAPER", "SCISSOR"];
    const winConditions = {
        'ROCK': 'SCISSORS',
        'PAPER': 'ROCK',
        'SCISSORS': 'PAPER'
    };

    //tie
    if (ourChoiceNow === compChoiceNow) {
        console.log('both choose same!!!');
        console.log(results[2]);
    } else if (winConditions[ourChoiceNow] === compChoiceNow) {
        //WE WON
        console.log(results[0]);
        console.log(`you picked ${ourChoiceNow} , computer picked ${compChoiceNow}`);

        human++;
    } else {
        // Computer WON
        console.log(results[1]);
        console.log(`you picked ${ourChoiceNow} , computer picked ${compChoiceNow}`);
        computer++;
    }

    //showing who picked what
    console.log(`Human: ${human}, Computer: ${computer}`);
}


//prompting for our input and generating computer's choice.
//deciding who wins 
function playGame() {
    let picks = ["ROCK", "PAPER", "SCISSOR"]
    for (let i = 1; i <= 5; i++) {
        let ourChoiceNow = prompt("enter you choice:  rock or paper or scisscors").toUpperCase();
        let compChoice = picks[Math.floor(Math.random() * picks.length)];

        if (picks.includes(ourChoiceNow)) {
            rpsGame(ourChoiceNow, compChoice);
        } else {
            console.log("spell correctly pls ( ' rock , paper , scissor')");
            i--;
        }
    }
    console.log(`score : human : ${human}, computer : ${computer}`);

    if (human > computer) {
        console.log("You won the game!");
    } else if (human < computer) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!");
    }

}
playGame();

